import * as AFRAME from 'aframe'

AFRAME.registerComponent('backhome', {
     
  init: function () {
    
    let homeworldelements = document.querySelectorAll("#homeworld");
    let videosphere = document.getElementById('videosphere')
    let backSphere = document.getElementById('back')
    let video = document.getElementById('video')

    let gobackhome = () => {
      homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", true)})

      videosphere.setAttribute("visible", false)
      backSphere.setAttribute("visible", false)
      video.pause()
    }

     this.el.addEventListener('click', gobackhome);
     this.el.addEventListener('touch', gobackhome);
       
}});