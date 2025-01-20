import React from 'react';

import { FaLocationArrow } from 'react-icons/fa6';
import { FloatingSocial } from '../components/FloatingSocial';
import MagicButton from '../components/MagicButton';
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";

const Footer = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    return (
        <section className="w-full pb-6 mb-[50px] py-4 md:mb-4">
            <div className="flex flex-col items-center">
                <p className="text-white-200 md:mt-10 text-center">
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
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Yashwanth Hirehalli Swamy
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    <FloatingSocial
                        mobileClassName="translate-y-20" // only for demo, remove for production
                        items={links}
                    />
                </div>
            </div>
        </section>
    );
};

export default Footer;