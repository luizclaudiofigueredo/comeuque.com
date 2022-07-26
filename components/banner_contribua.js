import { Button, Flex, Text, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function BannerContribua() {
  const router = useRouter()
  
  const handleEvent = () => {
    router.push('/contribuir')
  }

  return (
    <Flex justify={'center'} alignItems={'center'} py={8} px={4} minH={'270px'} bg={'#65350f'} direction={'column'} mt={20}>
        <div className='titulo'>EU QUERO CONTRIBUIR!</div>
        <Flex>
            <Image src='quote-alt-left-svgrepo-com.svg' mx={2} h={'100%'} alt="quote"/>
            <Text color={'white'} fontSize={24}>Honra ao Senhor com os teus bens, e com a primeira parte de todos os teus ganhos.</Text>
        </Flex>
        <Text color={'white'} fontSize={16} align={'center'} w={'100%'} px={[4,4,4,32,32]}>Provérbios 3:9</Text>
        <Button bg='#FA5508' color={'white'} mt={6} p={6} _hover={ { bg: '#E67D2D' } } onClick={handleEvent}>Saiba como, clicando aqui.</Button>
    </Flex>
  )
}