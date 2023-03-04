import React from 'react';
import './PageNotFound.css';
import NavBar from '../NavBar/NavBar';

const PageNotFound = () => {

    return (
        <>
            <NavBar/>
            <div className='pageNotFound'>
                <div className="leftContent">
                    <span className='num404'>404 |</span>
                </div>
                <div className="rightContent">
                    <span className='info404'>Page not found</span>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
