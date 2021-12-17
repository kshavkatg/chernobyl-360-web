import { useEffect, useState } from 'react'
import 'aframe'

function AFrameScene() {

  return (
    <a-scene loading-screen="enabled: false;">
      
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
      
      <a-videosphere rotation="0 180 0" src="#video">
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