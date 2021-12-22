import 'aframe'

export default function AFrameScene() {

  return (
    <a-scene
      raycaster="objects: .cantap"
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: true"
      vr-mode-ui="enterVRButton: #myEnterVRButton; enterARButton: #myEnterARButton"
    >
      
      <a-assets>
        <video id="video_one" style={{display: "none"}} autoPlay={false} loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/R5WCqjT/360-video-maines-majestic-rocky-coast_Sq1wL45s__0d0aff323909ccf9a5c83f11b7808059__P640.mp4" />
        </video>
        <video id="video_two" style={{display: "none"}} autoPlay={false} loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/36MTy7r/videoblocks-male-rider-doing-big-360-on-snow-jump-ski-snowboard_sutmhps9g__bc93952493a286f0facc155286293905__P360.mp4" />
        </video>
        <video id="video_three" style={{display: "none"}} autoPlay={false} loop crossOrigin="anonymous" playsInline>
          <source type="video/mp4" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/pbJRSBz/videoblocks-virtual-reality-360-view-from-the-vikos-gorge-in-the-pindus-mountains-of-northern-greece_BALK5vDTW__c89f744998ab5cd8f0e77575aa8e3a80__P640.mp4" />
        </video>
        
        <img id="background1" src="https://cdn.eso.org/images/publicationjpg/ESO_Paranal_360_Marcio_Cabral_Chile_09-CC.jpg" crossOrigin="anonymous"></img>

        <img id="observatory" src="https://cdn.eso.org/images/screen/ESO_Paranal_360_Marcio_Cabral_Chile_05-CC.jpg" crossOrigin="anonymous"></img>
        <img id="observatory2" src="https://cdn.eso.org/images/screen/ESO_Paranal_360_Marcio_Cabral_Chile_16-CC.jpg" crossOrigin="anonymous"></img>
        <img id="bordeauxtheater" src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2FOp%C3%A9ra_National_de_Bordeaux%20(1).jpg?1547235572572" crossOrigin="anonymous"></img>
      </a-assets>
      
      
      <a-camera 
        id="camera"
        look-controls="enabled: true; mouseEnabled: true; touchEnabled: true; magicWindowTrackingEnabled: true;"
        wasd-controls-enabled="false">

        <a-entity cursor="fuse: false;"
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
                material="src: #observatory" 
                className="cantap"
                intersect 
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
                className="cantap"
                intersect 
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
                material="src: #bordeauxtheater" 
                className="cantap"
                intersect 
                sphereexpand="videoSrc: video_three; videosphereId: videosphere_three;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: WATCH TRAILER;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_four"
          position="2.1 2.8 -6.8 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_four" 
                material="src: #observatory" 
                className="cantap"
                intersect 
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
                material="src: #observatory2" 
                className="cantap"
                intersect 
                sphereexpand="videoSrc: video_two; videosphereId: videosphere_two;"></a-sphere>
          <a-sphere
                id="sphere_orange_one"
                scale="1.1 1.1 1.1"
                material="color: orange; side: back;"></a-sphere>
          <a-entity billboard="targetCameraId: camera;"  text="wrapCount: 12; width: 1.5; align: center; anchor: center; value: ARTIFACTS;" scale="1.5 1.5 1.5" position="0 -1.7 0"></a-entity>
        </a-entity>

        <a-entity 
          id="sphere_group_four"
          position="5.3 4.3 -4.8 "
          animation__mouseenter="property: scale;  to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 200"
          animation__mouseleave="property: scale;  to: 1 1 1; startEvents: mouseleave; dur: 200">
          <a-sphere 
                id="sphere_four" 
                material="src: #bordeauxtheater" 
                className="cantap"
                intersect 
                sphereexpand="videoSrc: video_one; videosphereId: videosphere_one;"></a-sphere>
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
                material="src: #observatory" 
                className="cantap"
                intersect 
                sphereexpand="videoSrc: video_two; videosphereId: videosphere_two;"></a-sphere>
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
                className="cantap"
                intersect 
                backhome></a-sphere>
      </a-entity>
      
      <a-sky id="homeworld" src="#background1" rotation="0 0 0"></a-sky>

      <a-videosphere id="videosphere_one" visible="false" rotation="0 0 0" src="#video_one"></a-videosphere>
      <a-videosphere id="videosphere_two" visible="false" rotation="0 0 0" src="#video_two"></a-videosphere>
      <a-videosphere id="videosphere_three" visible="false" rotation="0 0 0" src="#video_three"></a-videosphere>

      <div className='buttons'>
        <div id="myEnterVRButton" />
        <div id="myEnterARButton" />
      </div>
      
    </a-scene>
  )
}