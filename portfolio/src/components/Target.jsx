import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
    );
    const targetRef = useRef();

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })

    return (
        <mesh {...props} ref={targetRef} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Target;