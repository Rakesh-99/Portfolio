import React from 'react';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';
import Particle from '../Particles/Particle';
import NavBar from '../NavBar/NavBar';
import myResume from '../Assets/RakeshResume.pdf';
import resumeImg from '../Assets/RakeshKumarParidaCV.png'


const Resume = () => {


    return (

        <>
            <NavBar />
            <Particle />

            <div className="mainResumeContainer">
                <div className="resumeContainer">
                    <p>Download Resume</p>
                    <a href={myResume} target='_blank'>
                        <button> Download Resume</button>
                    </a>
                </div>
                <div className="showResume ">
                    <img src={resumeImg} alt="Resume" />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Resume;