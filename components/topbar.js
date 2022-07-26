import { Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function Topbar() {

  const { user, login, logout } = useAuth()

  return (
    <Flex justify={'space-between'} bg={'#FFDD19'} w={'full'} minHeight={'42px'} paddingTop={'8px'} paddingBottom={'6px'}>
        <Flex mx={8} top={'12px'} position={'static'} flexFlow={'wrap-reverse'}>
            <Link href='https://www.facebook.com/projetovidamendes'><Image mx={1} w={'26px'} src="facebook.svg" alt="Facebook" /></Link>
            <Link href='https://www.instagram.com/projetovidamendes'><Image mx={1} w={'26px'} src="instagram.svg" alt="Instagram" /></Link>
            <Link href='https://www.youtube.com/projetovidaonline'><Image mx={1} w={'26px'} src="youtube.svg" alt="Youtube" /></Link>            
        </Flex>
        <Flex>
            <Button h={'36px'} borderRadius={25} fontSize={'sm'} bg={'#F53434'} color={'white'} mx={8} px={16} onClick='#'>Fazer Pedido</Button>
        </Flex>
    </Flex>
  )
}

export default Topbar