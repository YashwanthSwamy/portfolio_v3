import React from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/CanvasLoader';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import { Spotlight } from '../components/Spotlight';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Ring';


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='text-2xl  sm:text-4xl  font-bold text-white font-generalsans text-center'>
                    Hi, I'm Yashwanth Swamy <span className="waving-hand">👋</span>
                </p>
                <p className='streaky-glow hero_tag'>
                    Software Engineer & Designer
                </p>
            </div>



            <div className='w-full h-full absolute inset-0'>
                <Leva />
                <Canvas className='w-full h-full'>
                    <Suspense fallback={CanvasLoader}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HackerRoom
                            position={sizes.deskPosition}
                            rotation={isMobile ? [0, -Math.PI, 0] : [0, -10, 0]}
                            scale={sizes.deskScale}
                        />

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>

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
