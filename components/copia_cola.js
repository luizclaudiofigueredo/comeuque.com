import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PRIMARY_COLOR } from '../lib/constant'
import copy from "copy-to-clipboard"

function CopiaCola() {

  const [copia, setCopia] = useState(false)
 
  const chave='00020126560014br.gov.bcb.pix0134projetovidachurch.mendes@gmail.com27600016BR.COM.PAGSEGURO013667F5177B-2141-4B01-94F7-5ABE3B15AA165204000053039865802BR5922Comunidade Evangelica 6006MENDES62290525PAGS0000000002205102006276304CA8F'

  const handleEvent = () => {
    copy(chave)
    setCopia(true)
    setInterval(() => {
      setCopia(false)
    }, 4000)
  }  

  return (
    <Flex w={'full'} mt={4} direction={'column'} alignItems={'center'} px={[4,4,4,40,40]}>
        <Text fontSize={'2xl'} color={'white'}>CHAVES PIX</Text>
        <Box bg={PRIMARY_COLOR} w={['50%','50%','50%','25%','25%']} h={1} m={4} />
        <Flex p={[2,2,2,4,4]} 
             direction={['column','column','column','row','row']} 
             w={['full', 'full', 'full', '2xl','2xl']} 
             alignContent={['left','left','left','center','center']} 
             alignItems={['left','left','left','center','center']} 
             justify={['left','left','left','space-around','space-around']} 
             mb={10}>
          <Flex direction='column' p={[9,9,9,4,4]} alignItems={'center'}>
            <Image w={'100%'} src='qrcode.png' alt="qrcode" />
            <Text fontSize={'smaller'} color='white'>QRCode PagSeguro</Text>
          </Flex>
          <Flex direction='column' py={4}>
            <Flex direction='column' mb={2}>
              <Text color={'white'}><strong>BB</strong> (CNPJ)</Text>
              <Text color={'white'}> 29.507.868/0001-04</Text>
            </Flex>
            <Flex direction='column' mb={2}>
              <Text color={'white'}><strong>Stone</strong> (Telefone)</Text>
              <Text color={'white'}>(24) 98186-5144</Text>
            </Flex>          
            <Flex direction='column' mb={2}>
              <Text color={'white'}><strong>PagSeguro</strong> (email)</Text>
              <Text color={'white'}>projetovidachurch.mendes@gmail.com</Text>
            </Flex>
          </Flex>
        </Flex>
        <Button bg={PRIMARY_COLOR} onClick={handleEvent}>{ copia ? 'Copiado!' : 'PIX Copia e Cola'}</Button>
    </Flex>
  )
}

export default CopiaCola