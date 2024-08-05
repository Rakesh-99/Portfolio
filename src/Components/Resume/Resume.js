import React from 'react';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';
import Particle from '../Particles/Particle';
import RakeshResumePdf from '../Assets/RakeshUpdatedResume.pdf';
import RakeshResumeImg from '../Assets/RakeshUpdatedResume.png';



const Resume = () => {



    return (

        <>
            <Particle />

            <div className="mainResumeContainer">
                <div className="resumeContainer">
                    <button>
                        <a href={RakeshResumePdf} download='RakeshResumePdf'>Download CV</a>
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