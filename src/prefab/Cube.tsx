import { useRef, useEffect } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

function Cube() {
    const meshRef = useRef<Mesh>(null!)

    useEffect(() => {
        console.log(Boolean(meshRef.current))
    }, [])

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01
        }
    })

    return (
        <mesh ref={meshRef}>
            <boxBufferGeometry />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default Cube;