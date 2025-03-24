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
    aws,
    cuboulder,
    uvce
} from "../icons";

import {
    IconBrandGithub,
    IconBrandLinkedinFilled,
    IconHome,
    IconMail,
} from "@tabler/icons-react";

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#skills',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const sidebarLinks = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 hover:text-teal-500" />
        ),
        href: "#",
        target: "",
        rel: "",
    },
    {
        title: "Linkedin",
        icon: (
            <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 hover:text-teal-500" />
        ),
        href: "https://www.linkedin.com/in/yashwanthhs/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        title: "Mail",
        icon: (
            <IconMail className="h-full w-full text-neutral-500 hover:text-teal-500" />
        ),
        href: "mail:to",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 hover:text-teal-500" />
        ),
        href: "https://github.com/YashwanthSwamy",
        target: "_blank",
        rel: "noopener noreferrer",
    },
];

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nest,
        name: "Nest.js",
        type: "Backend",
    },
    {
        imageUrl: flask,
        name: "",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: rabbitmq,
        name: "RabbitMQ",
        type: "Message Broker",
    },
    {
        imageUrl: docker,
        name: "",
        type: "Deployment",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Deployment",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Services",
    },
];

export const education = [
    {
        iconUrl: cuboulder,
        theme: 'btn-back-orange',
        name: 'Masters in Computer Science',
        university: 'University of Colorado Boulder',
        date: "Aug 2022 - May 2024",
        gpa: "3.9/4.0",
    },
    {
        iconUrl: uvce,
        theme: 'btn-back-yellow',
        name: 'Bachelors in Computer Science',
        university: 'University Visvesvaraya College of Engineering',
        date: "Aug 2014 - Jun 2018",
        gpa: "72.5/100",
    },
]



export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.07,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [3, -7, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -6, 0] : [10, -5.5, 0],
        reactLogoPosition: isSmall ? [2, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [6, 5, 0],
        ringPosition: isSmall ? [-10, 12, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-18, 12, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];