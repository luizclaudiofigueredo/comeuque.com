import {
  Flex,
  Box,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

import Botao from './botao';
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../redux/empresaSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProductAddToCart(props) {

  const {delivery} = useSelector(selectDelivery)

  const nome = useState(props.data.nome)
  const descricao = useState(props.data.descricao)
  const [imagem, setImagem] = useState()

  useEffect(()=> {
    setTimeout(() => setImagem(process.env.IMAGEM_URL + props.data.url_imagem), 1000)
  },[imagem])

  function handleShowClick(nome_produto, descricao_produto, delivery_link) {
      Swal.fire({
          title: nome_produto,
          html: descricao_produto,
          imageUrl: imagem,
          imageWidth: 300,
          imageHeight: 300,
          imageAlt: 'Custom image',
          color: '#ffffff',
          background: '#f58634',
          confirmButtonText: 'Fazer Pedido!',
          confirmButtonColor: '#f7180d', 
          showCloseButton: true,      
        }).then((result) => {
          if (result.value) {
            window.location.href = delivery_link
          }
        })
  }
  
  return ( 
    <Flex px={[4,10,30,50,50]} w='full' alignItems="center" justifyContent="center">
       <Box
        bg={useColorModeValue('#825321', 'gray.800')}
        maxW="650px"
        minW="280px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">

        <LazyLoadImage
        alt={nome}
        src={imagem} // use normal <img> attributes as props
        max-width={'600px'}
        min-width={'280px'}
        effect="blur"
        onClick={()=>handleShowClick(props.data.nome, props.data.descricao,delivery)}
        cursor={'pointer'} />

        <Box p="6">
        
          <Flex mt="1" justifyContent="center" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              mb={4}
              color={'white'}
              lineHeight="tight">
              {nome}
            </Box>
          </Flex>       

          <Flex justifyContent="space-between" alignContent="center">
            <Botao />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}