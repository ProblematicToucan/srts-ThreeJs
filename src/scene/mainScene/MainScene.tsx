import { Canvas } from 'react-three-fiber'
import Cube from '../../prefab/Cube'

function MainScene() {
    return (
        <Canvas style={{ width: "100vw", height: "100vh" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    )
}

export default MainScene
