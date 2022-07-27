import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import FooterSmall from './footer'
import MainMenu from './menu'
import NavBar from './navbar'
import Rodape from './rodape'

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