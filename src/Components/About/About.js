import React from 'react';
import NavBar from '../NavBar/NavBar'
import '../About/About.css';
import aboutImg from '../Assets/about.png'
import { FaRegHandPointRight } from 'react-icons/fa'
import Tech from './Tech';
import Tools from './Tools'
import Github from './Github';
import Footer from '../Footer/Footer'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const About = () => {

    //  React ts-particles :

    const particlesInit = useCallback(async engine => {

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {

    }, []);


    return (

        <div className='aboutContainer'>


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
                            value:0.7,
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

            <div className="aboutInfo">

                <div className="aboutLeftInfo">
                    <div className="aboutLeftInfoTitle">
                        <h1>Know Who <span className='iAm'>Iam</span></h1>
                    </div>

                    <h2 className='myInfo'>
                        Hi Everyone, I am <span className='clr'>Rakesh Kumar Parida</span> from <span className='clr'>Bhubaneswar,India</span>.
                        I am a student in 3rd year pursuing B.TECH in Computer Science in NIT.
                    </h2>

                    <h2 className='myInfo'>Apart from coding,some other activities that I love to do!</h2>

                    <div className="hobbiesList">
                        <span className='handIcons'> <FaRegHandPointRight /> <span className='hobby'>Playing Games</span> </span>
                        <span className='handIcons'> <FaRegHandPointRight /> <span className='hobby'>Riding Bikes</span> </span>
                        <span className='handIcons'> <FaRegHandPointRight /> <span className='hobby'>Travelling</span></span>
                    </div>

                    <div className="quote">
                        <p style={{ fontStyle: 'italic' }}>"Time flies, Do it now or regret later. It's all in your hand !"</p>
                        <span className='name'>~Rakesh</span>
                    </div>
                </div>

                <div className="aboutRightInfo">
                    <img src={aboutImg} alt="aboutImg" />
                </div>

            </div>
            <Tech />
            <Tools />
            <Github />
            <Footer />
        </div>
    )
}

export default About;
