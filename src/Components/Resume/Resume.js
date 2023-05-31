import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Resume = () => {

    //  React ts-particles :

    const particlesInit = useCallback(async engine => {

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {

    }, []);

    return (

        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 1.7 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <NavBar />
            <div className="mainResumeContainer">
                <div className="resumeContainer">
                    <p>Download Resume</p>
                    <a href="../Assests/RakeshKumarParidaResume.pdf" download={'RakeshKumarParidaResume.pdf'}>
                        <button>Resume</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resume;