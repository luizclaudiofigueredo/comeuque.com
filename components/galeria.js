import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import ProductAddToCart from "./produtos";

const data_old = [
{
  id: 1,
  isNew: true,
  imageURL:
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
  nome: 'Quatro Queijos',
  preco: 28.0,
  rating: 4.2,
  numReviews: 18,
},
{
  id: 2,
  isNew: true,
  imageURL:
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
  nome: 'Calabresa',
  preco: 28.0,
  rating: 4.2,
  numReviews: 18,
},
{
  id: 3,
  isNew: true,
  imageURL:
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
  nome: 'Portuguesa',
  preco: 28.0,
  rating: 4.2,
  numReviews: 18,
},
{
  id: 4,
  isNew: true,
  imageURL:
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
  nome: 'Atum',
  preco: 36.0,
  rating: 4.2,
  numReviews: 18,
},
{
  id: 5,
  isNew: true,
  imageURL:
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
  nome: 'Cheddar',
  preco: 28.0,
  rating: 4.2,
  numReviews: 18,
},
{
  id: 6,
  isNew: true,
  imageURL:
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
  nome: 'Banana com Canela',
  preco: 28.0,
  rating: 4.2,
  numReviews: 18,
},
];

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
          { data.map((d) => (
            <Flex key={d.id}>
              <ProductAddToCart {...d}/>
            </Flex>
          ))}
        </Slider>
      </div>
      </section>
    );
  }
}