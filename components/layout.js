import { Flex } from '@chakra-ui/react'
import React from 'react'
import FooterSmall from './footer'
import NavBar from './navbar'

function Layout({empresa, children}) {
  return (
    <Flex bg={'#ffffff'} direction={'column'} minHeight={'100vh'}>
        <NavBar />
        {children}
        <FooterSmall empresa={empresa} />
    </Flex>
  )
}

export default Layout