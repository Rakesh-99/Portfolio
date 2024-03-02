import React from 'react';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';
import Particle from '../Particles/Particle';
import NavBar from '../NavBar/NavBar';
import resume from '../Assets/resumeImg.jpg';
import resumePdf from '../Assets/resume2-1.pdf'


const Resume = () => {


    return (

        <>
            <NavBar />
            <Particle />

            <div className="mainResumeContainer">
                <div className="resumeContainer">

                    <a href={resumePdf} target='_blank'>
                        <button className='downloadCV'> Download CV</button>
                    </a>
                </div>
                <div className="showResume ">
                    <img src={resume} alt="Resume" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resume;