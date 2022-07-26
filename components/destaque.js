import { Flex, Image, Box, Text, Center } from '@chakra-ui/react'
import React from 'react'
import { PRIMARY_COLOR } from '../lib/constant'

function Destaque() {
  return (
    <Center>
    <Flex justify={['center','center','center','space-evenly','space-evenly']} direction={[ 'column','column','column','row','row']} p={[2, 4, 4, 16, 16]}>
      <Flex direction={'column'} mt={8}>
          <Text color={'white'} fontSize={[14,14,16,20,20]}>BEM-VINDO À SUA CASA</Text>
          <Text color={'white'} fontSize={[24,24,26,36,36]} mb={6} fontWeight={'extrabold'}>Nossa paixão é por vidas!</Text>
          <Text color={'white'} fontStyle={'italic'} fontSize={[14,20]}>Amamos pessoas, valorizamos pessoas, servimos pessoas, acreditamos nas pessoas.</Text>
          <Text color={'white'} fontStyle={'italic'} fontSize={[14,20]}>É sobre servir, não ser visto. Servimos por algo maior!</Text>
          <Text color={PRIMARY_COLOR} fontSize={[12,16]} fontWeight={'bold'} mt={4}>Pastor Luiz Cláudio Figueredo</Text>
      </Flex>
      <Center w={['100%','100%','100%','50%','50%']} shadow={'md'}>
        <Image src="/assets/destaque.jpg" alt="destaque" w={'100%'} p={2} />
      </Center>
  </Flex>
  </Center>
  )
}

export default Destaque