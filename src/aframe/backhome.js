import * as AFRAME from 'aframe'

AFRAME.registerComponent('backhome', {
     
  init: function () {
    
    const homeworldelements = document.querySelectorAll("#homeworld");
    const videosphereOne = document.getElementById('videosphere_one')
    const videosphereTwo = document.getElementById('videosphere_two')
    const videosphereThree = document.getElementById('videosphere_three')
    const backSphere = document.getElementById('back')
    const videoOne = document.getElementById('video_one')
    const videoTwo = document.getElementById('video_two')
    const videoThree = document.getElementById('video_three')
    const overlay = document.getElementById("sphere_overlay")

    const gobackhome = () => {
      homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", true)})

      videosphereOne.setAttribute("visible", false)
      videosphereTwo.setAttribute("visible", false)
      videosphereThree.setAttribute("visible", false)
      backSphere.setAttribute("visible", false)
      overlay.setAttribute("visible", false)
      videoOne.pause()
      videoTwo.pause()
      videoThree.pause()
    }

     this.el.addEventListener('click', gobackhome);
     this.el.addEventListener('touch', gobackhome);
       
}});