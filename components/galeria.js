import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { DARK_COLOR } from "../lib/constant";
import ProductAddToCart from "./produtos";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: DARK_COLOR }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: DARK_COLOR }}
      onClick={onClick}
    />
  );
}

export default class Galeria extends Component {
  render() {    
       const width = this.props.width;
       const data = this.props.produtos;
       var settings = {
        dots: true,
        infinite: true,
        slidesToShow: Math.floor(width/300),
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,        
        autoplaySpeed: 3000,
        cssEase: "linear",
      };

    return (
      <section id="cardapio">
      <Flex w={'full'} justify={'center'} align={'center'} alignItems={'center'} h={[20,20,20,40]}> 
        <Heading color={'#825221'}>Destaques</Heading>
      </Flex>
      <div style={{ margin: '20px' }}>
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