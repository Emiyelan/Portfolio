import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile as localProfile } from './data/profile';

function App() {
    const [profile, setProfile] = useState(localProfile);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Projects directly from GitHub
                const githubUsername = 'Emiyelan';
                const projectsRes = await axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);

                // Inject manual Live Demo link for Market Place Project
                const projectsWithLinks = projectsRes.data.map(project => {
                    if (project.name.toLowerCase().includes('market-place')) {
                        return { ...project, homepage: 'https://market-place-project-46so.onrender.com' };
                    }
                    return project;
                });

                setProjects(projectsWithLinks);
            } catch (error) {
                console.error("Error fetching projects from GitHub:", error);
                // Fallback projects if GitHub API limit reached
                setProjects([
                    { id: 1, name: 'market-place-project', description: 'A fully functional marketplace application.', html_url: 'https://github.com/Emiyelan', homepage: 'https://market-place-project-46so.onrender.com', language: 'MERN Stack' },
                    { id: 2, name: 'Portfolio-MERN', description: 'My personal portfolio website.', html_url: 'https://github.com/Emiyelan', language: 'JavaScript' }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full bg-primary flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="bg-primary min-h-screen text-white font-sans antialiased selection:bg-accent selection:text-primary">
            <Navbar />
            <Hero profile={profile} />
            <Projects projects={projects} />
            <Contact profile={profile} />
            <Footer />
        </div>
    );
}

export default App;
