import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Skull from '../models/Skull'


const Home = () => {

  // skull default properties for mobile
  const adjustSkullForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, 0, -35]
    let rotation = [0.5, 0, 0]

    if (window.innerWidth < 768) {
      // [x,y,z] scale
      screenScale = [15, 15, 15]
    } else {
      screenScale = [20, 20, 20]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [skullScale, skullPosition, skullRotation] = adjustSkullForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[5, 1, 5]} intensity={5} />
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