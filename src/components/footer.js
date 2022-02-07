import React from 'react';
import '../styles/footer.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faRegistered } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <div className='containerFooter'>
                <div className='classFoot ft1'>
                    <h3>Radom Stuff</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti debitis sequi alias! Quo aliquid quia veniam minus sequi qui sint et!</p>
                </div>
                <div className='classFoot ft2'>
                    <h3>Radom Stuff</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium atque quasi ipsum quam quas, exercitationem aliquid totam, ipsa </p>
                </div>
                <div className='classFoot ft3'>
                    <h3>Radom Stuff</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta quaerat quo ea. Ex, eos. Numquam reprehenderit, aliquam officiis fugiat</p>
                </div>
                <div className='classFoot ft4'>
                    <h3>Contact us</h3>
                    <a href=""><i className='red1'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red2'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red3'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red4'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red5'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <p>1234 fFictional road <br /> naNasville.TN 0000  </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
