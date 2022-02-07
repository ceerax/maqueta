import React from 'react';
import '../styles/bodys.css';

import Img1 from '../img/img1.jpeg';
import Img2 from '../img/img2.jpg';
import Img3 from '../img/img3.jpg';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faQuestionCircle ,faFileAlt } from '@fortawesome/free-solid-svg-icons'


function Bodycs() {
    return (
        <>
            <div className='container-principal'>
                <div className='container'>
                    <div className='container-txt'>
                        <h2>HI THIS IS LOREM.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Molestiae a cum, maxime aspernatur dignissimos </p>
                    </div>
                    <div className='container-buton' >
                        <button className='buton-lets-go'> OK let's go <span className='arrow'><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></button>
                        <button className='buton-info'>More info <span><FontAwesomeIcon icon={faQuestionCircle} /></span></button>

                    </div>
                </div>
            </div>

            <div className='container-cards'>
                <div className="card">
                    <img c src={Img1} alt="" />
                    <h3> Dolor sit amet</h3>
                    <div className="container2">
                        <h4><b>mybe here as well </b></h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img c src={Img2} alt="" />
                    <h3> Dolor sit amet</h3>
                    <div className="container2">
                        <h4><b>This is also an interesting</b></h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam nihil mollitia molestias voluptatibus </p>
                    </div>
                </div>
                <div className="card">
                    <img c src={Img3} alt="" />
                    <h3> Dolor sit amet</h3>
                    <div className="container2">
                        <h4><b>John Doe</b></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vel vero nemo quos ipsum, optio distinctio blanditiis </p>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default Bodycs