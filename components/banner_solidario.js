import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'

export default function BannerSolidario() {
  const router = useRouter()
  
  const handleEvent = () => {
    router.push('/contato')
  }

  return (
    <Flex justify={'center'} alignItems={'center'} py={8} px={6} minH={'270px'}  direction={'column'} mt={10}>
        <Image 
          src='/esperanca.png' 
          alt='Eu Pratico Esperança'
          width={320}
          height={162}
          loading="lazy"
        />
        <Text color={'white'} fontSize={[16,16,16,24,24]} align={'center'}>
          Eu Pratico Esperança é uma iniciativa do Projeto Vida com a finalidade de ajudar as pessoas que necessitam 
          de uma intervenção seja na área de saúde, financeira, psicológica ou espiritual. Para atender aos pedidos que 
          chegam ao projeto, uma equipe de voluntários faz o atendimento às pessoas e buscam maneiras de ajudar na 
          solução dos problemas, seja buscando parceiros ou encaminhando para aconselhamentos.</Text>
        <Button bg={'#1a791b'} color={'white'} mt={6} p={6} _hover={ { bg: '#28bd39' } } onClick={handleEvent}>Eu quero fazer parte!</Button>
    </Flex>
  )
}