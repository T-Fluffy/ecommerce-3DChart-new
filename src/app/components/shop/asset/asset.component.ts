import { Component, OnInit } from "@angular/core";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
@Component({
  selector: "app-asset",
  template: '<div id="scene3D"></div>',
  styleUrls: ["./asset.component.css"],
})
export class AssetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const scene = new THREE.Scene();

    var scene3d = document.getElementById("scene3D");
    var CANVAS_WIDTH = window.innerWidth / 3.2;
    var CANVAS_HEIGHT = window.innerHeight / 2;

    const camera = new THREE.PerspectiveCamera(
      60,
      CANVAS_WIDTH / CANVAS_HEIGHT,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
    scene3d?.appendChild(renderer.domElement);
    scene.background = new THREE.Color(0xffffff);

    // lights
    const hemiLight = new THREE.AmbientLight(0xffffff, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 20, 10);
    scene.add(dirLight);

    //Control system :
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 1, 0);
    camera.position.y = 1;
    camera.position.z = 5;

    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      "../../../../assets/Chart3D/tank/T1_Cunningham.FBX",
      (object) => {
        // object.traverse(function (child) {
        //     if ((child as THREE.Mesh).isMesh) {
        //         // (child as THREE.Mesh).material = material
        //         if ((child as THREE.Mesh).material) {
        //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
        //         }
        //     }
        // })
        // object.scale.set(.01, .01, .01)
        scene.add(object);
        object.scale.set(0.06, 0.06, 0.06);
        object.rotation.y += 1.3;
        object.position.y += 1.3;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 50 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 3.2, window.innerHeight / 2);
      render();
    }
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      renderer.setClearColor(0xffffff, 1);
      scene.getObjectByName("T1_Cunningham");
    }
    function render() {
      renderer.render(scene, camera);
    }
    animate();
  }
}
