import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';
import Particle from '../Particles/Particle';
import pdf from '../Assets/RakeshKumarParida.pdf';


const Resume = () => {


    return (

        <>
            <Particle />

            <NavBar />
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