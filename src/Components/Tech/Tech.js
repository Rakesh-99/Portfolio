import React from 'react';
import '../Tech/Tech.css';

import {
    DiJava,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
} from 'react-icons/di';

import {
    SiFirebase,
    SiExpress,
    SiHtml5,
    SiCss3
} from 'react-icons/si';

import { TbBrandTailwind } from 'react-icons/tb'


const Tech = () => {

    return (
        <div className='techContainer'>
            <h1 className='techTitle'>
                Professional <span className='skillclr'>Skillset</span>
            </h1>

            <div className="techBoxes">
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DiJava />
                    <span style={{ fontSize: '1rem' }}>Core Java</span>
                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiHtml5 />
                    <span style={{ fontSize: '1rem' }}>HTML5</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiCss3 />
                    <span style={{ fontSize: '1rem' }}>CSS3</span>

                </div>

                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <TbBrandTailwind />
                    <span style={{ fontSize: '1rem' }}>Tailwind</span>

                </div>

                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DiJavascript1 />
                    <span style={{ fontSize: '1rem' }}>JavaScript</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DiReact />
                    <span style={{ fontSize: '1rem' }}>React</span>

                </div>

                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DiNodejs />
                    <span style={{ fontSize: '1rem' }}>NodeJS</span>

                </div>

                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiExpress />
                    <span style={{ fontSize: '1rem' }}>ExpressJS</span>

                </div>

                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DiMongodb />
                    <span style={{ fontSize: '1rem' }}>MongoDB</span>

                </div>


                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DiGit />
                    <span style={{ fontSize: '1rem' }}>Git & Github</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiFirebase />
                    <span style={{ fontSize: '1rem' }}>Firebase</span>
                </div>

            </div>

        </div>
    )
}

export default Tech
