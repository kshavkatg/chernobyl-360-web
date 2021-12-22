import * as AFRAME from 'aframe'

AFRAME.registerComponent('sphereexpand', {
  schema: {
    videoSrc: {type: 'string', default: '#video_one'},
    videosphereId: {type: 'string', default: '#videosphere_one'}
  },
    
  init: function () {

     let homeworldelements = document.querySelectorAll("#homeworld")
     let backSphere = document.getElementById('back')
     let videosphere = document.getElementById(this.data.videosphereId)
     let video = document.getElementById(this.data.videoSrc)

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
  }
});