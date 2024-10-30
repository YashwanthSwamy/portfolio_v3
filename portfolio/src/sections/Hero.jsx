import React from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/CanvasLoader';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return (
        <section className='min-h-screen w-full flex flex-col lg:flex-row relative'>
            <div className='w-full lg:w-1/2 flex flex-col sm:mt-36 mt-20 gap-3 justify-start '>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi, I am Yashwanth Swamy <span className='waving-hand'>👋🏼</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Innovating Through Code and Creative Solutions
                </p>
            </div>

            <div className='w-full lg:w-1/2 h-full absolute inset-0 lg:inset-auto lg:top-0 lg:right-0 lg:bottom-0'>
                <Leva />
                <Canvas className='w-full h-full'>
                    <Suspense fallback={CanvasLoader}>
                        <PerspectiveCamera makeDefault position={[2, 0, 30]} />
                        <HackerRoom
                            position={[2, -8, 2]}
                            rotation={isMobile ? [0, -Math.PI, 0] : [0, -10, 0]}
                            scale={isMobile ? 0.07 : 0.1}
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
    );
};

export default Hero;
