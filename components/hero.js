import { Image, Flex, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';

export default class Hero extends Component {
  render() {
       const images = this.props.images;
       var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 3600,
        cssEase: "linear",
      };

    return (
      <div>
        <Slider {...settings}>
          { images.map((d) => (
            <Flex key={d.id}>
              <Image src={process.env.MYSQL_URL + d.my_url_slide} alt={`Picture of ${d.titulo}`} w={'full'} marginTop={'95px'} />
            </Flex>
          ))}
        </Slider>
      </div>
    );
  }
}