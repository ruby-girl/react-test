import React, { Component } from 'react';
import * as THREE from 'three';


class Three extends Component {

   componentDidMount() {
      this.init()
   }

   init = () => {
      const scene = new THREE.Scene()//创建场景
      const camera = new THREE.PerspectiveCamera(45, this.mount.clientWidth / this.mount.clientHeight, 0.1, 1000);//相机
      const cubeMaterial = new THREE.MeshLambertMaterial({ emissive: 0xFF0000 })//材质 emissive:自发光颜色
      const renderer = new THREE.WebGLRenderer({
         antialias: true
      })//创建渲染器
      renderer.setClearColor(0xffffff)
      renderer.setSize(this.mount.clientWidth, this.mount.clientHeight)
      renderer.shadowMap.enabled = true
      this.camera = camera
      this.scene = scene
      this.renderer = renderer
      camera.position.z = 30
      camera.position.x = -20
      camera.position.y = 40
      camera.lookAt(scene.position)

      const geometry = new THREE.BoxGeometry(1, 2, 1, 2);//几何
      geometry.castShadow = true
      this.mount.appendChild(renderer.domElement)
      var cube = new THREE.Mesh(geometry, cubeMaterial);
      cube.receiveShadow = true;
      cube.castShadow = true;
      this.cube = cube
      // 增加光源
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-10, 40, 80)
      spotLight.castShadow = true

      this.plane()
      this.scene.add(cube)
      this.scene.add(spotLight)
      this.animate()
   }

   // 平面
    plane=()=>{
      let planeGeometry = new THREE.PlaneGeometry(60, 20, 10, 10) // 生成平面
      let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff}) // 材质
      let plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = -1
      plane.position.z = 0
      plane.receiveShadow = true
      this.scene.add(plane);
    }

   animate = () => {
      //requestAnimationFrame(this.animate);
      // this.cube.rotation.x+=0.1
      //  this.cube.rotation.y+=0.1
      // this.camera.position.x += 0.1;
      // this.camera.position.y += 0.1;
      this.camera.lookAt(this.cube.position)

      this.renderer.render(this.scene, this.camera);
      this.renderer.shadowMap.enabled = true
   }
   componentWillUnmount() {
      this.mount.removeChild(this.renderer.domElement)
   }
   render() {
      return (
         <div
            id="canvas"
            style={{ width: '600px', height: '600px', background: 'red' }}
            ref={(mount) => { this.mount = mount }}
         />
      );
   }
}

export default Three;