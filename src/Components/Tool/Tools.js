import React from 'react';
import './Tools.css';

import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiIntellijidea,
    SiNetlify,
    SiRailway
} from "react-icons/si";


import { DiEclipse } from 'react-icons/di'

const Tools = () => {

    return (

        <div className='toolsContainer'>
            <h1 className='toolsTitle'> <span className='toolsClr'>Tools </span>I use</h1>
            <div className="techBoxes">
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiLinux />
                    <span style={{ fontSize: '1rem' }}>Linux</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiVisualstudiocode />
                    <span style={{ fontSize: '1rem' }}>VsCode</span>
                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiPostman />
                    <span style={{ fontSize: '1rem' }}>Postman</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiHeroku />
                    <span style={{ fontSize: '1rem' }}>Heroku</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiVercel />
                    <span style={{ fontSize: '1rem' }}>Vercel</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiNetlify />
                    <span style={{ fontSize: '1rem' }}>Netlify</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SiRailway />
                    <span style={{ fontSize: '1rem' }}>Railway Hosting</span>

                </div>

                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    < DiEclipse />
                    <span style={{ fontSize: '1rem' }}>Eclipse</span>

                </div>
                <div className="box" style={{ display: 'flex', flexDirection: 'column' }}>
                    < SiIntellijidea />
                    <span style={{ fontSize: '1rem' }}>Intellij</span>

                </div>
            </div>
        </div>
    )
}

export default Tools;
