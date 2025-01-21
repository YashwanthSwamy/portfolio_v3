import React from 'react'
import { Timeline } from '../components/Timeline';
import {
    express,
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
    const siemensIconLists = [typescript, python, angular, nodejs, flask, redux, postgresql, rabbitmq, redis, express, docker, kubernetes, aws];
    const data = [
        {
            title: "Canoo",
            subtitle: "Senior Software Engineer",
            duration: "June 2024 - Present",
            content: (
                <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Collaborated within a team to migrate vehicle software and Over-The-Air (OTA) update systems from AWS to GCP, leveraging Jenkins for CI/CD and Terraform for infrastructure-as-code, ensuring a smooth transition.
                    </p>
                    <p className='pb-4'>
                        • Designed and implemented an integration solution to connect Microsoft Teams workflows with Jira issue creation, leveraging Nest.js and RESTful APIs, streamlining issue tracking and improving response times by 30%, while enhancing team productivity and collaboration.
                    </p>
                    <p className='pb-4'>
                        • Increased unit test coverage of core services to over 75% using Jest, Mockito, and JUnit, bolstering system stability and reducing production defects by 50%.
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {canooIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="rounded-full bg-white w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
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
            subtitle: "Software Engineer Intern",
            duration: "June 2023 - August 2023",
            content: (
                <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Developed and implemented a configuration tool using Spring Boot, React, and Redux, reducing processing times for large datasets by 45% and improving data handling efficiency.
                    </p>
                    <p className='pb-4'>
                        • Built integration solution leveraging Spring Cloud Config Server to access configuration reports from GitLab, resulting in a 25% boost in operational efficiency.
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {nasdaqIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="rounded-full bg-white w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
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
            subtitle: "Senior Software Engineer",
            duration: "July 2018 - July 2022",
            content: (
                <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Designed and developed multi-threaded solutions for EV charging platforms using Kafka with Python and Java, reducing system latency by 93% (800ms to 50ms), ensuring high performance and reliability.
                    </p>
                    <p className='pb-4'>
                        • Developed smart charging dashboards using Angular and Redux, improving application performance and user experience by 40%.
                    </p>
                    <p className='pb-4'>
                        • Enhanced scalability of high-load services by optimizing Kubernetes jobs, achieving a 70% increase in performance under peak usage.
                    </p>
                    <p className='pb-4'>
                        • Collaborated on the development of a predictive maintenance algorithm for smart charging stations, reducing fault occurrences by 30%.
                    </p>
                    <p className='pb-4'>
                        • Optimized charging efficiency by 48% and reduced power costs by 20% through collaboration on a preconditioning algorithm, contributing to measurable business benefits.
                    </p>
                    <p className='pb-4'>
                        • Streamlined CI/CD pipelines using Jenkins, Docker, and GitLab, improving build and deployment efficiency by 25%.
                    </p>
                    <p className='pb-4'>
                        • Wrote comprehensive unit and integration tests with Mocha, Chai, and JUnit, employing Test-Driven Development (TDD) principles to ensure adherence to functional requirements and improve code quality.
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {siemensIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="rounded-full bg-white w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
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
        <section className="min-h-screen w-full flex flex-col relative" id="work">
            <div className='px-10'>
                <h3 className="text-xl  sm:text-2xl text-slate-600 font-bold font-generalsans"> Experience</h3>
            </div>
            <Timeline data={data} />
        </section>
    )
}

export default Experience;