import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { BsPerson } from "react-icons/bs";
import { AiOutlineFundProjectionScreen, AiOutlineHome } from "react-icons/ai";
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai';
import { GoGitBranch } from 'react-icons/go';

const NavBar = () => {

    const [click, setClick] = useState(true);

    const clickHandler = () => {
        setClick(!click);

    }
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'navContainer bg' : 'navContainer'}>


            <Link to={'/'}>
                <h2>Rakesh</h2>
            </Link>

            <ul className={click ? 'navUl active' : 'navUl'}>
                <li>
                    <span className='reactNavIcons'> <AiOutlineHome /> </span>
                    <Link to={'/'}>Home</Link>
                </li>

                <li>
                    <span className='reactNavIcons'> <BsPerson /> </span>
                    <Link to={'/about'}>About</Link>
                </li>

                <li>
                    <span className='reactNavIcons'> <AiOutlineFundProjectionScreen /> </span>
                    <Link to={'/project'}>Project</Link>
                </li>

                <li>
                    <span className='reactNavIcons'> <MdOutlineLibraryBooks /> </span>
                    <Link to={'/resume'}>Resume</Link>
                </li>

                <li>
                    <span className='reactNavIcons'> <FaBlog /> </span>
                    <Link to={'/blog'}>Blog</Link>
                </li>

                <li>
                    <span className='reactNavIcons gitBranch'>
                        <Link to={'https://github.com/Rakesh-99/React-Personal-Portfolio-'}> <GoGitBranch/> <AiFillStar/> </Link>
                    </span>
                </li>
            </ul>

            <div className="hamBurger" onClick={clickHandler}>
                {
                    click ? <FaBars size={20} style={{ color: '#fff' }} />
                        : <FaTimes size={20} style={{ color: '#fff' }} />
                }
            </div>

        </div>
    )
}

export default NavBar;