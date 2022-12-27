import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
  import image from '../images/img1.jpg';
  import image3 from '../images/img3.jpg';
  import image4 from '../images/img4.jpg';
  

function Crousel() {
  return (
    <>    <div className='flex-container'>
              <div className="flex1">
              <Carousel showStatus={false} showThumbs={false}>

             <div className='ImageTop'>
              <img src={image} alt="BigCo Inc. logo"/>
                </div>
            <div className='ImageTop'>
         <img src={image3} alt="BigCo Inc. logo"/>
          </div>
           <div>
          <img src={image4} alt="BigCo Inc. logo"/>
             </div>

                 </Carousel>
              </div>
             <div className="flex2" >
              
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate culpa ut, omnis nulla minus inventore doloremque rem veniam enim, sequi, natus ullam magnam suscipit ipsa. Reprehenderit fuga perspiciatis nam tempora!</p>
             </div>
            </div>

    </>
  )
}

export default Crousel
