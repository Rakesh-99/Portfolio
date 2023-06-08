import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
// import './Contact.css';
import Particle from '../Particles/Particle';
import './Contact.css';
import { FcBusinessContact } from 'react-icons/fc';



const Contact = () => {


    const submitHandle = (e) => {
        e.preventDefault();
    }

    return (

        <>
            <div className="contactContainer">
                <Particle />

                <NavBar />



                <div className="contact-info">
                    <div className="contact-title">
                        <h1>Let's have a conversation</h1>
                    </div>
                    <div className="inputContainer">

                        <form action="" onSubmit={submitHandle}>
                            <FcBusinessContact className='contactIcon' />
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                            <input type="text" className='subject' placeholder='Subject' />
                            <button>Send</button>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default Contact;
