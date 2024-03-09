import Carousel from 'react-bootstrap/Carousel';
import odo1 from '../assets/foto_odo1.jpg';
import odo2 from '../assets/foto_odo2.png';
import odo3 from '../assets/foto_odo3.png';
import kine1 from '../assets/kine1.jpg';

import React from 'react'

const Carrusel = () => {
  return (
    <Carousel fade>

        <Carousel.Item>
            <img src={odo1} width={500} height={350} />
         </Carousel.Item>

         <Carousel.Item>
            <img src={kine1}  width={500} height={350} />
        </Carousel.Item>

        <Carousel.Item>
            <img src={odo2}  width={500} height={350} />
           
        </Carousel.Item>

        <Carousel.Item>
            <img src={odo3}  width={500} height={350} />
        </Carousel.Item>


    </Carousel>
  )
}

export default Carrusel