import React from 'react'
import '../Projects/ProjectCard.css';
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {

    return (

        <div className='projectCard'>
            <div className="card">
                <div className="imgContainer">
                    <img src={props.imgSrc} alt="" className='project1Img' />
                </div>
                <h3 className='projectTitle'>{props.projectTitle}</h3>
                <p className='aboutProject'>{props.aboutProject}</p>
                <div className="navLinks">
                    <NavLink to={props.url1}>Preview</NavLink>
                    <NavLink to={props.url2}>Source</NavLink>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;
