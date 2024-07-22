import React from 'react';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';
import Particle from '../Particles/Particle';
import NavBar from '../NavBar/NavBar';
import RakeshResumePdf from '../Assets/RakeshResume.pdf';
import RakeshResumeImg from '../Assets/RakeshResume.png';



const Resume = () => {


    const click = () => {
        console.log('Hello');
    }


    return (

        <>
            <NavBar />
            <Particle />

            <div className="mainResumeContainer">
                <div className="resumeContainer">
                    <button>
                        <a style={{ textDecoration: "none", color: "white" }} href={RakeshResumePdf} download='RakeshResumePdf' onClick={click}>Download CV</a>
                    </button>
                </div>
                <div className="showResume ">
                    <img src={RakeshResumeImg} alt="Resume" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resume;