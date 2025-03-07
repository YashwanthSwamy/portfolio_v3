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
            title_color: "text-white",
            subtitle: "Senior Software Engineer",
            duration: "June 2024 - Present",
            content: (
                <div className="experience-text text-white text-xs md:text-sm font-normal mb-8 text-justify">
                    <p className='pb-4'>
                        • Collaborated within a team to migrate vehicle software and Over-The-Air (OTA) update systems from <span className='font-bold highlight-span'>AWS to GCP</span>, leveraging <span className='font-bold highlight-span'>Jenkins for CI/CD and Terraform</span> for infrastructure-as-code, ensuring a smooth transition.
                    </p>
                    <p className='pb-4'>
                        • Designed and implemented an integration solution to connect Microsoft Teams workflows with Jira issue creation, leveraging <span className='font-bold highlight-span'>Nest.js and RESTful APIs</span> streamlining issue tracking and improving response times by 30%, while enhancing team productivity and collaboration.
                    </p>
                    <p className='pb-4'>
                        • Increased unit test coverage of core services to over 75% using <span className='font-bold highlight-span'>Jest, Mockito, and JUnit</span> bolstering system stability and reducing production defects by 50%.
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {canooIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className=" border-1 border-transparent animate-border rounded-full bg-neutral-300 w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
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
                        • Developed and implemented a configuration tool using <span className='font-bold highlight-span'>Spring Boot, React, and Redux</span> reducing processing times for large datasets by 45% and improving data handling efficiency.
                    </p>
                    <p className='pb-4'>
                        • Built integration solution leveraging <span className='font-bold highlight-span'>Spring Cloud Config Server</span> to access configuration reports from GitLab, resulting in a 25% boost in operational efficiency.
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {nasdaqIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="border-1 border-transparent animate-border rounded-full bg-neutral-300 w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
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
                        • Designed and developed multi-threaded solutions for EV charging platforms using <span className='font-bold highlight-span'>Kafka with Python and Java</span> reducing system <span className='font-bold highlight-span'>latency by 93% (800ms to 50ms)</span>, ensuring high performance and reliability.
                    </p>
                    <p className='pb-4'>
                        • Developed smart charging dashboards using <span className='font-bold highlight-span'>Angular and Redux</span> improving application performance and user experience by 40%.
                    </p>
                    <p className='pb-4'>
                        • <span className='font-bold highlight-span'>Enhanced scalability</span> of high-load services by optimizing Kubernetes jobs, achieving a 70% increase in performance under peak usage.
                    </p>
                    <p className='pb-4'>
                        • Collaborated on the development of a <span className='font-bold highlight-span'>predictive maintenance algorithm </span> for smart charging stations, reducing fault occurrences by 30%.
                    </p>
                    <p className='pb-4'>
                        • Optimized charging efficiency by 48% andreduced power costs by 20% through collaboration on a preconditioning algorithm, contributing to measurable business benefits.
                    </p>
                    <p className='pb-4'>
                        • Streamlined CI/CD pipelines using <span className='font-bold highlight-span'>Jenkins, Docker, and GitLab</span> improving build and deployment efficiency by 25%.
                    </p>
                    <p className='pb-4'>
                        • Wrote comprehensive unit and integration tests with Mocha, Chai, and JUnit, employing <span className='font-bold highlight-span'>Test-Driven Development (TDD)</span>  principles to ensure adherence to functional requirements and improve code quality.
                    </p>
                    <div className="flex flex-wrap justify-start pt-4">
                        {siemensIconLists.map((icon, index) => (
                            <div
                                key={icon}
                                className="border-1 border-transparent animate-border rounded-full bg-neutral-300 w-12 h-12 lg:w-18 lg:h-18 flex justify-center items-center"
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