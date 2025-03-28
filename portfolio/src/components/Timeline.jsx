"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
    data
}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(100);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            console.log("height", rect.height)
            if (rect.height == 0){
                setHeight(1540);
            }
            else{
                setHeight(rect.height);
            }
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 25%", "end 75%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        (<div
            className="w-full font-sans md:px-10"
            ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-500 flex items-center justify-center">
                                <div
                                    className="h-4 w-4 rounded-full bg-white border border-white p-2" />
                            </div>
                            <div>
                                <h3
                                    className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${item.title_color}`}>
                                    {item.title}
                                </h3>
                                <h6 className={`hidden md:block text-xl md:pl-20 md:text-l text-neutral-500`}>
                                    {item.subtitle} <br /> {item.duration}
                                </h6>
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <div>
                                <h3
                                    className="md:hidden block text-2xl mb-4 text-left font-bold text-orange-50">
                                    {item.title}
                                </h3>
                                <h6 className="md:hidden block text-l mb-4 text-left font-bold text-neutral-500">
                                    {item.subtitle} <br /> {item.duration}
                                </h6>
                            </div>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-teal-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,teal_10%,teal_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[3px] bg-gradient-to-t from-teal-500 via-teal-200 to-transparent from-[0%] via-[40%] rounded-full" />
                </div>
            </div>
        </div>)
    );
};
