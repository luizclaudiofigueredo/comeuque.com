import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Dashboard() {
  return (
    <>
        <Flex px={16} py={12} >
            <Text fontSize={'36px'} color={'#0c0c0c'} fontWeight={'bold'}>Dashboard</Text>
        </Flex>
        <Flex px={40} direction={'column'}>
            <Text fontSize={'32px'} color={'#0c0c0c'}>Bem-vindo ao Sistema de Administração do Site</Text>
            <Text fontSize={'16px'} color={'#0c0c0c'}>Reunimos algumas informações importantes para você começar, vamos lá?</Text>
        </Flex>
    </> 
  )
}

export default Dashboard