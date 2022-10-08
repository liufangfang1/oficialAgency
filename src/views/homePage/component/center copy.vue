<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-07 17:32:45
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-08 10:48:28
 * @FilePath: \relytosoft-mizar-media-uie:\project\egProject\src\views\homePage\component\center.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div ref="webgl" id="webgl">
  </div>
</template>
<script>
// 引入Three.js
import * as THREE from 'three';
// 引入Three.js扩展库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {FBXLoader} from'three/examples/jsm/loaders/FBXLoader'
export default {
  data() {
    return {

    }
  },
  mounted() {

    /**
  * 创建场景对象Scene
  */
    var scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);
    /**
     * 创建网格模型
     */
    // var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    // var material = new THREE.MeshLambertMaterial({
    //   color: 0x00ff00
    // }); //材质对象Material
    // var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    // scene.add(mesh); //网格模型添加到场景中

    //修改物体位置
    //mesh.position.x=3//position 包含xyz
    //缩放
    //mesh.scale.set(3,2,1)
    //旋转
    //mesh.rotation.set(Math.PI/4,0,0)
    
    /**
     * 光源设置
     */
    //点光源
    // var point = new THREE.PointLight(0xffffff);
    // point.position.set(400, 200, 300); //点光源位置
    // scene.add(point); //点光源添加到场景中
    // //环境光
    // var ambient = new THREE.AmbientLight(0x444444);
    // scene.add(ambient);
    /**
     * 相机设置
     */
    var docDom = document.getElementById('webgl')
    var width = docDom.clientWidth; //窗口宽度
    var height = docDom.clientHeight; //窗口高度

    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);//设置渲染区域尺寸
    // renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    renderer.setClearColor('#f2f2f2')
    docDom.appendChild(renderer.domElement); //body元素中插入canvas对象

    //半球光
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 );
scene.add( light );
//辅助线
scene.add(new THREE.AxesHelper(100))
    // 渲染函数
    function render() {
      renderer.render(scene, camera);//执行渲染操作
      // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
      // requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
    }

    render();
//鼠标控件
    //创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
    var controls = new OrbitControls(camera, renderer.domElement);

  },
}
</script>
<style scoped>
.webgl {
  width: 100%;
  height: 100%;
}
</style>

