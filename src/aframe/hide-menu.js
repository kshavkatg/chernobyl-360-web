import * as AFRAME from 'aframe'

AFRAME.registerComponent('hide-menu', {
  schema: {
    videoSrc: {type: 'string'}
  },
    
  init: function () {

     const homeworldelements = document.querySelectorAll("#homeworld")
     const overlay = document.getElementById("sphere_overlay")
     const backSphere = document.getElementById('back')
     const video = document.getElementById(this.data.videoSrc)
     const menuElements = document.querySelectorAll(".menu")

     let intersectionDistance = 0;

     const getDownCoordinates = (e) => {
      intersectionDistance = e.detail.intersection.distance;
     }

     const hideMenu = (e) => {
      console.log('touch or click', e.type)
      // if intersection distance the same (on desktop) its a click, on touch we do not need draging 
      if (intersectionDistance === e.detail.intersection.distance || e.type === "touch") {
        video.play()
        backSphere.setAttribute("visible", false)
        homeworldelements.forEach((homeworldelement) => {
          homeworldelement.setAttribute("visible", false)
        })
        // make menu elements uncollidale
        menuElements.forEach((element) => {
          element.classList.remove('collidable')
        })
        // hide overlay
        overlay.setAttribute("visible", false)
        overlay.classList.remove('collidable')
      }
     }
    // on desktop define if its click or drag by
    this.el.addEventListener('mousedown', getDownCoordinates)
    
    this.el.addEventListener('click', hideMenu);
    this.el.addEventListener('touch', hideMenu);
  }
});