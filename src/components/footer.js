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
                    <p> <u>  Lorem ipsum, dolor sit amet dasda <br />
                        <br />
                        consectetur adipisicing elits<br />
                        <br />
                        Corrupti debitis sequi alias! <br />
                        <br />
                    </u></p>
                </div>
                <div className='classFoot ft2'>
                    <h3>Radom Stuff</h3>
                    <p> <u>  Lorem ipsum, dolor sit amet dasda <br />
                        <br />
                        consectetur adipisicing elits<br />
                        <br />
                        Corrupti debitis sequi alias! <br />
                        <br />
                    </u></p>
                </div>
                <div className='classFoot ft3'>
                    <h3>Radom Stuff</h3>
                    <p> <u>  Lorem ipsum, dolor sit amet dasda <br />
                        <br />
                        consectetur adipisicing elits<br />
                        <br />
                        Corrupti debitis sequi alias! <br />
                        <br />
                    </u></p>
                </div>
                <div className='classFoot ft4'>
                    <h3>Contact us</h3>
                    <a href=""><i className='red1 red'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red2 red'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red3 red'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red4 red'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <a href=""><i className='red5 red'><FontAwesomeIcon icon={faRegistered} /></i> </a>
                    <p>1234 fFictional road <br /> 
                    <br />
                    naNasville.TN 0000  </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
