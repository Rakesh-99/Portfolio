import React from 'react';
import '../Home/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import homeImg from '../../Components/Assets/homeImg.png';
import Home2 from '../../Pages/Home/Home2';
import Particle from '../../Components/Particles/Particle';
import ScrollTop from '../../Components/ScrollTop/ScrollTop';
import NavBar from '../../Components/NavBar/NavBar';
import { motion } from 'framer-motion';


const Home = () => {


    return (

        <div className='homeContainer'>

            <Particle />
            <ScrollTop />

            {/*-------------------TypeWriter----------------------------*/}
            <div className="wrapBox">


                <div className="typeWriterContainer">
                    <h1 style={{ color: '#fff' }} className='md:text-3xl text-xl'> Hi There! <span className='wave'>👋</span>
                        <span><motion.h3
                            initial={{ x: -30 }}
                            animate={{ x: 10 }}
                            transition={{
                                duration: 1,
                                delay: 0
                            }}


                        > I'm<span className='name'>RAKESH KUMAR PARIDA.</span> </motion.h3></span>
                        <span>

                            <TypeWriterEffect
                                textStyle={{
                                    color: 'rgb(201, 98, 248)',
                                    fontWeight: 500,
                                    fontSize: '0.8em',
                                }}
                                startDelay={0}
                                cursorColor="rgb(201, 98, 248)"

                                multiText={[

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
                    <motion.img src={homeImg} alt="homeImg" fetchpriority='high' decoding='async' loading='lazy'

                        initial={{ x: 50 }}
                        animate={{ x: 10 }}
                        transition={{
                            duration: 1,
                            delay: 0
                        }}
                    />
                </div>

            </div>

            <Home2 />

        </div>
    );
}

export default Home;
