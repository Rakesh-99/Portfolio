import React from 'react';
import '../Home/Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import homeImg from '../Assets/homeImg.png'
import Home2 from './Home2';
import Particle from '../Particles/Particle';



const Home = () => {


    return (

        <div className='homeContainer'>

            <Particle />

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
                                startDelay={100}
                                cursorColor="rgb(201, 98, 248)"

                                multiText={[
                                    'Student',
                                    'Front-end Developer',

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
