import React from 'react'
import '../Projects/ProjectCard.css';
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {


    return (

        <div className='projectCard'>
            <div className="card">
                <div className="imgContainer">
                    <img src={props.imgSrc} alt="projectImage" className='project1Img' loading='lazy' decoding='async' fetchpriority='high' />
                </div>
                <h3 className='projectTitle'>{props.projectTitle}</h3>
                <p className='aboutProject'>{props.aboutProject}</p>

                <div className="flex flex-col border w-full my-5 border-gray-700 py-2 mx-2 justify-center items-center ">
                    <span className='font-bold text-sm'>Tech used : </span>
                    <p className='text-sm text-center'>{props.techUsed}</p>
                </div>

                <div className="navLinks">
                    {
                        props.url1 && <NavLink to={props.url1}>Live</NavLink>
                    }
                    <NavLink to={props.url2}>Source</NavLink>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;
