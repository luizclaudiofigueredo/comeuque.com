import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import CopiaCola from '../components/copia_cola'
import Empresa from '../components/empresa'
import Layout from '../components/layout'
import ListaConta from '../components/lista_contas'
import { getData } from '../config/fetchData'

export default function Contribuir(props) {
    const [contas, setContas] = useState(props.contas)
    
    useEffect(() => {
      setContas(props.contas)
    },[props.contas])

    return (
      <Flex direction={'column'}>
        <Layout>
          <Breadcrumbs pagina='Contas bancárias' anterior='Home' />
          
          <Empresa />
          
          <Flex direction={['column','column','column','row','row']} px={[4,4,4,40,40]} mx={6}>
              {
                contas.length === 0 
                ? <h2>Nenhuma Conta</h2>

                : contas.map(conta => (
                  <Flex key={conta._id} direction='row' w={'full'} mt={'12px'}>
                    <ListaConta conta={conta} />
                  </Flex>
                ))
              }

          </Flex>

          <CopiaCola />

        </Layout>
      </Flex>
    )
}


export async function getServerSideProps() {

  const res = await getData(
    `contas`
  )
  // server side rendering
  return {
    props: {
      contas: res.contas,
      result: res.result
    }, // will be passed to the page component as props
  }
}