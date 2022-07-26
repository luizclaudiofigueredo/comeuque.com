import { Button, Flex, Text, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function BannerVisitantes() {
  const router = useRouter()
  
  const handleEvent = () => {
    router.push('/visitantes')
  }

  return (
    <Flex justify={'center'} alignItems={'center'} py={8} px={4} minH={'270px'} bg={'#1A1919'} direction={'column'} mt={10}>
        <div className='titulo'>ESTÁ NOS VISITANDO?</div>
        <Text color={'white'} fontSize={24}>Seja muito bem-vindo à sua casa. Que as suas experiências somem às nossas e que possamos crescer juntos no reino!</Text>
        <Button bg='#FA5508' color={'white'} mt={6} p={6} _hover={ { bg: '#E67D2D' } } onClick={handleEvent}>Queremos te conhecer melhor</Button>
    </Flex>
  )
}