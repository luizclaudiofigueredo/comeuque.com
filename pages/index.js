import Layout from '../components/layout'
import { Flex, Text } from '@chakra-ui/react'
import { getDados } from '../config/fetchDados'
import { useEffect, useState } from 'react'
import Galeria from '../components/galeria'
import useWindowDimensions from '../components/useWindowDimensions';
import Contato from '../components/form_contato'
import Mapa from '../components/mapa'
import Hero from '../components/hero'
import MyMap from '../components/mymap'

export default function Home(props) { 

  const [ slides, setSlide ] = useState(props.slides)

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setSlide(props.slides)
  },[props.slides])

  return (
    <Flex direction={'column'}>
      <Layout empresa={props.empresa}>
        <Hero images={slides} />
        <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '20px']} justifyContent={'space-between'}>
          <Galeria width={width} />
        </Flex>
        <MyMap />
        <Contato empresa={props.empresa} />        
      </Layout>
    </Flex>
  )
}

export async function getServerSideProps() {
    const slides_res = await getDados(`slides`)
    const empresas = await getDados(`empresas/1`)
    return {
        props: {
          slides: slides_res,
          empresa: empresas
        },
    }
}
