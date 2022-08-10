import React, { Component } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import HtmlParser from 'react-html-parser';
import { DARK_COLOR, PRIMARY_COLOR } from '../lib/constant';

export default class BlogList extends Component {
   render() {    
       const data = this.props.blogs;

       const BlogTags = (props) => {
        return (
          <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
              return (
                <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </HStack>
        );
      };
      
     
 
  return (
    <div>
    { data.map((d, index) => (
    <Container maxW={'7xl'} p="12" key={index}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  process.env.IMAGEM_URL + d.url_imagem
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={'radial(orange.600 1px, transparent 1px)'}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
          bg={PRIMARY_COLOR}
          borderRadius="lg"
          p={10}
          >
          <BlogTags tags={['ComêUquê', 'História']} />
          <Heading marginTop="1" color={DARK_COLOR}>
              {d.titulo}
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={'gray.700'}
            fontSize="md">
            {HtmlParser(d.descricao)}
          </Text>
        </Box>
      </Box>
    </Container>
    ))}
    </div>
)}}