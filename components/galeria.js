import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { DARK_COLOR } from "../lib/constant";
import ProductAddToCart from "./produtos";

export default class Galeria extends Component {
  render() {

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

       const width = this.props.width;
       const data = this.props.produtos;
       var settings = {
        dots: true,
        infinite: true,
        slidesToShow: Math.floor(width/300),
        slidesToScroll: 1,       
        autoplaySpeed: 3000,
      };

    return (
      <section id="cardapio">
      <Flex w={'full'} justify={'center'} align={'center'} alignItems={'center'} h={[20,20,20,40]}> 
        <Heading color={'#825221'}>Destaques</Heading>
      </Flex>
      <div style={{ margin: '20px' }}>
        <Slider {...settings}>
          { data.map((d) => (
            <Flex key={d.id}>
              <ProductAddToCart data={d} />
            </Flex>
          ))}
        </Slider>
      </div>
      </section>
    );
  }
}