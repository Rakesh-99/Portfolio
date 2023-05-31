import React from 'react';
import NavBar from '../NavBar/NavBar';
import '../Home/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import homeImg from '../Assets/homeImg.png'
import Home2 from './Home2';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";




const Home = () => {



    //  React ts-particles :

    const particlesInit = useCallback(async engine => {

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        
    }, []);



    return (

        <div className='homeContainer'>

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


            {/*-------------------TypeWriter----------------------------*/}
            <div className="wrapBox">

                <div className="typeWriterContainer">
                    <h1 style={{ color: '#fff' }}> Hi There! <span className='wave'>👋</span>
                        <span><h3> I'M<span className='name'>RAKESH KUMAR PARIDA</span> </h3></span>
                        <span>

                            <TypeWriterEffect
                                textStyle={{
                                    color: 'rgb(201, 98, 248)',
                                    fontWeight: 500,
                                    fontSize: '1.3em',

                                }}
                                startDelay={500}
                                cursorColor="rgb(201, 98, 248)"

                                multiText={[
                                    'Student',
                                    'Java Developer',
                                    'Mern Stack Developer'
                                ]}
                                multiTextDelay={2000}
                                typeSpeed={100}
                                multiTextLoop
                            />
                        </span>
                    </h1>
                </div>


                <div className="home-img-container">
                    <img src={homeImg} alt="homeImg" />
                </div>

            </div>

            <Home2 />

        </div>
    );
}

export default Home;
