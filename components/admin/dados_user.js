import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

function DadosUser() {
  const { user, logout } = useAuth() 
  return (
    <>
    <Image
        borderRadius='full'
        boxSize='48px' 
        src={user?.photoURL}
        alt={user?.displayName}
    />                    
    <Text color={'whiteAlpha.800'} fontSize={'16px'}>{user?.displayName}</Text>
    <Flex py={8}>
        <InputGroup>
            <InputRightElement pointerEvents="none" size="xs">
                <SearchIcon className="SearchIcon" color="gray.500" cursor={'pointer'}/>
            </InputRightElement>
            <Input 
                h={10} 
                className="Input" 
                color={'white'} 
                variant="outline" 
                size="xs"
                fontSize={'14px'}
                placeholder={'Localizar'}
                focusBorderColor='orange.300'
                borderColor={'gray.500'}
                rounded={'md'} />
        </InputGroup>
    </Flex>
    </>
  )
}

export default DadosUser