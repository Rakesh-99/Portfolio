import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import './Github.css';

const Github = () => {
    return (
        <div className='githubContainer'>
            <h1 className='githubTitl'>Days I <span className='clr'>Code</span></h1>
            <GitHubCalendar
                username="Rakesh-99"
                blockSize={15}
                color="#c084f5"
                fontSize={16}
            />
        </div>
    )
}

export default Github
