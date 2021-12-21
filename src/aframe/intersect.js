import * as AFRAME from 'aframe'

AFRAME.registerComponent('intersect', {
  init: function () {

    const handleClick = () => {
      console.log('box clicked')
    }
    this.el.addEventListener('click', handleClick)
    this.el.addEventListener('click', handleClick)
  },
})