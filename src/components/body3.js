import React from 'react';
import  '../styles/bodys.css';



import Img4 from '../img/pic03.jpg';
import Img5 from '../img/pic05.jpg';
import Img6 from '../img/pic06.jpg';
import Img7 from '../img/pic07.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'

function Body3() {
    return (
        <>
            <div className='container3'>
                <div className='containerImg' >
                    <h3>Interesting</h3>
                    <div className='grid-container'>
                        <img className='imgColor img1' src={Img4} alt="" />
                        <img className='imgColor img2' src={Img5} alt="" />
                        <img className='imgColor img3' src={Img6} alt="" />
                        <img className='imgColor img4' src={Img7} alt="" />
                    </div>
                    <button className='btnImg'><i className='book'><FontAwesomeIcon icon={faFileAlt}/></i> more</button>
                </div>
                <div className='containerTxt2'>
                    <h2>So What's this all about?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias corporis officia enim pariatur ipsam, qui perspiciatis, distinctio aut saepe asperiores adipisci et temporibus quas laudantium tempora cupiditate nesciunt quos!
                        Voluptatem, fuga. Ipsam vel explicabo officiis assumenda reiciendis at! Quibusdam tempora libero illum dolorem iusto in officia, iure officiis sed illo?
                        exercitationem cupiditate fuga quisquam. Quod rerum culpa deserunt optio ab repellat et! Aliquid dolores eius in quia saepe veniam vitae. Impedit ea sapiente neque, recusandae deleniti magni?
                        Eius nulla velit ab iure a repudiandae dolorum voluptatibus molestiae, veniam fugit, inventore, assumenda quos distinctio quasi in? Eum aspernatur veritatis repellat ea reprehenderit impedit esse quas, unde delectus suscipit.
                        Quaerat, facilis esse.  Fuga perferendis harum dicta quas dolores quis reprehenderit corrupti aspernatur praesentium doloremque qui quo magni modi fugiat quaerat quidem, nostrum quasi sed eligendi adipisci porro consequuntur distinctio.</p>

                    <button className='btnImg2'><i className='arrow'><FontAwesomeIcon icon={faArrowAltCircleRight} /></i> Continue Reading</button>
                </div>

            </div>
        </>
    );
}

export default Body3;
