import { Box, Center, Flex, Image, Link, useColorModeValue, Text, Stack, Popover } from '@chakra-ui/react'
import React from 'react'
import { FaPhone, FaMapPin } from 'react-icons/fa'
import {NAVITEMS} from '../lib/constant'

function Rodape({empresa}) {

  console.log(empresa)

  const linkColor = useColorModeValue('whiteAlpha.600', 'gray.600')
  const linkHoverColor = useColorModeValue('#FF7A08', 'white')
  
  return (
    <>
    <Flex justify={'center'} direction={['column','column','column','row']} h={[250, 250, 250, 300, 300]} mt={28} bg={'#825221'}>

      <Flex direction={'column'} justify={'center'}>>
        <Image src='images/logosite-final.png' h={'90px'} alt="Logo" px={12} />
      </Flex>

      <Flex direction={'column'} justify={'center'}>
        <Flex mt={6} direction={'row'} w={300}>
          <Flex mr={2} mt={1}>
            <FaMapPin color={'#FF7A08'}  />
          </Flex>
          <Flex direction={'column'}>
            <Text color={'whiteAlpha.800'} fontWeight={'600'}>{empresa.nome}</Text>
            <Text color={'whiteAlpha.600'}>{empresa.endereco}</Text>
          </Flex>
        </Flex>
        <Flex mt={3} direction={'row'} w={300}>
          <Flex mr={2} mt={1}>
            <FaPhone color={'#FF7A08'} />
          </Flex>
          <Link href={`https://wa.me/55${empresa.telefone.replace(/[^\d.]/g, '')}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`}><Text color={'whiteAlpha.800'} fontWeight={'500'}>{empresa.telefone}</Text></Link>
       </Flex>     
      </Flex>       
    </Flex>

    <Flex flexFlow={'wrap-reverse'} justify={'center'} h={30} pb={5} bg={'#825221'}>
      <Link href={`https://www.facebook.com/${empresa.facebook}`}><Image mx={1} w={'26px'} src="facebook.svg" alt="Facebook" /></Link>
      <Link href={`https://www.instagram.com/${empresa.instagram}`}><Image mx={1} w={'26px'} src="instagram.svg" alt="Instagram" /></Link>
      <Link href={`https://www.youtube.com/${empresa.youtube}`}><Image mx={1} w={'26px'} src="youtube.svg" alt="Youtube" /></Link>
    </Flex>
    </>
  )
}

export default Rodape