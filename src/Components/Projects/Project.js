import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProjectCard from './ProjectCard';
import '../Projects/Project.css';
import ProjectCardData from './ProjectCardData';
import Footer from '../Footer/Footer';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Project = () => {


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
                                enable: false,
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
                            value: "#fff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.9,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 0.1,
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
                            value: 0.7,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 1 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <NavBar />

            <div className='projectInfo'>
                <h1>Projects</h1>
                <p>Here are a few Projects I'have worked on recently</p>
            </div>

            <div className="projectContainer">
                {

                    ProjectCardData.map((value, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                id={index}
                                imgSrc={value.imgSrc}
                                projectTitle={value.projectTitle}
                                aboutProject={value.aboutProject}
                                url1={value.url1}
                                url2={value.url2}
                            />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Project;
