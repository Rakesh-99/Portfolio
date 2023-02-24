import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProjectCard from './ProjectCard';
import '../Projects/Project.css';
import ProjectCardData from './ProjectCardData';
import Footer from '../Footer/Footer';

const Project = () => {

    return (
        <>
            <NavBar />

            <div className='projectInfo'>
                <h1>Projects</h1>
                <p>Here are a few Projects I'have worked on recently</p>
            </div>

            <div className="projectContainer">
                {

                    ProjectCardData.map((value, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                id={index}
                                imgSrc={value.imgSrc}
                                projectTitle={value.projectTitle}
                                aboutProject={value.aboutProject}
                                url1={value.url1}
                                url2={value.url2}
                            />
                        )
                    })
                }
            </div>
            <Footer/>
        </>
    )
}

export default Project;
