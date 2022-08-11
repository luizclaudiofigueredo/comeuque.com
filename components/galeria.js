import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { DARK_COLOR } from "../lib/constant";
import ProductAddToCart from "./produtos";
import 'slick-carousel/slick/slick-theme.css';

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
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,        
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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