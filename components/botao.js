import { AddIcon } from '@chakra-ui/icons'
import { Button, Icon, chakra } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi';
import React from 'react'
import Modal from './modal';
import { LIGHT_COLOR } from '../lib/constant';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function Botao(props) {

  const {delivery} = useSelector(state => state.empresa)

  return (
    <Link href={delivery}>
      <Button
          display={'flex'}
          variant={'solid'}
          bg={props.ColorBackground || 'red'}
          color={'white'}
          size={'sm'}
          mr={4}
          w={'full'}
          h={props.height || 35}
          py={props.paddingY || 0}
          mt={props.marginTop || 0}
          _hover={{bg: '#9d0008', color: 'white'}}
          onClick={Modal('Modal', '<div>Hello World</div>', false, true)}
          >
          <chakra.a href={'#'} >
              <Icon as={props.Icon ||FiShoppingCart} h={4} w={4} mx={2} alignSelf={'center'} />
          </chakra.a>            
          {props.title || "Fazer Pedido"}
      </Button>
    </Link>
  )
}

export default Botao