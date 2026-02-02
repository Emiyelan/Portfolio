import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [profile, setProfile] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileRes = await axios.get('http://localhost:5000/api/profile');
                setProfile(profileRes.data);

                const projectsRes = await axios.get('http://localhost:5000/api/projects');
                setProjects(projectsRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
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
