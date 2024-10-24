import React from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/CanvasLoader';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { Leva, useControls } from 'leva';

const Hero = () => {

    const controls = useControls('HackerRoom', {
        positionX: {
            valueOf: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            valueOf: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            valueOf: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            valueOf: 2.5,
            min: -10,
            max: 10
        },
        rotationY: {
            valueOf: 2.5,
            min: -10,
            max: 10
        },
        rotationZ: {
            valueOf: 2.5,
            min: -10,
            max: 10
        },
        scale: {
            valueOf: 0.1,
            min: -10,
            max: 10
        }
    })

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Yashwanth Swamy <span className='waving-hand'>👋🏼</span></p>
                <p className='hero_tag text-gray_gradient'>
                    Innovating Through Code and Creative Solutions
                </p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Leva />
                <Canvas className='w-full h-full'>
                    <Suspense fallback={CanvasLoader}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom
                            position={[2, -8, 2]}
                            rotation={[0, -Math.PI, 0]}
                            scale={0.1}
                        />

                        <ambientLight intensity={1} />
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={0.5}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero;