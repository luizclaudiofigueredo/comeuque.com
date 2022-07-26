import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function ListaConta({conta}) {
  return (
      <>
        <Flex h='110px' alignItems={'center'}>
          <Image src={conta.logo} w={90} h={90} alt="Logotipo" />
        </Flex>
        <Flex direction={'column'} mb={2} p={4} cursor={'pointer'} justify={'left'}>
            <Text color={'whiteAlpha.800'} fontWeight={'bold'}>{conta.banco} ({conta.numero_banco})</Text>
            <Text color={'#FF7A08'} fontWeight={'bold'}>Agência: {conta.agencia}</Text>
            <Text color={'#FF7A08'} fontWeight={'bold'}>Conta: {conta.conta}</Text>
        </Flex>
        </>
  )
}