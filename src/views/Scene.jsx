import { useEffect, useState } from 'react'
import * as AFRAME from 'aframe'
import 'aframe'
import LoadingView from './LoadingView'
import StartView from './StartView'

// AFRAME.registerComponent('play-on-window-click', {
//   init: function () {
//     this.onClick = this.onClick.bind(this);
//   },
//   play: function () {
//     window.addEventListener('click', this.onClick);
//   },
//   pause: function () {
//     window.removeEventListener('click', this.onClick);
//   },
//   onClick: function (evt) {
//     var video = this.el.components.material.material.map.image;
//     if (!video) { return; }
//     video.play();
//   }
// });

// AFRAME.registerComponent('play-on-vrdisplayactivate-or-enter-vr', {
//   init: function () {
//     this.playVideo = this.playVideo.bind(this);
//     this.playVideoNextTick = this.playVideoNextTick.bind(this);
//   },
//   play: function () {
//     window.addEventListener('vrdisplayactivate', this.playVideo);
//     this.el.sceneEl.addEventListener('enter-vr', this.playVideoNextTick);
//   },
//   pause: function () {
//     this.el.sceneEl.removeEventListener('enter-vr', this.playVideoNextTick);
//     window.removeEventListener('vrdisplayactivate', this.playVideo);
//   },
//   playVideoNextTick: function () {
//     setTimeout(this.playVideo);
//   },
//   playVideo: function () {
//     var video = this.el.components.material.material.map.image;
//     if (!video) { return; }
//     video.play();
//   }
// });

// AFRAME.registerComponent('arrow-key-rotation', {
//   schema: {
//     enabled: {default: true},
//     dx: {default: 2.0},
//     dy: {default: 2.0},
//   },
//   init: function () {
//     this.onKeyDown = this.onKeyDown.bind(this);
//     this.onKeyUp = this.onKeyUp.bind(this);
//     this.directionX = 0;
//     this.directionY = 0;
//   },
//   play: function () {
//     window.addEventListener('keydown', this.onKeyDown);
//     window.addEventListener('keyup', this.onKeyUp);
//   },
//   pause: function () {
//     window.removeEventListener('keydown', this.onKeyDown);
//     window.removeEventListener('keyup', this.onKeyUp);          
//   },
//   onKeyDown: function (evt) {
//     switch (evt.keyCode) {
//       case 37: this.directionX = 1; break;
//       case 38: this.directionY = 1; break;
//       case 39: this.directionX = -1; break;
//       case 40: this.directionY = -1; break;
//     }
//   },
//   onKeyUp: function (evt) {
//     switch (evt.keyCode) {
//       case 37: this.directionX = 0; break;
//       case 38: this.directionY = 0; break;
//       case 39: this.directionX = 0; break;
//       case 40: this.directionY = 0; break;
//     }          
//   },
//   tick: function (t, dt) {
//     if (!this.data.enabled) { return; }
//     var rotation = this.el.getAttribute('rotation');
//     if (!rotation) { return; }
//     if (this.directionX || this.directionY) {
//       rotation.x += this.data.dx * this.directionY;
//       rotation.y += this.data.dy * this.directionX;
//       this.el.setAttribute('rotation', rotation);
//     }
//   }
// });

AFRAME.registerComponent('intersect', {
  init: function () {
    console.log('intersect init')
    const handleClick = () => {
      console.log('box clicked')
    }
    this.el.addEventListener('mousedown', handleClick)
    this.el.addEventListener('touchdown', handleClick)
  },
})

function AFrameScene() {

  return (
    <a-scene
      raycaster="objects: .cantap"
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: true"
      vr-mode-ui="enterVRButton: #myEnterVRButton; enterARButton: #myEnterARButton"
    >
      
      <a-assets>
        <video id="video" style={{display: "none"}}
               muted autoPlay="true" loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4"
               src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/R5WCqjT/360-video-maines-majestic-rocky-coast_Sq1wL45s__0d0aff323909ccf9a5c83f11b7808059__P640.mp4" />
        </video>
        <img id="observatory" src="https://cdn.eso.org/images/screen/ESO_Paranal_360_Marcio_Cabral_Chile_05-CC.jpg" crossOrigin="anonymous"></img>
        <img id="observatory2" src="https://cdn.eso.org/images/screen/ESO_Paranal_360_Marcio_Cabral_Chile_16-CC.jpg" crossOrigin="anonymous"></img>
        <img id="bordeauxtheater" src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2FOp%C3%A9ra_National_de_Bordeaux%20(1).jpg?1547235572572" crossOrigin="anonymous"></img>
      </a-assets>
      
      
      <a-camera 
        look-controls="enabled: true; mouseEnabled: true; touchEnabled: true; magicWindowTrackingEnabled: true;"
        wasd-controls-enabled="false" 
      >
        <a-entity cursor="fuse: true; fuseTimeout: 500 rayOrigin: mouse"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
            material="color: yellow; shader: flat">
        </a-entity>
        
      </a-camera>
      
      <a-sphere id="sphere" material="src: #observatory" className="cantap" intersect position="-3 0 -5"></a-sphere>
      <a-sphere id="sphere1" material="src: #observatory2" className="cantap" intersect position="-0 0 -5"></a-sphere>
      <a-sphere id="sphere2" material="src: #bordeauxtheater" className="cantap" intersect position="3 0 -5"></a-sphere>
      
      <a-videosphere rotation="0 180 0" src="#video">
      </a-videosphere>

      <div className='buttons'>
        <div id="myEnterVRButton" >
        </div>
        <div id="myEnterARButton" >
        </div>
      </div>
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

  function isMob() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  const isMbile = isMob()
  const isAndroid = navigator.userAgent.includes('Linux')

  if (isLoaded && isMbile && isAndroid) {
    let arButton = document.getElementById('myEnterARButton')
    let vrButton = document.getElementById('myEnterVRButton')
    arButton.style.display = 'inherit'
    vrButton.style.display = 'inherit'
  }
  // if (!isMbile) {
  //   const video = document.getElementById('video')
  //   video.play()
  // }

  return (
    <>
      {!isLoaded &&
        <LoadingView />
      }
      <AFrameScene />
      {isLoaded && isMbile && isAndroid &&
        <StartView />
      }
    </>
  )
}