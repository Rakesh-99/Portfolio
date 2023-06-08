import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
// import './Contact.css';
import Particle from '../Particles/Particle';
import './Contact.css';
import { FcBusinessContact } from 'react-icons/fc';



const Contact = () => {

    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [values, setValues] = useState({
        username: '',
        email: '',
        subject: ''
    });


    const changeHandle = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const submitHandle = (e) => {
        e.preventDefault();
        setError(validation(values));
        setIsSubmit(true);
    };

    const validation = (values) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const err = {};

        // Username validation : 

        if (!values.username) {
            err.username = '*Username is required';
        } else if (values.username.length < 2) {
            err.username = '*Username can not be less than 2 char';
        } else if (values.username.length > 20) {
            err.username = '*Username can not contain more than 20 char';
        };

        // Email validation : 
        if (!values.email) {
            err.email = '*Email field is required';
        } else if (!regex.test(values.email)) {
            err.email = '*Invalid email entered';
        };

        // Subject validation :

        if (!values.subject) {
            err.subject = '*Subject field is required';
        } else if (values.subject.length < 20) {
            err.subject = '*Subject field can not be less than 10 char';
        } else if (values.subject.length > 300) {
            err.subject = '*Subject field can not contain more than 300 char';
        };

        return err;

    };

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit === true) {
            console.log(values);
            setValues({
                username: '',
                email: '',
                subject: ''
            })
        }
    }, [error])

    return (

        <>
            <div className="contactContainer">
                <Particle />
                <NavBar />
                <div className="contact-info">
                    {

                        (Object.keys(error).length === 0 && isSubmit === true) ? <div className='toastNotifier'><span className='toastMsgContainer'>Message has been sent Successfully</span></div> : (Object.keys(error).length !== 0 && isSubmit === true) ? <div className='toastNotifier'><span className='toastMsgContainerError'>Filled the respective field first</span></div> : <></>

                    }
                    
                    <div className="contact-title">
                        <h1>Let's have a conversation</h1>
                    </div>
                    <div className="inputContainer">

                        <form action="" onSubmit={submitHandle}>
                            <FcBusinessContact className='contactIcon' />
                            <input type="text" placeholder='Name' onChange={changeHandle} name='username' value={values.username} autoComplete='off' />
                            <span className='error'>{error.username}</span>
                            <input type="text" placeholder='Email' onChange={changeHandle} name='email' value={values.email} autoComplete='off' />
                            <span className='error'>{error.email}</span>
                            <input type="text" className='subject' placeholder='Subject' onChange={changeHandle} name='subject' value={values.subject} autoComplete='off' />
                            <span className='error'>{error.subject}</span>
                            <button type='submit'>Send</button>
                        </form>

                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Contact;
