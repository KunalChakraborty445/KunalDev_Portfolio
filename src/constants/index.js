const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Dec 23, 2025",
        title:
            "Building an Emotion-Based Music Recommendation System: When AI Meets Your Mood",
        image: "/images/blog1.png",
        link: "https://dev.to/kunal_chakraborty_6a1ab69/-building-an-emotion-based-music-recommendation-system-when-ai-meets-your-mood-1ce3",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "Building a Full-Stack Job Portal: From MVP to Production-Ready Platform",
        image: "/images/blog2.png",
        link: "https://dev.to/kunal_chakraborty_6a1ab69/building-a-full-stack-job-portal-from-mvp-to-production-ready-platform-24f4",
    },
    {
        id: 3,
        date: "Jan 15, 2026",
        title: "Building a macOS-Inspired Portfolio: A Journey Through React, GSAP",
        image: "/images/blog3.png",
        link: "https://dev.to/kunal_chakraborty_6a1ab69/building-a-macos-inspired-portfolio-a-journey-through-react-gsap-2l41-temp-slug-1489128?preview=cacca8f7b4d73ce96791943a776637a0efe44ca0bd0110b726c20af45a2e7b635e35c51f4a8f58199eb43fc5591b9e9d4a339d587470a850eae1586c",
    },
];

const techStack = [
    {
        category: "Languages",
        items: ["Java", "C", "Python", "JavaScript"],
    },
    {
        category: "Frontend",
        items: ["React.js", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github2.svg",
        bg: "#131c3b",
        link: "https://github.com/KunalChakraborty445",
    },
    {
        id: 2,
        text: "Blog",
        icon: "/icons/blog.svg",
        bg: "#ab6e1a",
        link: "https://dev.to/kunal_chakraborty_6a1ab69",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#070302",
        link: "https://x.com/jsmasterypro",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#056df6",
        link: "https://www.linkedin.com/in/kunal-chakraborty-32274534b",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.jpg",
    },
    {
        id: 2,
        img: "/images/gal2.jpg",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Job Portal Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[21vh] left-[15vh]",
            children: [
                {
                    id: 1,
                    name: "InsiderJob Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Job Portal Application website is a clean and intuitive platform designed to connect job seekers with the right opportunities.",
                        "Instead of a basic listing site, it offers a smart experience with advanced filters, real-time updates, and a smooth application process.",
                        "Think of it like having a career assistant that helps you find and apply for jobs effortlessly—from any device.",
                        "It's built with React.js and Tailwind, ensuring fast performance, responsive design, and a modern, professional look."
                    ],
                },
                {
                    id: 2,
                    name: "InsiderJob.in",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://job-portal-full-stack-client-wine.vercel.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "InsiderJob.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "VibeChat Real time chat app",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[17vh] right-[35vh]",
            children: [
                {
                    id: 1,
                    name: "VibeChat Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Vibe Chat is a real-time communication platform designed for low-latency messaging and seamless state synchronization.",
                        "The core engine uses WebSockets (Socket.io) to manage bi-directional data flow, ensuring that messages, 'typing' indicators, and online statuses are updated instantly across all connected clients.",
                        "I implemented a robust Event-Driven Architecture on the backend to handle message persistence and room-based scaling, ensuring a smooth experience even as the number of concurrent 'vibes' grows."
                    ],
                },
                {
                    id: 2,
                    name: "VibeChat",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://fullstack-chat-app-5-2v1d.onrender.com",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "VibeChat.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "EmoBeats App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[63vh] left-[47vh]",
            children: [
                {
                    id: 1,
                    name: "Emotion Based Music Recommendation Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Emotion-Based Music App is an intuitive way to sync your digital library with your current headspace.",
                        "Instead of endlessly scrolling through playlists, the system uses Machine Learning to analyze your mood and instantly" +
                        " curate the perfect soundtrack via the Spotify API.",
                        "Think of it like a personal DJ that understands how you feel—selecting the right beats for your high moments" +
                        " and the perfect melodies for your low ones.",
                        "It’s powered by a robust Python Flask backend and ML models, ensuring fast," +
                        " intelligent recommendations wrapped in a sleek, responsive interface."
                    ],
                },
                {
                    id: 2,
                    name: "EmoBeats.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "food-delivery-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/kunal-6.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/kunal-2.jpg",
        },
        {
            id: 3,
            name: "holiday-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/kunal-5.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/aboutKunal.jpg",
            description: [
                "Hey! I’m Kunal 👋, a Backend-focused Software Developer who builds robust systems and high-performance APIs that power seamless user experiences.",
                "I specialize in Node.js, Express, and TypeScript, with a deep interest in Database Design (SQL/NoSQL) and System Architecture. I love making things fast, secure, and—most importantly—scalable.",
                "When I'm not optimizing queries, I’m learning Japanese, sipping overpriced coffee, or impulse-buying gadgets that I’ve technically convinced myself are 'essential hardware research' 😅"
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };


export const skillsData = [
    { id: "java", name: "Java", icon: "/icons/java.svg" },
    { id: "react", name: "React", icon: "/icons/react.svg" },
    { id: "node", name: "Node.js", icon: "/icons/nodejs.svg" },
    { id: "mongodb", name: "MongoDb", icon: "/icons/dbmongo.svg" },
];