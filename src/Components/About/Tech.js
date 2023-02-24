import React from 'react';
import '../About/Tech.css';

import {
    DiReact,
    DiJava,
    DiJavascript1,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiGithub,
    DiMysql,
    DiJqueryLogo,
} from 'react-icons/di';

import {
    SiFirebase
} from 'react-icons/si';


const Tech = () => {

    return (
        <div className='techContainer'>
            <h1 className='techTitle'>
                Professional <span className='skillclr'>Skillset</span>
            </h1>

            <div className="techBoxes">
                <div className="box">
                    <DiJava />
                </div>
                <div className="box">
                    <DiJavascript1 />
                </div>
                <div className="box">
                    <DiReact />
                </div>
                <div className="box">
                    <DiMongodb />
                </div>
                <div className="box">
                    <DiNodejs />
                </div>
                <div className="box">
                    <DiGit />
                </div>
                <div className="box">
                    <SiFirebase />
                </div>
                <div className="box">
                    <DiMysql />
                </div>
                <div className="box">
                    <DiJqueryLogo />
                </div>
                <div className="box">
                    <DiGithub />
                </div>
            </div>

        </div>
    )
}

export default Tech
