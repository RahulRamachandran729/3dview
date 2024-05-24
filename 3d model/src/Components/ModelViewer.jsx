import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import axios from 'axios';

function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

function ModelViewer() {
    const [models, setModels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5173/models')
            .then(response => setModels(response.data))
            .catch(error => console.error('Error fetching models:', error));
    }, []);

    return (
        <div>
             {Array.isArray(models) && models.map(model => (
                <div key={model._id}>
                    <h3>{model.name}</h3>
                    <Canvas style={{ height: 400 }}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Model url={`http://localhost:5173/models/${model._id}`} />
                        <OrbitControls />
                    </Canvas>
                </div>
            ))}
        </div>
    );
}

export default ModelViewer;
