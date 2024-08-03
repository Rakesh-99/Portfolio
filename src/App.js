import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Project from './Components/Projects/Project'
import Resume from './Components/Resume/Resume';
import PageNotFound from './Pages/404Page/PageNotFound';
import Contact from '../src/Pages/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import './Style/App.css';


const App = () => {

    return (
        <div className='appContainer'>

            <Router>
                <NavBar />
                <ScrollTop />

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Project' element={<Project />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
