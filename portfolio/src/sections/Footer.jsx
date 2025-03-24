import React from 'react';

import { FaLocationArrow } from 'react-icons/fa6';
import { FloatingSocial } from '../components/FloatingSocial';
import MagicButton from '../components/MagicButton';
import { sidebarLinks } from '../constants';

const Footer = () => {
    return (
        <section className="w-full pb-6 mb-[50px] py-4 md:mb-4">
            <div className="flex flex-col items-center">
                <p className="text-white md:mt-10 text-center">
                    Have a project in mind? Lets build something together.
                </p>
                <a href="mailto:yashwanth_swamy@outlook.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-4 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light text-white">
                    Copyright © 2025 Yashwanth Hirehalli Swamy
                </p>

                {/* <div className="flex items-center md:gap-3 gap-6">
                    <FloatingSocial
                        mobileClassName="translate-y-20" // only for demo, remove for production
                        items={sidebarLinks}
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Footer;