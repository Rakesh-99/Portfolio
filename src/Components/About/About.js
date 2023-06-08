import React from 'react';
import NavBar from '../NavBar/NavBar'
import '../About/About.css';
import aboutImg from '../Assets/about.png'
import { FaRegHandPointRight } from 'react-icons/fa'
import Tech from './Tech';
import Tools from './Tools'
import Github from './Github';
import Footer from '../Footer/Footer'
import Particle from '../Particles/Particle';




const About = () => {

    //  React ts-particles :




    return (

        <div className='aboutContainer'>

            <Particle />

            <NavBar />

            <div className="aboutInfo">

                <div className="aboutLeftInfo">
                    <div className="aboutLeftInfoTitle">
                        <h1>Know Who <span className='iAm'>Iam</span></h1>
                    </div>

                    <h2 className='myInfo'>
                        Hi Everyone, I am <span className='clr'>Rakesh Kumar Parida</span> from <span className='clr'>Bhubaneswar,India.</span>.
                        I am a student of 3rd year pursuing B.TECH in Computer Science in Nalanda Institute of Technology, Bhubaneswar.
                    </h2>

                    <h2 className='myInfo'>Apart from coding,some other activities that I love !</h2>

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
            <div className='about-me'>
                <p style={{ color: '#fff' }}>
                    I am a <span className='colored-text'> front-end developer</span> with a passion for building <span className='colored-text'>beautiful</span> and <span className='colored-text'>user friendly</span> websites. I have a strong understanding
                    of <span className='colored-text'> front-end development</span> and familiar with Backend technologies like <span className='colored-text'>Node</span>,<span className='colored-text'>Express</span> and <span className='colored-text'>MongoDB</span>. Apart from that I have
                    knowledge of <span className='colored-text'>JWT Authentication</span> and creating <span className='colored-text'>REST APIS</span> with real time Database which is <span className='colored-text'> MongoDB Atlas</span>.
                    The Integration, deployment of MERN Stack application in platforms like <span className='colored-text'>Vercel</span> and <span className='colored-text'> Netlify</span>, and so on.
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
