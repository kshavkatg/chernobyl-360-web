import * as AFRAME from 'aframe'
const THREE = window.THREE

export const billboardName = 'billboard'
export const billboardComponent = {
  schema: {
    targetCameraId: {default: 'camera'},
    rotateYOnly: {default: true},
    billboardOnTick: {default: true},
    
    biilboardOnce: {default: false},
    biilboardOnceInMs: {default: 1000},
    
    perpendicularToCameraDirection: {default: true},
    invert: {default: false},
  },
  init() {
    console.log('init billboard')
    this.updateBillboarding = this.updateBillboarding.bind(this)
    if (this.data.biilboardOnce) {
      setTimeout(this.updateBillboarding, this.data.biilboardOnceInMs)
    }
  },
  tick() {
    if (this.data.billboardOnTick) {
      this.updateBillboarding()
    }
  },
  updateBillboarding() {
    if (this.camera === null || this.camera === undefined) {
      this.camera = document.getElementById(this.data.targetCameraId)
    }
    let target = this.camera.object3D.position.clone()
    if (this.data.perpendicularToCameraDirection) {
      const cameraForward = new THREE.Vector3()
      this.camera.object3D.getWorldDirection(cameraForward)
      cameraForward.multiplyScalar(-1)
      if (this.data.rotateYOnly) {
        cameraForward.setY(0)
        cameraForward.normalize()
      }
      this.el.object3D.getWorldPosition(target)
      target.sub(cameraForward)
    }
    if (this.data.invert) {
      const diff = target.clone()
      diff.sub(this.el.object3D.position)
      target = this.el.object3D.position.clone().sub(diff)
    }
    this.el.object3D.lookAt(target)
  },
}
if (AFRAME) {
  AFRAME.registerComponent(billboardName, billboardComponent)
}