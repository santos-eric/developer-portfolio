import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Skull from '../models/Skull'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        PopUp
      </div> */}

const Home = () => {

  // skull default properties for mobile
  const adjustSkullForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      // [x,y,z] scale
      screenScale = [10, 10, 10]
    } else {
      screenScale = [25, 25, 25]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [skullScale, skullPosition, skullRotation] = adjustSkullForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{near:0.1, far:1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Skull
          position={skullPosition}
            scale={skullScale}
            rotation={skullRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home