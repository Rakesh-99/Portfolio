import React from 'react';
import './Home2.css';
import ProfileSvg from '../Assets/avatar.svg';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Footer from '../Footer/Footer';


const Home2 = () => {

    return (

        <div>

            <div className="home2Container">
                <div className="leftContent">
                    <h1 className='leftHeading'>LET ME <span className='intro'>INTRODUCE</span> MYSELF</h1>
                    <h4 className='leftInfo'>I fell in love with programming and I have at least learnt something,I think..🤷‍♂️</h4>
                    <h4 className='leftInfo'>I am fluent in classics like <span className='clrTxt'>Java</span> & <span className='clrTxt'>Javascript </span> </h4>
                    <h4 className='leftInfo'>My field of Interest's are building new  <span className='clrTxt'> Web Technologies and Products  </span>and also in areas related to <span className='clrTxt'> Data Structure</span> & <span className='clrTxt'>Algorithm</span> </h4>
                    <h4 className='leftInfo'>Whenever possible, I also apply my passion for developing products with <span className='clrTxt'>Node.js</span> and <span className='clrTxt'> Modern Javascript Library</span> and  <span className='clrTxt'>Frameworks </span> like <span className='clrTxt'>React.js</span>  and <span className='clrTxt'> Next.js</span></h4>
                </div>

                <div className="rightContent">
                    <img src={ProfileSvg} alt="svgImg" />
                </div>
            </div>


                <div className="connect">
                    <div className="findMe">
                        <h1>FIND ME ON</h1>
                        <p>Feel free to <span className='clrTxt'>connect </span> with me</p>
                        <div className="socialList">
                            <ul className='socialList'>

                                <li className='socialIcons'>
                                    <a href="https://github.com/Rakesh-99"
                                        rel="noreferrer"
                                        target={'_blank'}>{<FaGithub />}

                                    </a>
                                </li>

                                <li className='socialIcons'>
                                    <a href="https://www.linkedin.com/in/rakesh-kumar-parida-b142081a9/"
                                        rel="noreferrer"
                                        target={'_blank'}>{<FaLinkedin />}
                                    </a>
                                </li>

                                <li className='socialIcons'>
                                    <a href="https://twitter.com/Rakesh69A"
                                        rel="noreferrer"
                                        target={'_blank'}>{<FaTwitter />}
                                    </a>
                                </li>

                                <li className='socialIcons'>
                                    <a href="https://www.instagram.com/rakesh_kumar_parida/"
                                        rel="noreferrer"
                                        target={'_blank'}>{<FaInstagram />}
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>

    )
}

export default Home2;
