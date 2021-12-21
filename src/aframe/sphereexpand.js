import * as AFRAME from 'aframe'

AFRAME.registerComponent('sphereexpand', {
    
  init: function () {

     let homeworldelements = document.querySelectorAll("#homeworld");
     let videosphere = document.getElementById('videosphere')
     let backSphere = document.getElementById('back')
     let video = document.getElementById('video')

     let sphereloader = () => {
      video.play()
      videosphere.setAttribute("visible", true)
      backSphere.setAttribute("visible", true)
      homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", false)
      })

     }

    this.el.addEventListener('click', sphereloader);
    this.el.addEventListener('touch', sphereloader);
       
}});