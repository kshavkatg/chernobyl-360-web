import * as AFRAME from 'aframe'

AFRAME.registerComponent('show-menu', {
  schema: {
    videoSrc: {type: 'string'}
  },
    
  init: function () {
     
     let intersectionDistance = 0;

     const getDownCoordinates = (e) => {
      intersectionDistance = Math.round(e.detail.intersection.distance * 10) / 10;
     }

     const showMenu = (e) => {

      const homeworldelements = document.querySelectorAll("#homeworld")
      const overlay = document.getElementById("sphere_overlay")
      const backGroup = document.getElementById('back')
      const backSphere = document.getElementById('back_sphere')
      const video = document.getElementById(this.data.videoSrc)
      const menuElements = document.querySelectorAll(".menu")
      
      // if intersection distance the same (on desktop) its a click, on touch we do not need draging 
      let newDistance = Math.round(e.detail.intersection.distance * 10) / 10;
      if (intersectionDistance === newDistance || e.type === "touch") {
        video.pause()
        backGroup.setAttribute("visible", true)
        backSphere.setAttribute("backhome", `videoSrc: ${this.data.videoSrc}`)
        // show and make the overlay collidable
        overlay.setAttribute("visible", true)
        overlay.setAttribute('hide-menu', `videoSrc: ${this.data.videoSrc}`)
        overlay.classList.add("collidable")

        homeworldelements.forEach((homeworldelement) => {
          homeworldelement.setAttribute("visible", true)
        })
        // make menu elements collidable
        menuElements.forEach((element) => {
          element.classList.add('collidable')
        })
      }
     }
    // on desktop define if its click or drag by
    this.el.addEventListener('mousedown', getDownCoordinates)

    this.el.addEventListener('click', showMenu);
    this.el.addEventListener('touch', showMenu);
  }
});