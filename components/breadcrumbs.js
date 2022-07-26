import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Breadcrumbs({pagina, anterior}) {
  return (
    <Flex direction='row' w={'full'} px={['10px','10px','10px','60px','60px']} py={'40px'} mt={'32px'} justifyContent={'space-between'}>
        <Text 
            fontSize={'1.2rem'} 
            fontWeight={600}
            color={'#fafbfc'}
        >
            {pagina}
        </Text>
        <Text 
            fontSize={'0.85rem'} 
            fontWeight={500}
            color={'#fafbfc'}
        >
            { anterior !== '' && anterior + ' / ' + pagina}
        </Text>        
    </Flex>
  )
}

export default Breadcrumbs