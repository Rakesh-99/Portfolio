import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import '../Resume/Resume.css';


const Resume = () => {

    return (

        <>
            <NavBar />
            <div className="mainResumeContainer">
            <div className="resumeContainer">
                <p>Download Resume</p>
                <a href="../Assests/RakeshKumarParidaResume.pdf" download={'RakeshKumarParidaResume.pdf'}>
                    <button>Resume</button>
                </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resume;