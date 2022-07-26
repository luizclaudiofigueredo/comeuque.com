import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Empresa() {
  return (
    <Center px={[4,4,4,40,40]}>
        <Flex 
            direction={['column','column','column','row','row']} 
            w={'full'} 
            justify={'space-between'} 
            p={4}
            mb={8}
        >
            <Flex direction='column'>
                    <Text color={'whiteAlpha.800'} fontSize={[10,10,10,16,16]} fontWeight={'bold'}>Favorecido:</Text>
                    <Text color={'#FF7A08'} fontSize={[14,14,14,24,24]} fontWeight={'bold'}>Comunidade Evangélica da Cidade de Mendes</Text>
            </Flex>
            <Flex direction='column'>
                    <Text color={'whiteAlpha.800'} fontSize={[10,10,10,16,16]} fontWeight={'bold'}>CNPJ:</Text>
                    <Text color={'#FF7A08'} fontSize={[14,14,14,24,24]} fontWeight={'bold'}>29.507.868/0001-64</Text>
            </Flex>
        </Flex>
    </Center>
  )
}