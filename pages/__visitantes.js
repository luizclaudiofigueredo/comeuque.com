import Breadcrumbs from '../components/breadcrumbs'
import FormVisitante from '../components/form_visitante'
import { Flex, Text } from '@chakra-ui/react'
import Layout from '../components/layout'

export default function Visitantes() {
    return (
      <Flex direction={'column'}>
        <Layout>
        <Breadcrumbs pagina='Visitantes' anterior='Home' />
        <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '60px', '60px']} justifyContent={'space-between'}>
            <Text color={'#FF7A08'} fontSize={36}>Seja bem-vindo</Text>
            <Text color={'whiteAlpha.800'} fontSize={16}>Queremos te conhecer melhor. Por favor preencha os dados abaixo.</Text>
          </Flex>
          <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '60px' , '60px']} mt={18} justifyContent={'space-between'}>
            <FormVisitante />
          </Flex>
        </Layout>
      </Flex>
    )
}