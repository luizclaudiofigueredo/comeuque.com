import {
    Flex,
    Circle,
    Box,
    Image,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Button,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import Botao from './botao';
import Swal from 'sweetalert2'

  const handleShow = async(e) => {
    e.preventDefault() 
    Swal.fire({
        title: 'Quatro Queijos',
        text: 'ingredientes: provolone + mussarela + ',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
        color: '#ffffff',
        background: '#f58634',
        confirmButtonText: 'Fazer Pedido!',
        confirmButtonColor: '#f7180d', 
        showCloseButton: true,      
      })
  }
  
  const numberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
   
  function Rating() {
    return (
      <Box d="flex" alignItems="center">
          <Flex>
            <Button h={'36px'} borderRadius={25} fontSize={'sm'} bg={'#F53434'} color={'white'} px={8} onClick='#'>Fazer Pedido</Button>
          </Flex>
      </Box>
    );
  }
  
  export default function ProductAddToCart(data) {
    return (
      <Flex px={[4,10,30,50,50]} w='full' alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('#825321', 'gray.800')}
          maxW="650px"
          minW="300px"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
            src={process.env.MYSQL_URL + data.url_imagem}
            alt={`Picture of ${data.nome}`}
            roundedTop="lg"
            onClick={handleShow}
          />
  
          <Box p="6">
            <Flex mt="1" justifyContent="center" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                mb={4}
                color={'white'}
                lineHeight="tight"
                isTruncated>
                {data.nome}
              </Box>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Botao />
              <Box fontSize="2xl" color={useColorModeValue('white', 'white')}>
                { numberFormat(data.preco_venda) }
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }