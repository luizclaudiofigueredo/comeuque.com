import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import { getData } from '../config/fetchData'

export default function Listagem(props) {
    const [visitantes, setVisitantes] = useState(props.visitantes)
    
    useEffect(() => {
      setVisitantes(props.visitantes)
    },[props.visitantes])

    return (
      <Flex direction={'column'}>
        <Layout>    	

          <Flex direction={'column'} px={[4,4,4,40,40]} mx={6}>
              {
                visitantes.length === 0 
                ? <h2>Nenhuma Conta</h2>

                : visitantes.map(visitante => (
                  <Flex key={visitante.id} direction='row' w={'full'} mt={'12px'}>
                      <Text color={'white'}>{visitante.nome}</Text>
                  </Flex>
                ))
              }
          </Flex>
        </Layout>
      </Flex>
    )

}

export async function getServerSideProps() {

  const res = await getData(
    `visitantes`
  )
  return {
    props: {
      visitantes: res.visitantes,
      result: res.result
    },
  }
}