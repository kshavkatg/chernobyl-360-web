import * as AFRAME from 'aframe'

AFRAME.registerComponent('backhome', {
     
  init: function () {
    
    let homeworldelements = document.querySelectorAll("#homeworld");
    let videosphereOne = document.getElementById('videosphere_one')
    let videosphereTwo = document.getElementById('videosphere_two')
    let videosphereThree = document.getElementById('videosphere_three')
    let backSphere = document.getElementById('back')
    let videoOne = document.getElementById('video_one')
    let videoTwo = document.getElementById('video_two')
    let videoThree = document.getElementById('video_three')

    let gobackhome = () => {
      homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", true)})

      videosphereOne.setAttribute("visible", false)
      videosphereTwo.setAttribute("visible", false)
      videosphereThree.setAttribute("visible", false)
      backSphere.setAttribute("visible", false)
      videoOne.pause()
      videoTwo.pause()
      videoThree.pause()
    }

     this.el.addEventListener('click', gobackhome);
     this.el.addEventListener('touch', gobackhome);
       
}});