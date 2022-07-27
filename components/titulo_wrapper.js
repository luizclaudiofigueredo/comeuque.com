import { Text } from '@chakra-ui/react'
import React from 'react'

function TituloWrapper(props) {
  return (
    <Text fontSize={36} color={'#ff0000'}>{props.titulo}</Text>
  )
}

export default TituloWrapper