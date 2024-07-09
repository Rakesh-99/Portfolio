import React from 'react';
import '../About/About.css';
import aboutImg from '../../Components/Assets/about.png';
import { FaRegHandPointRight } from 'react-icons/fa'
import Tech from '../../Components/Tech/Tech';
import Tools from '../../Components/Tool/Tools';
import Github from '../../Components/Github/Github';
import Footer from '../../Components/Footer/Footer';
import Particle from '../../Components/Particles/Particle'
import ScrollTop from '../../Components/ScrollTop/ScrollTop';
import NavBar from '../../Components/NavBar/NavBar';
import { motion } from 'framer-motion';


const About = () => {


    return (

        <div className='aboutContainer'>

            <NavBar />
            {/* <Particle /> */}
            <ScrollTop />

            <div className="aboutInfo">

                <div className="aboutLeftInfo">
                    <div className="aboutLeftInfoTitle">
                        <motion.h1
                            initial={{ x: -100 }}
                            animate={{ x: 10 }}
                            transition={{
                                duration: 1,
                                delay: 0
                            }}

                        >Know Who <span className='iAm'>Iam</span></motion.h1>
                    </div>

                    <h2 className='myInfo'>
                        Hi there, I am <span className='clr'>Rakesh</span> from <span className='clr'>Bhubaneswar,Odisha.</span>
                        I'm a dedicated web developer with a passion for crafting websites from scratch to completion. To me, creating a website is like editing a photo—every detail matters, and each element contributes to the overall picture. I thrive on designing intuitive and visually appealing user interfaces, meticulously arranging every pixel to achieve the perfect balance between form and function.
                        <br />
                        <span className='clr'>You could check my work in project section.</span>

                    </h2>

                    <h2 className='myInfo'>Apart from coding,some other activities that I love !</h2>

                    <div className="hobbiesList">
                        <span className='handIcons'> <FaRegHandPointRight /> <span className='hobby'>Playing Games</span> </span>
                        <span className='handIcons'> <FaRegHandPointRight /> <span className='hobby'>Riding Bikes</span> </span>
                        <span className='handIcons'> <FaRegHandPointRight /> <span className='hobby'>Travelling</span></span>
                    </div>

                    <div className="quote">
                        <p style={{ fontStyle: 'italic' }}>"Good software,like Wine, takes time"</p>
                        <span className='name'>~ Joel Spolsky </span>
                    </div>
                </div>

                <div className="aboutRightInfo">
                    <img src={aboutImg} alt="aboutImg" loading='lazy' fetchpriority='high' decoding='async' />
                </div>

            </div>
            <Tech />
            <div className='about-me'>
                <p style={{ color: '#fff' }}>
                    I am a <span className='colored-text'>Mern Stack developer</span> with a passion for creating <span className='colored-text'>beautiful</span> and <span className='colored-text'>user-friendly</span> websites. I have a strong understanding
                    of <span className='colored-text'> front-end development</span> and familiar with Backend technologies like <span className='colored-text'>Node</span>,<span className='colored-text'>Express</span> and <span className='colored-text'>MongoDB</span>. Additionally, I have
                    expertise in <span className='colored-text'>JWT Authentication</span> and creating <span className='colored-text'>REST APIS</span> with real time Database integration using<span className='colored-text'> MongoDB Atlas</span>.
                    I am experienced in deploying MERN Stack applications on platforms such as <span className='colored-text'>Vercel, Render</span> and <span className='colored-text'> Netlify</span>
                </p>

                <p style={{ color: '#fff' }}>
                    I am excited to put my skills to use in a professional setting. I am a <span>quick learner</span> and a <span>team player</span>, and I am
                    confident that I can be a valuable asset to any web development team. <br /> Thank You.
                </p>

            </div>
            <Tools />
            <Github />
            <Footer />
        </div>
    )
}

export default About;
