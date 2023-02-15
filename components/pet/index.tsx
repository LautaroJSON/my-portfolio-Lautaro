import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/addons/controls/OrbitControls"

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const PetThreeJs = () => {
  const canvaRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x333333)

    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )

    const target = new THREE.Vector3(-0.5, 1.2, 0)

    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)
    console.log(canvaRef.current.offsetHeight)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setSize(
      canvaRef.current.offsetHeight,
      canvaRef.current.offsetHeight
    )

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
    scene.add(ambientLight)
    // const geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({ color: 0x3178c6 })
    // const cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)

    const modelFile = "assets/dog.glb"

    // const loader = new MMDLoader()
    const loader = new GLTFLoader()
    loader.load(
      // path to PMD/PMX file
      modelFile,
      // called when the resource is loaded
      function (mesh) {
        const obj = mesh.scene
        obj.name = "dog"
        obj.position.y = -1
        obj.position.x = 0
        obj.receiveShadow = false
        obj.castShadow = false
        scene.add(obj)
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened")
      }
    )

    if (canvaRef) {
      canvaRef.current.appendChild(renderer.domElement)
    }

    camera.position.z = 3

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target
    // controls.target.set(0, 0.5, 0)

    controls.update()
    controls.enablePan = false
    controls.enableDamping = true

    let frame = 0
    const animate = () => {
      requestAnimationFrame(animate)
      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    // controls.update()

    // renderer.render(scene, camera)

    animate()
  }, [])

  return <div ref={canvaRef} style={{ width: "200px", height: "200px" }}></div>
}

export default PetThreeJs
