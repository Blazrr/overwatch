import React from 'react'

type Props = {}

const Box = (props: Props) => {
  return (
    <mesh rotation={[90,0,20]}>
        <boxBufferGeometry attach="geometry" args={[1.2,1.2,1.2]}/>
        <meshLambertMaterial attach="material" color="blue"/>
    </mesh>
  )
}

export default Box