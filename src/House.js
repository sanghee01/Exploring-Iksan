export class House {
  constructor(info) {
    this.x = info.x;
    this.y = info.y;
    this.z = info.z;
    this.x2 = info.x2;
    this.y2 = info.y2;
    this.z2 = info.z2;

    this.visible = false; // 처음엔 안보이고 영역에 들어가면 보이게 하려고 설정

    info.gltfLoader.load(info.modelSrc, glb => {
      this.modelMesh = glb.scene.children[0];
      this.modelMesh.castShadow = true;
      this.modelMesh.position.set(this.x, this.y, this.z);
      this.modelMesh.rotation.set(this.x2, this.y2, this.z2);
      info.scene.add(this.modelMesh);
    });
  }
}
