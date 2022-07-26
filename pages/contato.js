import Breadcrumbs from '../components/breadcrumbs'
import FormContato from '../components/form_contato'
import { Flex, Text } from '@chakra-ui/react'
import Layout from '../components/layout'

export default function Contato() {
    return (
      <Flex direction={'column'}>
        <Layout>
          <Breadcrumbs pagina='Fale Conosco' anterior='Home' />
          <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '60px']} justifyContent={'space-between'}>
            <Text color={'#FF7A08'} fontSize={36}>Fale Conosco</Text>
            <Text color={'whiteAlpha.800'} fontSize={16}>Entre em contato conosco pelo nosso WhatsApp (24) 98186-5144 ou preencha o formulário abaixo.</Text>
          </Flex>
          <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '60px']} justifyContent={'space-between'}>
            <FormContato />
          </Flex>
        </Layout>
      </Flex>
    )
  }