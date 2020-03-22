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
      canvas: this.props.$canvas,
      alpha: true
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);

    // this.renderer.setClearColor(0x000000, 0);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setSize(this.size.windowW, this.size.windowH);
    // レンダラー：シャドウを有効にする
    this.renderer.shadowMap.enabled = true;

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.size.windowW / this.size.windowH,
      1, 
      4000
    );
    this.camera.fov = 90;
    this.camera.position.set(0, 1, +10);

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Object
    const geometry = new THREE.BoxGeometry(300, 240, 400);
    const material = new THREE.MeshStandardMaterial({
      color: 0xFF0000
    });

    const mesh = new THREE.Mesh(geometry, material);

    const wrap = new THREE.Group();
    const images = ['roboxer.png', 'wearbo.png', 'genkan.png', 'grubin.png', 'syrinx.png', 'harvestx.png'];
    const images_fl = ['roboxer_fl.png', 'wearbo_fl.png', 'genkan_fl.png', 'grubin_fl.png', 'syrinx_fl.png', 'harvestx_fl.png'];
    for(let i = 0; i<images.length;i++){
      this.makeWall(wrap, images[i], (i-2)*3-1.5, 0);
      this.makeFloor(wrap, images_fl[i], (i-2)*3-1.5, 0);
    }
    this.scene.add(wrap);
    this.camera.lookAt(wrap.position);
    this.wrap = wrap;

    const geo = new THREE.PlaneGeometry(100, 100, 1);
    // const mat = new THREE.MeshLambertMaterial({
    //   color: 0xFFFFFF
    // });
    const mat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.5
    });
    const plane = new THREE.Mesh(geo, mat);
    plane.position.y = -2;
    plane.rotation.set(-Math.PI / 2, 0, 0);
    plane.receiveShadow = true;
    this.scene.add(plane);

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshLambertMaterial({
      color: 0xFFFFFF
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.x = 0;
    box.position.y = 10;
    box.position.z = 10;
    box.castShadow = true;
    this.scene.add(box);

    const torusGeometry = new THREE.TorusGeometry(1, 3, 16, 1);
    const torusMaterial = new THREE.MeshLambertMaterial({
      color: 0x6699FF
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    this.scene.add(torus);

    // Lighting
    // const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.6);
    // directionalLight.position.set(0, 10, 3);
    // directionalLight.intensity = 1.0;
    // directionalLight.castShadow = true;
    // this.scene.add(directionalLight);

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.2);
    this.scene.add(ambient);

    // スポットライト光源を作成
    const spot = new THREE.SpotLight(0xFFFFFF, 1, 30, Math.PI / 6, 1, 0.5);
    spot.position.set(0, 8, 6);
    this.scene.add(spot);

    const spot2 = new THREE.SpotLight(0xFFFF00, 1, 30, Math.PI / 6, 1, 0.5);
    spot2.position.set(10, 8, 6);
    this.scene.add(spot2);

    const spot3 = new THREE.SpotLight(0x0000FF, 1, 30, Math.PI / 6, 1, 0.5);
    spot3.position.set(-10, 8, 6);
    this.scene.add(spot3);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF);
    ambientLight.position.set(800, 800, 800);
    ambientLight.intensity = 0.1
    ambientLight.castShadow = true;
    this.scene.add(ambientLight);

    this.clock = new THREE.Clock();
    this.clock.start();

    this.loop(mesh.rotation);

    this.add = 0.1;
    this.rot = 0;
  }

  loop(rotation) {
    this.timedelta = this.clock.getDelta();
    this.timetotal += this.delta;

    // this.rot += 0.5; // 毎フレーム角度を0.5度ずつ足していく
    // // ラジアンに変換する
    // const radian = (this.rot * Math.PI) / 180;
    // // 角度に応じてカメラの位置を設定

    // if (this.camera.position.x > 9 || this.camera.position.x < -9) {
    //   this.add *= -1;
    // }
    // this.camera.position.x += this.add;
    // this.camera.rotateY(0.01);
    if(this.rot == 360){
      this.rot = 0;
    }else{
      this.rot += 0.2; // 毎フレーム角度を0.5度ずつ足していく
    }
    // ラジアンに変換する
    const radian = (this.rot * Math.PI) / 180;
    // 角度に応じてカメラの位置を設定
    this.camera.position.x = 20 * Math.sin(radian);
    this.camera.position.z = 20 * Math.cos(radian);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // this.spot3.angle += 0.05;
    // rotation.y += this.timedelta;
    // this.camera.position.z = 1000 * Math.cos(radian);
    // // 原点方向を見つめる
    // this.camera.lookAt(this.scene.position);
    // rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.loop.bind(this));
  }

  setSize() {
    this.size = {
      windowW: window.innerWidth,
      windowH: window.innerHeight
    }
  }

  makeWall(wrap, src, x, y) {
    // Load Image
    const loader = new THREE.TextureLoader();
    const texture = loader.load(src);

    const geometry = new THREE.BoxGeometry(3, 3, .05);
    const material = new THREE.MeshStandardMaterial({
      map: texture
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.x = x;
    plane.position.z = -1;
    plane.castShadow = true;
    // plane.position.set(0, 0);
    wrap.add(plane);
  }

  makeFloor(wrap, src, x, y) {
    // Load Image
    const loader = new THREE.TextureLoader();
    const texture = loader.load(src);

    const geometry = new THREE.BoxGeometry(3, 3, .05);
    const material = new THREE.MeshStandardMaterial({
      map: texture
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.x = x;
    plane.position.y = -1.5;
    plane.position.z = 0.5;
    plane.rotation.set(-Math.PI / 2, 0, 0);
    plane.castShadow = true;
    // plane.rotateZ(90);
    // plane.position.set(0, 0);
    wrap.add(plane);
  }
}