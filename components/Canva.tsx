import React from 'react'
import {Canvas} from "@react-three/fiber"
import Box from './Box'
import {OrbitControls} from "@react-three/drei"
import ModelDraco from "./ModelDraco"





type Props = {}

const Canva = (props: Props) => {
  return (<>
  <Canvas >
    <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed="-4"/>
    <ambientLight intensity={0.8} />
    <directionalLight position={[1,1,3]} intensity={1} />
    <ModelDraco position={[0, -1.6, 0]} />
  </Canvas>
  </>
    
  )
}

export default Canva