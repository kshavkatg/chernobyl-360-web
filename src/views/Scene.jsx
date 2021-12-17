import { useEffect, useState } from 'react'
import * as AFRAME from 'aframe'

AFRAME.registerComponent('play-on-window-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var video = this.el.components.material.material.map.image;
    if (!video) { return; }
    video.play();
  }
});

AFRAME.registerComponent('play-on-vrdisplayactivate-or-enter-vr', {
  init: function () {
    this.playVideo = this.playVideo.bind(this);
    this.playVideoNextTick = this.playVideoNextTick.bind(this);
  },
  play: function () {
    window.addEventListener('vrdisplayactivate', this.playVideo);
    this.el.sceneEl.addEventListener('enter-vr', this.playVideoNextTick);
  },
  pause: function () {
    this.el.sceneEl.removeEventListener('enter-vr', this.playVideoNextTick);
    window.removeEventListener('vrdisplayactivate', this.playVideo);
  },
  playVideoNextTick: function () {
    setTimeout(this.playVideo);
  },
  playVideo: function () {
    var video = this.el.components.material.material.map.image;
    if (!video) { return; }
    video.play();
  }
});

AFRAME.registerComponent('arrow-key-rotation', {
  schema: {
    enabled: {default: true},
    dx: {default: 2.0},
    dy: {default: 2.0},
  },
  init: function () {
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.directionX = 0;
    this.directionY = 0;
  },
  play: function () {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  },
  pause: function () {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);          
  },
  onKeyDown: function (evt) {
    switch (evt.keyCode) {
      case 37: this.directionX = 1; break;
      case 38: this.directionY = 1; break;
      case 39: this.directionX = -1; break;
      case 40: this.directionY = -1; break;
    }
  },
  onKeyUp: function (evt) {
    switch (evt.keyCode) {
      case 37: this.directionX = 0; break;
      case 38: this.directionY = 0; break;
      case 39: this.directionX = 0; break;
      case 40: this.directionY = 0; break;
    }          
  },
  tick: function (t, dt) {
    if (!this.data.enabled) { return; }
    var rotation = this.el.getAttribute('rotation');
    if (!rotation) { return; }
    if (this.directionX || this.directionY) {
      rotation.x += this.data.dx * this.directionY;
      rotation.y += this.data.dy * this.directionX;
      this.el.setAttribute('rotation', rotation);
    }
  }
});

function AFrameScene() {

  return (
    <a-scene
      vr-mode-ui="enabled: true"
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      
      <a-assets>
        <video id="video" style={{display: "none"}}
               muted autoPlay loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4"
               src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/R5WCqjT/360-video-maines-majestic-rocky-coast_Sq1wL45s__0d0aff323909ccf9a5c83f11b7808059__P640.mp4" />
        </video>
      </a-assets>
      
      <a-camera user-height="0" look-controls arrow-key-rotation>
    
        <a-entity cursor="fuse: true; fuseTimeout: 500"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: yellow; shader: flat">
        </a-entity>
        
      </a-camera>
      
      <a-videosphere rotation="0 180 0" src="#video"
      play-on-window-click
      play-on-vrdisplayactivate-or-enter-vr>
      </a-videosphere>
      
    </a-scene>
  )
}

const getScene = () => document.getElementsByTagName('a-scene')[0]

export const Scene = ({onLoaded, onReady}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    // onLoaded && onLoaded()
  }

  useEffect(() => {
    let scene = getScene()
    if (scene.hasLoaded) {
      // onLoaded && onLoaded()
      setIsLoaded(true)
    } else {
      scene.addEventListener('loaded', handleLoad)
    }
    return (() => {
      scene && scene.removeEventListener('loaded', handleLoad)
      scene = undefined
    })
  }, [])

  return (
    <>
      {!isLoaded &&
        <h1>loading</h1>
      }
      <AFrameScene />
    </>
  )
}