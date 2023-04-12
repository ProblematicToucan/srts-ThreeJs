import { useRef, useEffect, useState } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { ThreeElements } from 'react-three-fiber'

function Cube(props: ThreeElements['mesh']) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)

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
        <mesh
            {...props}
            ref={meshRef}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxBufferGeometry />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Cube;