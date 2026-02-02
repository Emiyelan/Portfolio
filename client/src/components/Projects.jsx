import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ projects }) {
    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400">Fetch from GitHub automatically</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl border border-gray-800"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white hover:text-accent transition-colors">
                                        {project.name}
                                    </h3>
                                    {project.language && (
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-900 text-blue-200">
                                            {project.language}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 mb-6 flex-grow text-sm line-clamp-3">
                                    {project.description || "No description available."}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center">
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-white font-medium transition-colors text-sm flex items-center gap-1"
                                    >
                                        View Code <span aria-hidden="true">&rarr;</span>
                                    </a>
                                    {project.homepage && (
                                        <a
                                            href={project.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent hover:text-white font-medium transition-colors text-sm"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
