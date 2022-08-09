import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import ProductAddToCart from "./produtos";

export default class Galeria extends Component {
  render() {    
       const width = this.props.width;
       const data = this.props.produtos;
       var settings = {
        dots: true,
        infinite: true,
        slidesToShow: Math.floor(width/300),
        slidesToScroll: 1,
        //autoplay: true,
        //speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };

    return (
      <section id="cardapio">
      <Flex w={'full'} justify={'center'} align={'center'} alignItems={'center'} h={[20,20,20,40]}> 
        <Heading color={'#825221'}>Destaques</Heading>
      </Flex>
      <div>
        <Slider {...settings}>
          { data.map((d, index) => (
            <div key={index}>
              <ProductAddToCart data={d} />
            </div>
          ))}
        </Slider>
      </div>
      </section>
    );
  }
}