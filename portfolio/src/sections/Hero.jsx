import React from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/CanvasLoader';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Ring';
import { FlipWords } from '../components/FlipWords';
import { HeroBackground } from '../components/HeroBackground';


const Hero = () => {
    const words = ["Developer", "Designer"]

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <HeroBackground className='min-h-screen w-full'>
                <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                    <p className='text-2xl  sm:text-4xl  text-slate-100 font-bold font-generalsans text-center'>
                        Hi, I'm Yashwanth Swamy <span className="waving-hand">👋</span>
                    </p>
                    <div className='flex inline-block justify-center text-2xl  sm:text-4xl text-slate-100 font-bold font-generalsans text-center'>
                        <p >Software</p>
                        <FlipWords words={words} />
                    </div>
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
            </HeroBackground>
        </section>
    );
};

export default Hero;
