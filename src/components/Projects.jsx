import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ArrowDown } from 'lucide-react';
import documindImg from '../assets/documind.png';
import newsDigestImg from '../assets/news_digest.png';
import diabetesPredictorImg from '../assets/diabetes_predictor.png';

const projects = [
    {
        title: "DocuMind AI: Enterprise RAG Platform",
        description: "An end-to-end full-stack Retrieval-Augmented Generation (RAG) platform that transforms how organizations interact with their data.",
        details: [
            "Achieved sub-second retrieval latency using ChromaDB vector store.",
            "Integrated Groq API for lightning-fast LLM responses.",
            "Features secure document management and interactive chat interface.",
            "Implemented smart chunking and PDF parsing with LangChain."
        ],
        tags: ["FastAPI", "React", "LangChain", "ChromaDB", "Groq API"],
        link: "https://github.com/ajay-pothula",
        liveLink: null,
        date: "March 2026",
        image: documindImg
    },
    {
        title: "AI-Powered Automated Daily News Digest",
        description: "An automated intelligence system that curates and summarizes global news, saving readers hours of research daily.",
        details: [
            "Reduced reading time by 90% via Google Gemini AI summarization.",
            "Automated gathering of top articles using FeedParser.",
            "Smart filtering and JSON persistence for personalized news feeds.",
            "Real-time updates with minimal resource consumption."
        ],
        tags: ["Python", "Gemini AI", "JSON", "FeedParser"],
        link: "https://github.com/ajay-pothula",
        liveLink: null,
        date: "October 2025",
        image: newsDigestImg
    },
    {
        title: "Diabetes Predictor",
        description: "A clinical-grade machine learning application designed to assist in early diabetes risk detection.",
        details: [
            "Achieved 85% prediction accuracy across multiple test datasets.",
            "Ensembled LR, Decision Tree, Random Forest, and XGBoost models.",
            "Interactive dashboard built with Gradio for user-friendly testing.",
            "Comprehensive EDA and feature engineering on medical data."
        ],
        tags: ["Python", "Scikit", "Pandas", "Gradio"],
        link: "https://github.com/ajay-pothula",
        liveLink: null,
        date: "September 2025",
        image: diabetesPredictorImg
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        // Adjusted Dimensions: Increased Width significantly
        // md:w-[700px] lg:w-[750px]
        <div className="relative w-[85vw] md:w-[700px] lg:w-[750px] h-[50vh] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-brown/10 dark:border-white/10 shadow-xl backdrop-blur-sm group hover:border-black dark:hover:border-primary-cyan hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500">
            {/* Background Image - Adjusted coverage */}
            <div className="absolute inset-0 h-[45%] md:h-[60%] overflow-hidden">
                <div className="absolute inset-0 bg-brown/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content Container - Bottom 40% */}
            <div className="absolute bottom-0 left-0 right-0 h-[55%] md:h-[45%] bg-white dark:bg-[#121212] border-t border-brown/10 dark:border-white/10 p-5 md:p-8 flex flex-col justify-between z-20 group-hover:h-[75%] transition-all duration-500 ease-in-out">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-brown dark:text-primary-cyan font-mono text-sm tracking-wide font-semibold">
                            {project.date}
                        </span>
                        <div className="flex gap-4">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative text-charcoal/70 dark:text-white/70 hover:text-black dark:hover:text-primary-cyan transition-colors"
                                >
                                    <ArrowUpRight size={20} />
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-cream bg-charcoal dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                        Live Link
                                    </span>
                                </a>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link relative text-charcoal/70 dark:text-white/70 hover:text-black dark:hover:text-primary-cyan transition-colors"
                            >
                                <Github size={20} />
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-cream bg-charcoal dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-3 leading-tight group-hover:text-black dark:group-hover:text-primary-cyan transition-colors">
                        {project.title}
                    </h2>

                    <p className="text-brown/80 dark:text-gray-400 text-sm md:text-base line-clamp-2 md:line-clamp-3 leading-relaxed mb-4 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                    </p>

                    {/* New Detailed Section - Revealed on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500 delay-100 mb-4">
                        <p className="text-xs font-bold text-brown dark:text-primary-cyan uppercase mb-2 tracking-wider">Key Features:</p>
                        <ul className="space-y-1">
                            {project.details.map((detail, i) => (
                                <li key={i} className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-1.5 flex-shrink-0" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-black dark:bg-primary-cyan/5 text-white dark:text-primary-cyan rounded-full border-none dark:border dark:border-primary-cyan/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Detect screen width to adjust scroll range
    const [scrollRange, setScrollRange] = useState(["1%", "-60%"]);

    useEffect(() => {
        const updateRange = () => {
            // Mobile: Scroll further to reveal the last card completely
            if (window.innerWidth < 768) {
                // Adjusted to -72% to center the last project card on mobile
                setScrollRange(["1%", "-72%"]);
            } else {
                // Desktop: Keep exactly as requested
                setScrollRange(["1%", "-60%"]);
            }
        };

        updateRange(); // Initial check
        window.addEventListener('resize', updateRange);
        return () => window.removeEventListener('resize', updateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], scrollRange);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-white dark:bg-black transition-colors duration-300">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Large Background Title */}
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-0">
                    <h2 className="text-[12vw] font-bold text-brown/[0.05] dark:text-white/[0.03] select-none leading-none tracking-tighter transition-colors duration-300">
                        SELECTED <br /> WORKS
                    </h2>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-8 md:gap-12 pl-[5vw] pr-[50vw] items-center z-10"
                >
                    {/* Intro Card */}
                    <div className="w-[85vw] md:w-[400px] lg:w-[450px] flex-shrink-0 flex flex-col justify-center text-charcoal dark:text-white p-6 md:p-12 transition-colors duration-300">
                        <div className="w-12 h-1 bg-brown dark:bg-primary-cyan mb-6 transition-colors duration-300"></div>
                        {/* Increased Font Size */}
                        <h3 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Recent <br />
                            <span className="text-brown/60 dark:text-gray-500 transition-colors duration-300">Projects</span>
                        </h3>
                        <p className="text-brown/80 dark:text-gray-400 text-lg mb-8 transition-colors duration-300">
                            Solving complex problems with elegant code.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-mono animate-blink text-brown dark:text-[#00C2FF] transition-colors duration-300">
                            <span>SCROLL TO EXPLORE</span>
                            <ArrowDown className="w-4 h-4" />
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
