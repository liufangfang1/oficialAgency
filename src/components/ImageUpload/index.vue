<template>
  <div class="component-upload-image">
    <el-upload :action="uploadImgUrl" list-type="picture-card" :on-success="handleUploadSuccess" :before-upload="handleBeforeUpload" :limit="limit" :on-error="handleUploadError" :on-exceed="handleExceed" name="file" :on-remove="handleRemove" :show-file-list="true" :headers="headers" :file-list="fileList" :on-preview="handlePictureCardPreview" :class="{hide: this.fileList.length >= this.limit}">
      <i class="el-icon-plus"></i>
    </el-upload>

    <!-- 上传提示 -->
    <div class="el-upload__tip" slot="tip" v-if="showTip">
      请上传
      <template v-if="fileSize"> 大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b> </template>
      <template v-if="fileType"> 格式为 <b style="color: #f56c6c">{{ fileType.join("/") }}</b> </template>
      的文件
    </div>

    <el-dialog :visible.sync="dialogVisible" title="预览" width="800" append-to-body>
      <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import { fileDelete } from "@/api/file";

export default {
  props: {
    fileImg: {
      type: String,
      default: null,
    },
    value: [String, Object, Array, Number],
    // 图片数量限制
    limit: {
      type: Number,
      default: 5,
    },
    // 大小限制(MB)
    fileSize: {
      type: Number,
      default: 5,
    },
    // 文件类型, 例如['png', 'jpg', 'jpeg']
    fileType: {
      type: Array,
      default: () => ["png", "jpg", "jpeg"],
    },
    // 是否显示提示
    isShowTip: {
      type: Boolean,
      default: true,
    },
    type: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      hideUpload: false,
      baseUrl: this.$baseUrl,
      // uploadImgUrl: process.env.VUE_APP_BASE_URL + prefix+"/system/files/upload", // 上传的图片服务器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      fileList: [],
    };
  },
  watch: {
    fileImg: {
      handler(val) {
        //单个图片上传回填  多个回填暂未考虑
        console.log(val, "val");
        if (val) {
          this.fileList = [
            {
              id: this.value,
              name: val,
              url: val,
            },
          ];
        } else {
          this.fileList = [];
        }
      },
      deep: true,
      immediate: true,
    },

    value: {
      handler(val) {
        if (val) {
          // 首先将值转为数组
          return this.fileList;
        } else {
          this.fileList = [];
          return [];
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    uploadImgUrl() {
      if (this.type == 0) {
        //type 区域1000，设备1010
        return this.$baseUrl + "/system/files/upload"; // 上传的图片服务器地址;
      } else {
        return this.$baseUrl + "/system/files/upload/" + this.type;
      }
    },
    // 是否显示提示
    showTip() {
      return this.isShowTip && (this.fileType || this.fileSize);
    },
  },
  methods: {
    // 删除图片
    handleRemove(file, fileList) {
      const findex = this.fileList.map((f) => f.name).indexOf(file.name);
      if (file.id) {
        fileDelete(file.id)
          .then((res) => {
            if (findex > -1) {
              this.fileList.splice(findex, 1);
              this.$emit("input", this.listToString(this.fileList));
              this.$emit("onRemove", undefined);
            }
          })
          .catch((e) => {
            this.$message.error("删除失败");
          });
      } else {
        if (findex > -1) {
          this.fileList.splice(findex, 1);
          this.$emit("input", this.listToString(this.fileList));
        }
      }
    },
    // 上传成功回调
    async handleUploadSuccess(res, file) {
      // let img = new Image();

      if (res.code == 200) {
        this.fileList.push({
          name: res.data.fileName,
          url: res.data.url,
          id: res.data.id,
        });

        //获取图片原始尺寸 以图搜图需要计算画图比例
        let a = await this.getBase64(res.data.url);
        this.$emit("getpictureSize", a);
        
        this.$emit("input", this.listToString(this.fileList));
        this.$emit("getimgUrl", res.data.url);
        if (res.data.id) {
          this.$emit("onSuccess", res.data.id);
          this.$emit("changeboolean", true);
        }

        this.loading.close();
      } else {
        this.$message.error(res.msg);
        this.loading.close();
      }
    },
    getBase64(img) {
      const image = new Image();
      image.crossOrigin = "";
      image.src = img;
      return new Promise((resolve, reject) => {
        image.onload = function () {
          const { width, height } = image;
          resolve({ width, height });
        };
      });
    },

    // 上传前loading加载
    handleBeforeUpload(file) {
      let isImg = false;
      if (this.fileType.length) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        isImg = this.fileType.some((type) => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
      } else {
        isImg = file.type.indexOf("image") > -1;
      }

      if (!isImg) {
        this.$message.error(
          `文件格式不正确, 请上传${this.fileType.join("/")}图片格式文件!`
        );
        return false;
      }
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$message.error(`上传头像图片大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }
      this.loading = this.$loading({
        lock: true,
        text: "上传中",
        background: "rgba(0, 0, 0, 0.7)",
      });
    },
    // 文件个数超出
    handleExceed() {
      this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`);
    },
    // 上传失败
    handleUploadError(res) {
      this.$message({
        type: "error",
        message: "上传失败",
      });
      this.loading.close();
    },
    // 预览
    handlePictureCardPreview(file) {
      console.log(file, file.url, "file.url");
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 对象转成指定字符串分隔
    listToString(list, separator) {
      let strs = "";
      separator = separator || ",";
      for (let i in list) {
        strs += list[i].url + separator;
      }
      return strs != "" ? strs.substr(0, strs.length - 1) : "";
    },
  },
};
</script>
<style scoped lang="scss">
// .el-upload--picture-card 控制加号部分
::v-deep.hide .el-upload--picture-card {
  display: none;
}
// 去掉动画效果
::v-deep .el-list-enter-active,
::v-deep .el-list-leave-active {
  transition: all 0s;
}

::v-deep .el-list-enter,
.el-list-leave-active {
  opacity: 0;
  transform: translateY(0);
}
</style>

