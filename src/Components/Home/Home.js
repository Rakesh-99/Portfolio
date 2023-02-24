import React from 'react';
import NavBar from '../NavBar/NavBar';
import '../Home/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import homeImg from '../Assets/homeImg.png'
import Home2 from './Home2';



const Home = () => {


    return (

        <div className='homeContainer'>



            <NavBar />


            {/*-------------------TypeWriter----------------------------*/}
            <div className="wrapBox">

                <div className="typeWriterContainer">
                    <h1 style={{ color: '#fff' }}> Hi There! <span className='wave'>👋</span>
                        <span><h3> I'M<span className='name'>RAKESH KUMAR PARIDA</span> </h3></span>
                        <span>

                            <TypeWriterEffect
                                textStyle={{
                                    color: 'rgb(201, 98, 248)',
                                    fontWeight: 500,
                                    fontSize: '1.3em',
                                }}
                                startDelay={500}
                                cursorColor="rgb(201, 98, 248)"

                                multiText={[
                                    'Student',
                                    'Java Developer',
                                    'Mern Stack Developer'
                                ]}
                                multiTextDelay={2000}
                                typeSpeed={100}
                                multiTextLoop
                            />
                        </span>
                    </h1>
                </div>


                <div className="home-img-container">
                    <img src={homeImg} alt="homeImg" />
                </div>

            </div>

            <Home2 />

        </div>
    );
}

export default Home;
