import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import MainMenu from './menu'
import Rodape from './rodape'

function Layout({empresa, children}) {
  console.log(empresa)
  return (
    <Flex bg={'#ffffff'} direction={'column'} minHeight={'100vh'}>
        <MainMenu />
        {children}
        <Rodape empresa={empresa} />
    </Flex>
  )
}

export default Layout