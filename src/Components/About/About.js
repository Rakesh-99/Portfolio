import React from 'react';
import NavBar from '../NavBar/NavBar'
import '../About/About.css';
import aboutImg from '../Assets/about.png'
import { FaRegHandPointRight } from 'react-icons/fa'
import Tech from './Tech';
import Tools from './Tools'
import Github from './Github';
import Footer from '../Footer/Footer'

const About = () => (

    <div className='aboutContainer'>
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
                    <p>"Strive to build things that make a difference!"</p>
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

export default About;
