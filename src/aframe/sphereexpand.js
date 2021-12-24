import * as AFRAME from 'aframe'

AFRAME.registerComponent('sphereexpand', {
  schema: {
    videoSrc: {type: 'string', default: '#video_one'},
    videosphereId: {type: 'string', default: '#videosphere_one'}
  },
    
  init: function () {

    let intersectionDistance = 0;

    const getDownCoordinates = (e) => {
     intersectionDistance = Math.round(e.detail.intersection.distance * 10) / 10;
    }

    const sphereloader = (e) => {
      const homeworldelements = document.querySelectorAll("#homeworld")
      const menuElements = document.querySelectorAll(".menu")
      const videosphere = document.getElementById(this.data.videosphereId)
      const video = document.getElementById(this.data.videoSrc)
      const overlay = document.getElementById("sphere_overlay")
      const backSphere = document.getElementById('back')
      const videosphereOne = document.getElementById("videosphere_one")
      const videosphereTwo = document.getElementById("videosphere_two")
      const videosphereThree = document.getElementById("videosphere_three")

      // if intersection distance the same (on desktop) its a click, on touch we do not need draging 
      let newDistance = Math.round(e.detail.intersection.distance * 10) / 10;
      if (intersectionDistance === newDistance || e.type === "touch") {
        video.play()
        // hide homeworld elements
        homeworldelements.forEach((homeworldelement) => {
          homeworldelement.setAttribute("visible", false)
        })
        // make elements uncollidable
        menuElements.forEach((element) => {
          element.classList.remove('collidable')
        })
        // remove collidable from all videospheres and hide them
        videosphereOne.classList.remove("collidable")
        videosphereTwo.classList.remove("collidable")
        videosphereThree.classList.remove("collidable")
        videosphereOne.setAttribute("visible", false)
        videosphereTwo.setAttribute("visible", false)
        videosphereThree.setAttribute("visible", false)
        //show videosphere and make it collidable to open the menu
        videosphere.classList.add('collidable')
        videosphere.setAttribute("visible", true)
        // hide backSphere and overlay if sphere clicked after opening the menu and remove collidable
        overlay.setAttribute("visible", false)
        backSphere.setAttribute("visible", false)
        overlay.classList.remove("collidable")
        backSphere.classList.remove("collidable")
      }   
    }

    // on desktop define if its click or drag by
    this.el.addEventListener('mousedown', getDownCoordinates)

    this.el.addEventListener('click', sphereloader);
    this.el.addEventListener('touch', sphereloader);
  }
});