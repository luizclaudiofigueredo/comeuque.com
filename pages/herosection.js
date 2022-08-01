import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from '../components/Slideshow';

const slideImages = [
  {
    url: 'https://bitelapizza.com/content/uploads/2018/06/bitela.png',
    caption: 'Slide 1'
  },
  {
    url: 'https://bitelapizza.com/content/uploads/2018/06/bitela.png',
    caption: 'Slide 2'
  },
  {
    url: 'https://bitelapizza.com/content/uploads/2018/06/bitela.png',
    caption: 'Slide 3'
  },
];

const HeroSection = (props) => {
    return (
      <div className="slide-container">
        <Slideshow images={props.images} />
      </div>
    )
}

export default HeroSection;