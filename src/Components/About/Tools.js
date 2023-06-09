import React from 'react';
import '../About/Tools.css';

import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiIntellijidea

} from "react-icons/si";

import { DiEclipse  } from 'react-icons/di'

const Tools = () => {

    return (

        <div className='toolsContainer'>
            <h1 className='toolsTitle'> <span className='toolsClr'>Tools </span>I use</h1>
            <div className="techBoxes">
                <div className="box">
                    <SiLinux />
                </div>
                <div className="box">
                    <SiVisualstudiocode />
                </div>
                <div className="box">
                    <SiPostman />
                </div>
                <div className="box">
                    <SiHeroku />
                </div>
                <div className="box">
                    <SiVercel />
                </div>
                <div className="box">
                    < DiEclipse/>
                </div>
                <div className="box">
                    < SiIntellijidea />
                </div>
            </div>
        </div>
    )
}

export default Tools;
