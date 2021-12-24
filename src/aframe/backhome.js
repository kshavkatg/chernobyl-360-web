import * as AFRAME from 'aframe'

AFRAME.registerComponent('backhome', {
  schema: {
    videoSrc: {type: 'string'}
  },
     
  init: function () {
    
    const homeworldelements = document.querySelectorAll("#homeworld");
    const videosphere = document.getElementById('videosphere')
    const backSphere = document.getElementById('back')
    const video = document.getElementById(this.data.videoSrc)
    const overlay = document.getElementById("sphere_overlay")

    const gobackhome = () => {
      homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", true)})

      videosphere.setAttribute("visible", false)
      backSphere.setAttribute("visible", false)
      overlay.setAttribute("visible", false)
      video.pause()
    }

     this.el.addEventListener('click', gobackhome);
     this.el.addEventListener('touch', gobackhome);
       
}});