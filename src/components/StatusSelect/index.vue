<template>
  <el-select :placeholder="placeholder" :value="value" @input="change($event)" clearable :disabled="disabled" size="small">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    value: "",
    disabled: {
      default: false,
    },
    placeholder: {
      default: "请选择",
    },
  },
  data() {
    return {
      options: [
        {
          value: 1,
          label: "启用",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
    };
  },
  methods: {
    change: function (val) {
      this.$emit("input", val);
    },
  },
};
</script>