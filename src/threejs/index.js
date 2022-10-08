/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-06 19:55:50
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-07 17:52:30
 * @FilePath: \relytosoft-mizar-media-uie:\project\egProject\src\threejs\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入Three.js
import * as THREE from 'three';
// 引入Three.js扩展库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
/**
 * 创建网格模型
 */
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
var material = new THREE.MeshLambertMaterial({
    color: 0x00ff00
}); //材质对象Material
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh); //网格模型添加到场景中
/**
 * 光源设置
 */
//点光源
var point = new THREE.PointLight(0xffffff);
point.position.set(400, 200, 300); //点光源位置
scene.add(point); //点光源添加到场景中
//环境光
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
/**
 * 相机设置
 */
 var width = window.innerWidth; //窗口宽度
 var height = window.innerHeight; //窗口高度

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
// document.body.appendChild(renderer.domElement); //body元素中插入canvas对象

// 渲染函数
function render() {
    renderer.render(scene, camera);//执行渲染操作
    // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}
render();




//创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
var controls =new OrbitControls(camera, renderer.domElement);
console.log(controls,'cont')


export {renderer};