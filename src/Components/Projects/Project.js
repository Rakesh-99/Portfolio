import React from 'react';
import ProjectCard from './ProjectCard';
import '../Projects/Project.css';
import { majorProject, miniProject } from './ProjectCardData';
import Footer from '../Footer/Footer';
import Particle from '../Particles/Particle';
import ScrollTop from '../ScrollTop/ScrollTop';

const Project = () => {


    return (
        <>
            <Particle />
            <ScrollTop />
            <div className='projectInfo'>
                <h1>See My Work</h1>
                <p className='mt-10 font-semibold'>Major Projects</p>

            </div>


            <div className="projectContainer">
                {

                    majorProject.map((value, index) => {


                        return (
                            <ProjectCard
                                key={index}
                                id={index}
                                imgSrc={value.imgSrc}
                                projectTitle={value.projectTitle}
                                aboutProject={value.aboutProject}
                                techUsed={value.techUsed}
                                url1={value.url1}
                                url2={value.url2}
                            />
                        )
                    })
                }
            </div>

            {/* Mini projects  */}

            <div style={{ background: '#10001f' }} className='text-center'>
                <p className=' font-semibold'>Mini Projects</p>
            </div>
            <div className="projectContainer">
                {
                    miniProject.map((value, index) => {
                        const { techUsed } = value;
                        console.log(techUsed);

                        return (
                            <ProjectCard
                                key={index}
                                id={index}
                                imgSrc={value.imgSrc}
                                projectTitle={value.projectTitle}
                                aboutProject={value.aboutProject}
                                techUsed={value.techUsed}
                                url1={value.url1}
                                url2={value.url2}
                            />
                        )
                    })
                }
            </div>




            <Footer />
        </>
    )
}

export default Project;
