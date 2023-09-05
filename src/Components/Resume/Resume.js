import React from 'react';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';
import Particle from '../Particles/Particle';
import pdf from '../Assets/Rakesh Kumar Parida.pdf';
import NavBar from '../NavBar/NavBar';


const Resume = () => {


    return (

        <>
            <NavBar />
            <Particle />

            <div className="mainResumeContainer">
                <div className="resumeContainer">
                    <p>Download Resume</p>
                    <a href={pdf} target='_blank'>
                        <button>Resume</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resume;