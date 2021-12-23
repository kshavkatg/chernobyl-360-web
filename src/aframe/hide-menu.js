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
      intersectionDistance = Math.round(e.detail.intersection.distance * 10) / 10;
     }

     const hideMenu = (e) => {
      // if intersection distance the same (on desktop) its a click, on touch we do not need draging 
      let newDistance = Math.round(e.detail.intersection.distance * 10) / 10;
      if (intersectionDistance === newDistance || e.type === "touch") {
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