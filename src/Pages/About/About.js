import React from 'react';
import '../About/About.css';
import aboutImg from '../../Components/Assets/about.png';
import { MdOutlineSchool } from "react-icons/md";
import Tech from '../../Components/Tech/Tech';
import Tools from '../../Components/Tool/Tools';
import Github from '../../Components/Github/Github';
import Footer from '../../Components/Footer/Footer';
import Particle from '../../Components/Particles/Particle'
import ScrollTop from '../../Components/ScrollTop/ScrollTop';
import { motion } from 'framer-motion';


const About = () => {


    return (

        <div className='aboutContainer'>

            <Particle />
            <ScrollTop />

            <div className="aboutInfo">

                <div className="aboutLeftInfo">
                    <div className="aboutLeftInfoTitle">
                        <motion.h1
                            initial={{ x: -50 }}
                            animate={{ x: 10 }}
                            transition={{
                                duration: 1,
                                delay: 0
                            }}

                        ><span className='flex items-center gap-3 border-b'><MdOutlineSchool /><p className='font-semibold'>Education</p> </span></motion.h1>
                    </div>

                    <div className="flex border py-5 rounded-md px-2 shadow-2xl border-gray-700 flex-col gap-4">
                        <li className='text-sm'>B.TECH in Computer Science ~ Nalanda Institute of Technology, Bhubaneswar (2021-2024)</li>

                        <li className='text-sm'>Diploma in Information Technology ~Government Polytechnic,Bhubaneswar(2018-2021) </li>

                        <li className='text-sm'>Schooling ~ Lingaraj HighSchool, Dangarpada,Khordha </li>
                    </div>
                </div>



                <div className="aboutRightInfo">
                    <img src={aboutImg} alt="Img" />
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
