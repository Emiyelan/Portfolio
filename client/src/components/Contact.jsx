import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ profile }) {
    if (!profile) return null;

    return (
        <section id="contact" className="py-20 bg-gradient-to-t from-black to-secondary text-center">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        I'm currently available for freelance work and full-time opportunities.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left bg-primary/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
                        <div>
                            <h3 className="text-xl font-semibold text-accent mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <p className="text-gray-300 flex items-center gap-3">
                                    <span className="text-accent">✉</span> <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">{profile.email}</a>
                                </p>
                                <p className="text-gray-300 flex items-center gap-3">
                                    <span className="text-accent">📞</span> {profile.phone}
                                </p>
                                <p className="text-gray-300 flex items-center gap-3">
                                    <span className="text-accent">🔗</span> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn Profile</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-accent mb-4">Connect on GitHub</h3>
                            <p className="text-gray-300 mb-6">
                                Check out my latest code contributions and projects.
                            </p>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                                Visit {profile.github.replace('https://github.com/', '')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
