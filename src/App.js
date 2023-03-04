import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Resume from './Components/Resume/Resume';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact'
import PageNotFound from './Components/404Page/PageNotFound';

import './Style/App.css';


const App = () => {

    return (
        <div className='appContainer'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Project' element={<Project />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
