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
                    <button><FontAwesomeIcon icon={faFileAlt} />more</button>
                </div>
                <div className='containerTxt2'>
                    <h2>So What's this all about?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias corporis officia enim pariatur ipsam, qui perspiciatis, distinctio aut saepe asperiores adipisci et temporibus quas laudantium tempora cupiditate nesciunt quos!
                        Voluptatem, fuga. Ipsam vel explicabo nulla neque perferendis nam delectus ab omnis et itaque, officiis assumenda reiciendis at! Quibusdam tempora libero illum dolorem iusto in officia, iure officiis sed illo?
                        Harum ullam officia vitae culpa at adipisci delectus eaque quo architecto quos dolores aspernatur accusantium impedit in odio recusandae, veniam placeat libero consequatur dicta perferendis? Doloribus laudantium sint debitis velit.
                        Explicabo earum itaque exercitationem nemo cupiditate eum, quibusdam optio voluptatem placeat soluta nulla perspiciatis est? Autem, doloremque laborum quisquam eaque ducimus asperiores sint est quibusdam laboriosam consequuntur iste dignissimos corrupti.
                        Atque omnis perferendis exercitationem cupiditate fuga quisquam. Quod rerum culpa deserunt optio ab repellat et! Aliquid dolores eius in quia saepe veniam vitae. Impedit ea sapiente neque, recusandae deleniti magni?
                        Eius nulla velit ab iure a repudiandae dolorum voluptatibus molestiae, veniam fugit, inventore, assumenda quos distinctio quasi in? Eum aspernatur veritatis repellat ea reprehenderit impedit esse quas, unde delectus suscipit.
                        Quaerat, facilis esse. <br /> <br /> Fuga perferendis harum dicta quas dolores quis reprehenderit corrupti aspernatur praesentium doloremque qui quo magni modi fugiat quaerat quidem, nostrum quasi sed eligendi adipisci porro consequuntur distinctio.</p>

                    <button><FontAwesomeIcon icon={faArrowAltCircleRight} /> Continue Reading</button>
                </div>

            </div>
        </>
    );
}

export default Body3;
