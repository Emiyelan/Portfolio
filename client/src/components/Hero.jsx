import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ profile }) {
    if (!profile) return null;

    return (
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent text-lg font-semibold tracking-wide uppercase mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        {profile.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        {profile.title}
                    </p>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                        {profile.bio}
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#projects" className="bg-accent text-primary px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                            View Work
                        </a>
                        <a href="/Emmanuel_Miyelani_Makaringe_Resume.pdf" download="Emmanuel_Miyelani_Makaringe_Resume.pdf" className="border-2 border-accent text-accent px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-primary transition-all duration-300">
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
