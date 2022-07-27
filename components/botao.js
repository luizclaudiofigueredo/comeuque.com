import { AddIcon } from '@chakra-ui/icons'
import { Button, Icon, chakra } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi';
import React from 'react'

function Botao() {
  return (
    <Button
        variant={'solid'}
        colorScheme={'red'}
        size={'sm'}
        mr={4}
        >
        <chakra.a href={'#'} display={'flex'}>
            <Icon as={FiShoppingCart} h={5} w={5} mx={2} alignSelf={'center'} />
        </chakra.a>            
        Fazer Pedido
    </Button>
  )
}

export default Botao