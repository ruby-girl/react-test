import React, { Component } from 'react';
import * as THREE from 'three';


class Three extends Component {

   componentDidMount() {
      this.init()
   }

   init = () => {
      const scene = new THREE.Scene()//创建场景
      const camera = new THREE.PerspectiveCamera(75, this.mount.clientWidth / this.mount.clientHeight, 0.1, 1000);//相机
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })//材质
      const renderer = new THREE.WebGLRenderer({
         antialias: true
      })//创建渲染器
      renderer.setClearColor(0xffffff)
      renderer.setSize(this.mount.clientWidth, this.mount.clientHeight)
      this.camera = camera
      this.scene = scene
      this.renderer = renderer
      camera.position.z = 10
      camera.position.x = 10
      camera.position.y = 10
      camera.lookAt(scene.position)

      const geometry = new THREE.BoxGeometry(1, 2, 1, 4);//几何
      this.mount.appendChild(renderer.domElement)
      var cube = new THREE.Mesh(geometry, cubeMaterial);
      this.cube = cube
      this.scene.add(cube)
      this.animate()
   }
   animate = () => {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.cube.rotation.z += 0.05;
      this.renderer.render(this.scene, this.camera);
   }
   componentWillUnmount() {
      this.mount.removeChild(this.renderer.domElement)
   }
   render() {
      return (
         <div
            id="canvas"
            style={{ width: '600px', height: '600px', background: '#888' }}
            ref={(mount) => { this.mount = mount }}
         />
      );
   }
}
//   ReactDOM.render(<Scene />, document.getElementById('canvas'))

export default Three;