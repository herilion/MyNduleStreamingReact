import React from 'react';
import '../styles/footer.css';
import play from '../assets/play.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerLeft">
                <p>Album and song detail</p>
            </div>
            <div className="footerCenter">
                <img src={play} alt="" />
            </div>
            <div className="footerRigth">
                <p>volume controls</p>
            </div>
        </div>
    );
}

export default Footer;