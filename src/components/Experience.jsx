import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award, BookOpen, Briefcase } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Experience = ({ theme }) => {
    const education = [
        {
            period: "Aug 2023 - Present",
            title: "B.Tech in Computer Science & Engineering",
            institution: "Lovely Professional University, Punjab",
            score: "CGPA: 8.75",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            period: "Aug 2021 - May 2023",
            title: "Intermediate (MPC)",
            institution: "Sri Chaitanya Junior College, Palakol",
            score: "Percentage: 96.5%",
            icon: <School className="w-6 h-6" />
        },
        {
            period: "Aug 2020 - Jun 2021",
            title: "SSC (10th Standard)",
            institution: "Aditya School, Narsapur",
            score: "Percentage: 98%",
            icon: <BookOpen className="w-6 h-6" />
        }
    ];

    const certifications = [
        {
            date: "Mar 2026",
            title: "The Science of Well Being",
            provider: "Coursera",
            link: "https://drive.google.com/file/d/1bK_1HnVtBUPW8pe6C_ReBCAC0oVuVKk7/view?usp=sharing"
        },
        {
            date: "Sep 2025",
            title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
            provider: "Oracle University",
            link: "https://drive.google.com/file/d/1uR61bTJ5D-RhBZhQTK7Ub8iaVJfdxpYY/view?usp=sharing"
        },
        {
            date: "Apr 2025",
            title: "Cloud Computing",
            provider: "NPTEL",
            link: "https://drive.google.com/file/d/1mVgE-syUCibmPrZzCPCPiuvjzSa_EgyC/view?usp=sharing"
        },
        {
            date: "Aug 2024",
            title: "Crash Course on Python",
            provider: "Google (via Coursera)",
            link: "https://drive.google.com/file/d/163I2WWmYJOouoWYdhksjEzYAsSfMPLBB/view?usp=sharing"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-[#f5f2eb] dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">Journey & Learning</h2>
                    <p className="text-brown/70 dark:text-gray-400 max-w-2xl mx-auto">A roadmap of my academic foundations and professional certifications.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Experience/Training Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-brown/10 dark:bg-primary-cyan/10 rounded-xl text-brown dark:text-primary-cyan">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal dark:text-white">Training & Experience</h3>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <SpotlightCard
                                spotlightColor={theme === 'light' ? "rgba(180, 140, 90, 0.2)" : "rgba(0, 255, 136, 0.1)"}
                                className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-brown/10 dark:border-white/10"
                            >
                                <span className="text-sm font-bold text-brown dark:text-primary-cyan uppercase tracking-widest">Jun 2025 - Jul 2025</span>
                                <h4 className="text-2xl font-bold text-charcoal dark:text-white mt-2">Guide to Machine Learning with Data Science</h4>
                                <div className="flex items-center gap-4">
                                    <p className="text-lg font-medium text-brown/80 dark:text-gray-300">Cipher Schools (Edtech Company)</p>
                                    <a 
                                        href="https://www.cipherschools.com/certificate/preview?id=687e69327efd6d50907040aa" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-brown dark:text-primary-cyan hover:underline ml-4"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                                <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Performed EDA using NumPy and Pandas, optimized preprocessing.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Hands-on training in ML fundamentals and feature engineering.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Built models using LR, KNN, SVM, Decision Trees, and K-Means.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Implemented real-world projects applying supervised and unsupervised learning techniques to derive actionable insights.
                                    </li>
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    </div>

                    <div className="space-y-24">
                        {/* Education Section */}
                        <div className="w-full">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-brown/10 dark:bg-primary-cyan/10 rounded-xl text-brown dark:text-primary-cyan">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal dark:text-white">Education</h3>
                            </div>

                            <div className="space-y-6">
                                {education.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <SpotlightCard
                                            spotlightColor={theme === 'light' ? "rgba(180, 140, 90, 0.1)" : "rgba(0, 255, 136, 0.05)"}
                                            className="p-8 rounded-2xl bg-white/30 dark:bg-white/5 border border-brown/5 dark:border-white/5 hover:border-brown/20 dark:hover:border-primary-cyan/20 transition-all"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                <div className="flex gap-6 items-center">
                                                    <div className="p-4 bg-brown/5 dark:bg-primary-cyan/5 rounded-2xl text-brown/60 dark:text-primary-cyan/60 hidden sm:block">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-brown/50 dark:text-primary-cyan/50 uppercase tracking-[0.2em]">{item.period}</span>
                                                        <h4 className="text-2xl font-bold text-charcoal dark:text-white mt-1">{item.title}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <span className="px-5 py-2 bg-brown/10 dark:bg-primary-cyan/10 text-brown dark:text-primary-cyan rounded-full text-xs font-bold ring-1 ring-inset ring-brown/20 dark:ring-primary-cyan/20">
                                                        {item.score}
                                                    </span>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications Section */}
                        <div className="w-full">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-brown/10 dark:bg-primary-cyan/10 rounded-xl text-brown dark:text-primary-cyan">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal dark:text-white">Certifications</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {certifications.map((cert, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative h-72 rounded-[2rem] bg-white/50 dark:bg-white/5 border border-brown/10 dark:border-white/10 hover:border-brown dark:hover:border-primary-cyan transition-all p-10 flex flex-col justify-between"
                                    >
                                        {/* Floating Certificate Preview Overlay */}
                                        <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] pointer-events-none">
                                            <motion.div 
                                                className="absolute -right-6 top-1/2 -translate-y-1/2 w-72 h-48 opacity-0 group-hover:opacity-100 group-hover:-rotate-3 translate-x-12 group-hover:translate-x-0 transition-all duration-700 shadow-2xl border-8 border-white dark:border-white/10 rounded-xl hidden lg:block"
                                                style={{
                                                    backgroundImage: `url(${cert.image || 'https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=2070&auto=format&fit=crop'})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'top'
                                                }}
                                            />
                                        </div>
                                        
                                        <div className="relative z-10 max-w-[65%]">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-brown dark:bg-primary-cyan animate-pulse" />
                                                <span className="text-xs font-bold text-brown/50 dark:text-primary-cyan/50 uppercase tracking-[0.2em]">{cert.date}</span>
                                            </div>
                                            <h4 className="text-2xl font-bold text-charcoal dark:text-white leading-tight group-hover:text-brown dark:group-hover:text-primary-cyan transition-colors break-words drop-shadow-sm">
                                                {cert.title}
                                            </h4>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-3">{cert.provider}</p>
                                        </div>

                                        <div className="relative z-10 flex justify-between items-end">
                                            <div className="p-4 rounded-2xl bg-brown/10 dark:bg-primary-cyan/10 text-brown dark:text-primary-cyan group-hover:bg-brown dark:group-hover:bg-primary-cyan group-hover:text-white dark:group-hover:text-black transition-all">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-brown dark:bg-primary-cyan text-white dark:text-black opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-xl font-bold text-xs uppercase tracking-widest">
                                                Verify Credential
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
