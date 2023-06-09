import React from 'react';
import '../About/Tech.css';

import {
    DiJava,
    DiJavascript1,
    DiReact,
    DiJqueryLogo,
    DiNodejs,  
    DiMongodb,
    DiGit,
    DiGithub,
    DiMysql,
    
} from 'react-icons/di';

import {
    SiFirebase,
    SiExpress,
    SiHtml5,
    SiCss3
} from 'react-icons/si';

import { TbBrandBootstrap } from 'react-icons/tb'


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
                    <SiHtml5 />
                </div>
                <div className="box">
                    <SiCss3 />
                </div>
                <div className="box">
                    <TbBrandBootstrap />
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
                    <SiExpress/>
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
