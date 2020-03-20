import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

//　three.jsの処理を書いていく
export default class ArtworkGL {
  constructor(props) {
    this.props = props;
    this.init();

    let timedelta = 0;
    let timetotal = 0;
  }

  init() {
    this.setSize();

    // Scene
    this.scene = new THREE.Scene();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.props.$canvas
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.setClearColor(0xFFFFFF);
    this.renderer.setSize(this.size.windowW, this.size.windowH);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.size.windowW / this.size.windowH,
      1, 
      4000
    );
    this.camera.fov = 90;
    this.camera.position.set(-600, 150, +1000);
    this.camera.lookAt(this.scene.position);

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Object
    const geometry = new THREE.BoxGeometry(300, 240, 400);
    const material = new THREE.MeshStandardMaterial({
      color: 0xFF0000
    });

    const mesh = new THREE.Mesh(geometry, material);
    // this.scene.add(mesh);

    this.makeWall('roboxer.png', -600, 0);
    this.makeWall('wearbo.png', -300, 0);
    this.makeWall('genkan.png', 0, 0);
    this.makeWall('grubin.png', 300, 0);
    this.makeWall('syrinx.png', 600, 0);
    this.makeWall('harvestx.png', 900, 0);

    this.makeFloor('roboxer_fl.png', -600, 0);
    this.makeFloor('wearbo_fl.png', -300, 0);
    this.makeFloor('genkan_fl.png', 0, 0);
    this.makeFloor('grubin_fl.png', 300, 0);
    this.makeFloor('syrinx_fl.png', 600, 0);
    this.makeFloor('harvestx_fl.png', 900, 0);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.6);
    directionalLight.position.set( 1, 1, 1);
    directionalLight.intensity = 1.8;
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xFFFF00);
    ambientLight.position.set(800, 800, 800);
    // ambientLight.intensity = 0.1
    // this.scene.add(ambientLight);

    this.clock = new THREE.Clock();
    this.clock.start();

    let rot = 0;
    this.loop(mesh.rotation);
  }

  setSize() {
    this.size = {
      windowW: window.innerWidth,
      windowH: window.innerHeight
    }
  }

  makeWall(src, x, y){
    // Load Image
    const loader = new THREE.TextureLoader();
    const texture = loader.load(src);

    const geometry = new THREE.PlaneGeometry(300, 300, 1);
    const material = new THREE.MeshStandardMaterial({
      map: texture
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.x = x;
    // plane.position.set(0, 0);
    this.scene.add(plane);
  }

  makeFloor(src, x, y){
    // Load Image
    const loader = new THREE.TextureLoader();
    const texture = loader.load(src);

    const geometry = new THREE.PlaneGeometry(300, 300, 1);
    const material = new THREE.MeshStandardMaterial({
      map: texture
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.x = x;
    plane.position.y = -150;
    plane.position.z = 150;
    plane.rotation.set(- Math.PI / 2, 0, 0);
    // plane.rotateZ(90);
    // plane.position.set(0, 0);
    this.scene.add(plane);
  }

  loop(rotation) {
    this.timedelta = this.clock.getDelta();
    this.timetotal += this.delta;

    // this.rot += 0.5; // 毎フレーム角度を0.5度ずつ足していく
    // // ラジアンに変換する
    // const radian = (this.rot * Math.PI) / 180;
    // // 角度に応じてカメラの位置を設定
    // this.camera.position.x += 0.01;
    // rotation.y += this.timedelta;
    // this.camera.position.z = 1000 * Math.cos(radian);
    // // 原点方向を見つめる
    // this.camera.lookAt(this.scene.position);
    // rotation.y += 0.01;

    // this.controls.update();

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.loop.bind(this));
  }
}