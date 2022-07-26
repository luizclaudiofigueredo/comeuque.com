import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

function TopBarAdmin() {
  const { user, logout } = useAuth() 
  return (
    <>
    <Flex shadow={'lg'} p='6' bg={'#0C0C0C'} h={20} alignItems={'center'} justifyContent={'space-between'}>
        <Image
                borderRadius='full'
                h='55px' 
                src='logo.png'
                alt={user?.displayName}
                mx={4}
            />  
        <Image
                borderRadius='full'
                boxSize='32px' 
                src={user?.photoURL}
                alt={user?.displayName}
                mx={4}
            />            
    </Flex>
    </>      
  )
  }
  
export default TopBarAdmin