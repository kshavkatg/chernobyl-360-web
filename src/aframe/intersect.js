import * as AFRAME from 'aframe'

AFRAME.registerComponent('intersect', {
  init: function () {

    const handleClick = () => {
      console.log(this.el, 'clicked')
    }
    this.el.addEventListener('click', handleClick)
    this.el.addEventListener('click', handleClick)
  },
})