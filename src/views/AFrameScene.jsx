import 'aframe'
import { useEffect } from 'react'
import imageOne from '../images/video_one.png'
import imageTwo from '../images/video_two.png'
import imageThree from '../images/video_three.png'

export default function AFrameScene() {
  useEffect(() => {
  }, [])

  return (
    <a-scene
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: true"
      vr-mode-ui="enterVRButton: #myEnterVRButton; enterARButton: #myEnterARButton"
    >
      
      <a-assets>
        <video id="video_one" style={{display: "none"}} autoPlay={false} loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/R5WCqjT/360-video-maines-majestic-rocky-coast_Sq1wL45s__0d0aff323909ccf9a5c83f11b7808059__P640.mp4" />
        </video>
        <video id="video_two" style={{display: "none"}} autoPlay={false} loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/5PNlDRM/videoblocks-paris-france-september-29-2017-360-vr-video-citizens-and-tourists-walking-on-the-area-under-the-eiffel-tower-overlooking-champ-de-mars-and-palais-de-chaillot_Sc3DHNh44__7a6397c4a59dcff5d391cbd9b3841629__P640.mp4" />
        </video>
        <video id="video_three" style={{display: "none"}} autoPlay={false} loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/5PNlDRM/videoblocks-360-vr-video-white-yacht-sailing-in-the-ocean-view-to-the-distant-mountains-on-of-mauritius-island-and-vast-ocean-from-the-upper-deck-fishing-rods-fixed-at-the-back-of-the-motor-boat_HuMfB__73ffdfe4132e11b3b0d08e53e03715f6__P640.mp4" />
        </video>
        
        <img id="background1" src="https://cdn.eso.org/images/publicationjpg/ESO_Paranal_360_Marcio_Cabral_Chile_09-CC.jpg" crossOrigin="anonymous"></img>

        <img id="observatory" src={imageOne} crossOrigin="anonymous"></img>
        <img id="observatory2" src={imageTwo} crossOrigin="anonymous"></img>
        <img id="bordeauxtheater" src={imageThree} crossOrigin="anonymous"></img>
      </a-assets>
      
      
      <a-camera 
        id="camera"
        look-controls="enabled: true; mouseEnabled: true; touchEnabled: true; magicWindowTrackingEnabled: true;"
        wasd-controls-enabled="false">

        <a-entity cursor="fuse: false; fuseTimeout: 500;"
            raycaster="objects: .collidable;"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
            material="color: yellow; shader: flat"></a-entity>
        
      </a-camera>
      
      <a-entity id="homeworld">

        <a-entity 
          id="sphere_group_one"
          position="-6.4 2.8 -2.8"
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_one"
                class="collidable menu"
                material="src: #observatory" 
                sphereexpand="videoSrc: video_one; videosphereId: videosphere_one;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;" text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: OPACHYCHI VILLAGE;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_two"
          position="-4.4 2.1 -5.2"
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere
                id="sphere_two" 
                material="src: #observatory2" 
                class="collidable menu"
                sphereexpand="videoSrc: video_two; videosphereId: videosphere_two;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: 'GHOST TOWN' PRIPYAT;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_three"
          position="-1.2 2 -7.1 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_three"
                scale="0.8 0.8 0.8"
                class="collidable menu" 
                material="src: #bordeauxtheater" 
                sphereexpand="videoSrc: video_three; videosphereId: videosphere_three;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="0.9 0.9 0.9"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: WATCH TRAILER;" scale="1.5 1.5 1.5" position="0 -1.4 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_four"
          position="2.1 2.8 -6.8 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_four"
                class="collidable menu"
                material="src: #observatory" 
                sphereexpand="videoSrc: video_one; videosphereId: videosphere_one;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: FLY OVER;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_four"
          position="4.1 1.7 -6.5 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_four"
                class="collidable menu"
                scale="0.7 0.7 0.7"
                material="src: #observatory2" 
                sphereexpand="videoSrc: video_two; videosphereId: videosphere_two;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="0.8 0.8 0.8"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: ARTIFACTS;" scale="1.5 1.5 1.5" position="0 -1.2 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_four"
          position="5.3 4.3 -4.8 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_four"
                class="collidable menu"
                material="src: #bordeauxtheater" 
                sphereexpand="videoSrc: video_three; videosphereId: videosphere_three;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: RADIOACTIVE WASTE MANAGMENT;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_four"
          position="6.8 2.9 -2.4 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_four" 
                class="collidable menu"
                material="src: #observatory" 
                sphereexpand="videoSrc: video_one; videosphereId: videosphere_one;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: DRUM MONITORING;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

      </a-entity>
      
      <a-entity position="0 5 -6 " id="back" visible="false">
          <a-entity billboard="targetCameraId: camera;" text="width: 5; align: center; anchor: center; value: GO BACK;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
          <a-sphere 
                animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
                animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200"
                class="collidable"
                backhome></a-sphere>
      </a-entity>
      
      <a-sky id="homeworld" src="#background1" rotation="0 0 0"></a-sky>

      <a-videosphere show-menu="videoSrc: video_one;" id="videosphere_one" visible="false" rotation="0 0 0" src="#video_one"></a-videosphere>
      <a-videosphere show-menu="videoSrc: video_two;" id="videosphere_two" visible="false" rotation="0 0 0" src="#video_two"></a-videosphere>
      <a-videosphere show-menu="videoSrc: video_three;" id="videosphere_three" visible="false" rotation="0 0 0" src="#video_three"></a-videosphere>

      <a-sphere
            visible="false"
            radius="49"
            id="sphere_overlay"
            material="color: black; opacity: 0.7; side: back;"></a-sphere>

      <div className='buttons'>
        <div id="myEnterVRButton" />
        <div id="myEnterARButton" />
      </div>
      
    </a-scene>
  )
}