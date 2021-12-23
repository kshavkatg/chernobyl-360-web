import * as AFRAME from 'aframe'

AFRAME.registerComponent('sphereexpand', {
  schema: {
    videoSrc: {type: 'string', default: '#video_one'},
    videosphereId: {type: 'string', default: '#videosphere_one'}
  },
    
  init: function () {

    const homeworldelements = document.querySelectorAll("#homeworld")
    const menuElements = document.querySelectorAll(".menu")
    const videosphere = document.getElementById(this.data.videosphereId)
    const video = document.getElementById(this.data.videoSrc)

    let intersectionDistance = 0;

    const getDownCoordinates = (e) => {
     intersectionDistance = e.detail.intersection.distance;
    }

    const sphereloader = (e) => {
      // if intersection distance the same (on desktop) its a click, on touch we do not need draging 
      console.log('intersectionDistance', intersectionDistance)
      if (intersectionDistance === e.detail.intersection.distance || e.type === "touch") {
        video.play()
        videosphere.setAttribute("visible", true)
        // hide homeworld elements
        homeworldelements.forEach((homeworldelement) => {
          homeworldelement.setAttribute("visible", false)
        })
        // make elements uncollidable
        menuElements.forEach((element) => {
          element.classList.remove('collidable')
        })
        // make the videosphere collidable to open the menu
        videosphere.classList.add('collidable')
      }   
    }

    // on desktop define if its click or drag by
    this.el.addEventListener('mousedown', getDownCoordinates)

    this.el.addEventListener('click', sphereloader);
    this.el.addEventListener('touch', sphereloader);
  }
});