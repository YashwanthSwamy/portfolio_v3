import React from 'react'
import { Timeline } from '../components/Timeline';
import {
    nest,
    angular,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    python,
    java,
    spring,
    flask,
    postgresql,
    rabbitmq,
    redis,
    docker,
    kubernetes,
    aws
} from "../icons";

const Experience = () => {
    const canooIconLists = [typescript, python, flask, react, redux, tailwindcss, docker, kubernetes, aws];
    const nasdaqIconLists = [typescript, java, react, redux, tailwindcss, spring, docker, kubernetes, aws];
    const siemensIconLists = [typescript, python, angular, nodejs, flask, redux, postgresql, rabbitmq, redis, nest, docker, kubernetes, aws];
    const data = [
        {
            title: "Canoo",
            title_color: "text-white",
            subtitle: "Senior Software Engineer",
            duration: "June 2024 - Present",
            content: (
                <div className="experience-text text-white text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Constructed infrastructure-as-code using Terraform and Jenkins for vehicle software migration <span className='font-bold highlight-span'>Over-The-Air (OTA) systems from AWS to GCP,</span> ensuring a smooth transition
                    </p>
                    <p className='pb-4'>
                        • Accelerated issue tracking and reporting efficiency by 30% through architecting a <span className='font-bold highlight-span'>custom Jira and Microsoft Teams</span> integration leveraging <span className='font-bold highlight-span'>Java, Node.js and RESTful APIs</span>
                    </p>
                    <p className='pb-4'>
                        • Deployed comprehensive unit tests, achieving 90% coverage of crucial API endpoints with <span className='font-bold highlight-span'>Jest and Mockito </span>, reducing critical issues in the subsequent quarterly release
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {canooIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className=" border-1 glass-background animate-border rounded-full bg-neutral-300 w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
                            >
                                <img src={icon} alt={`Logo ${index}`} className="p-3" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "NASDAQ ",
            title_color: "text-cyan-500",
            subtitle: "Software Engineer Intern",
            duration: "June 2023 - August 2023",
            content: (
                <div className="experience-text text-white  text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Developed a solution with <span className='font-bold highlight-span'>Spring Cloud Config Server</span> to manage and access configuration <span className='font-bold highlight-span'>report versions from GitLab</span>, reducing configuration errors to less than 1%
                    </p>
                    <p className='pb-4'>
                        • Orchestrated the development of a configuration tool using <span className='font-bold highlight-span'>Spring Boot, React, and Redux</span>, which accelerated processing times for large datasets by 45% and enhanced data handling efficiency, enabling faster reporting
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {nasdaqIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="border-1 glass-background animate-border rounded-full bg-neutral-300 w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
                            >
                                <img src={icon} alt={`Logo ${index}`} className="p-3" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Siemens",
            title_color: "text-teal-500",
            subtitle: "Senior Software Engineer",
            duration: "July 2018 - July 2022",
            content: (
                <div className="experience-text text-white text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Architected <span className='font-bold highlight-span'>asynchronous, event-driven architecture</span> for EV charging platform utilizing <span className='font-bold highlight-span'>Kafka with Java, Python and Node.js</span> accelerating system responsiveness and slashed latency from 800ms to 50ms improving reliability
                    </p>
                    <p className='pb-4'>
                        • Developed interactive dashboards leveraging <span className='font-bold highlight-span'> Angular and Redux </span> visualizing real-time EV charging data that boosted application performance by 40% and enhanced user experience across 1M users
                    </p>
                    <p className='pb-4'>
                        • <span className='font-bold highlight-span'>Enhanced scalability</span> of high-load services by optimizing Kubernetes jobs, achieving a 70% increase in performance under peak usage.
                    </p>
                    <p className='pb-4'>
                        • Transformed microservices scalability by overhauling <span className='font-bold highlight-span'>Kubernetes job management and Spring Boot service </span> threading models, handling 10,000+ concurrent EV charging requests without system degradation
                    </p>
                    <p className='pb-4'>
                        • Devised <span className='font-bold highlight-span'>preconditioning algorithms</span>, which optimized energy utilization, decreased peak load demand by 30%, and reduced grid stress which was critical for reducing energy bill
                    </p>
                    <p className='pb-4'>
                        • Engineered introduction, an interactive onboarding prompt, which <span className='font-bold highlight-span'>automated</span> key aspects of the customer onboarding experience, resulting in a 40% reduction in time spent on initial setup
                    </p>
                    <p className='pb-4'>
                        • <span className='font-bold highlight-span'>Automated database migrations</span> using a .NET tool that cloned repositories and executed version-specific migrations, decreasing manual effort by 60% and improving deployment efficiency by 45%
                    </p>
                    <p className='pb-4'>
                        • Constructed a suite of end-to-end tests for critical microservices by adopting Mocha, Chai, and Jest. the outcome was achieving a automate critical business functionality use case, validated on each pull request
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {siemensIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="border-1 glass-background animate-border rounded-full bg-neutral-300 w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
                            >
                                <img src={icon} alt={`Logo ${index}`} className="p-3" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="min-h-screen w-full flex flex-col relative my-10" id="work">
            <div className='px-10'>
                <h3 className="text-xl  sm:text-3xl text-slate-200 font-bold underline underline-offset-4 font-generalsans"> Experience</h3>
            </div>
            <Timeline data={data} />
        </section>
    )
}

export default Experience;