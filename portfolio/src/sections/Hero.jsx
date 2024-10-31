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


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='hero-section min-h-screen w-full flex flex-col lg:flex-row relative'>

            <div className='w-full lg:w-1/2 flex flex-col sm:mt-36 mt-20 justify-start lg:pt-12'>
                <p className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] leading-[110px] 2xl:leading-[120px]'>
                    Yashwanth Swamy
                </p>
                <p className='streaky-glow 2xl:mt-10 lg:mt-4 font-bold text-[14px] sm:text-[20px] md:text-[30px] 2xl:text-[32px] sm:leading-[20px] md:leading-[30px] 2xl:leading-[40px] max-w-sm 2xl:max-w-lg text-white'>
                    Innovating Through Code & Creative Solutions
                </p>
            </div>



            <div className='w-full lg:w-1/2 h-full absolute inset-0 lg:inset-auto sm:mt-4 lg:top-0 lg:right-0 lg:bottom-0'>
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
                            <Target position={sizes.targetPosition}></Target>
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
