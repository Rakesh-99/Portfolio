import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Footer/Footer';
import Particle from '../Particles/Particle';
import './Contact.css';
import { FcBusinessContact } from 'react-icons/fc';
import emailjs from '@emailjs/browser';
import ContactImage from '../Assets/contact.png';




const Contact = () => {

    const form = useRef();

    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });


    const changeHandle = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const submitHandle = (e) => {
        e.preventDefault();
        setError(validation(values));
        setIsSubmit(true);


        // user_email Js Config  :


    };

    const validation = (values) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const err = {};

        // user_name validation : 

        if (!values.user_name) {
            err.user_name = '*user_name is required';
        } else if (values.user_name.length < 2) {
            err.user_name = '*user_name can not be less than 2 char';
        } else if (values.user_name.length > 20) {
            err.user_name = '*user_name can not contain more than 20 char';
        };

        // user_email validation : 
        if (!values.user_email) {
            err.user_email = '*user_email field is required';
        } else if (!regex.test(values.user_email)) {
            err.user_email = '*Invalid user_email entered';
        };

        // message validation :

        if (!values.message) {
            err.message = '*message field is required';
        } else if (values.message.length < 20) {
            err.message = '*message field can not be less than 10 char';
        } else if (values.message.length > 300) {
            err.message = '*message field can not contain more than 300 char';
        };

        return err;

    };

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit === true) {
            console.log(values);

            emailjs.sendForm('service_f7gd1fx', 'template_5n08skl', form.current, 'eFn8ebkBYzQVKP219')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            setValues({
                user_name: '',
                user_email: '',
                message: ''
            })

        }
    }, [error])

    return (

        <>
            <Particle />


            {

                (Object.keys(error).length === 0 && isSubmit === true) ? <div className='toastNotifier'><span className='toastMsgContainer'>Message has been sent successfully</span></div> : (Object.keys(error).length !== 0 && isSubmit === true) ? <div className='toastNotifier'><span className='toastMsgContainerError'>Fill the respective fields first</span></div> : <></>

            }
            <div className='controller'>

                <div className='leftContent'>
                    <img className='contactImg' src={ContactImage} alt="conatcImg" />
                </div>

                <div className="rightContent">

                    <form action="" onSubmit={submitHandle} ref={form}>
                        <FcBusinessContact className='contactIcon' />
                        <input type="text" placeholder='Username' onChange={changeHandle} name="user_name" value={values.user_name} autoComplete='off' />
                        <span className='error'>{error.user_name}</span>
                        <input type="text" placeholder='Email' onChange={changeHandle} name="user_email" value={values.user_email} autoComplete='off' />
                        <span className='error'>{error.user_email}</span>
                        <input type="text" className='subject' placeholder='message' onChange={changeHandle} name='message' value={values.message} autoComplete='off' />
                        <span className='error'>{error.message}</span>
                        <button type='submit'>Send</button>
                    </form>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact;
