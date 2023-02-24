import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import '../Footer/Footer.css';
import '../Footer/FooterResp.css';


const Footer = () => {
    return (
        <div className="footerSection">
            <p>Designed and Developed by Rakesh Kumar Parida</p>
            <p>Copyright © 2023 Rakesh</p>
            <ul className="footerIcons">

                <li>
                    <a href="https://github.com/Rakesh-99"
                        target={'_blank'}
                        rel="noreferrer"
                    >{<FaGithub />}</a>                 
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/rakesh-kumar-parida-b142081a9/"
                        target={'_blank'}
                        rel="noreferrer"
                    >{<FaLinkedin />}</a>
                </li>

                <li>
                    <a href="https://twitter.com/Rakesh69A"
                        target={'_blank'}
                        rel="noreferrer"
                    >{<FaTwitter />}</a>
                </li>

                <li>
                    <a href="https://www.instagram.com/rakesh_kumar_parida/"
                        target={'_blank'}
                        rel="noreferrer"
                    >{<FaInstagram />}</a>
                </li>
            </ul>
        </div>
    );
};
export default Footer;