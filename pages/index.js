import Layout from '../components/layout'
import { Flex, Grid, GridItem, Text, useForceUpdate } from '@chakra-ui/react'
import Herosection from "./herosection"
import { getData } from '../config/fetchData'
import { getDados } from '../config/fetchDados'
import { useEffect, useState } from 'react'
import Galeria from '../components/galeria'
import useWindowDimensions from '../components/useWindowDimensions';

export default function Home(props) { 

  const [ slide, setSlide ] = useState(props.slides)

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setSlide(props.slides)
  },[props.slides])

  const ProdutosWrapper = () => {
    return(
    <Grid templateColumns='repeat(2, 1fr)' gap={6} mx={10}>
      <GridItem w='100%' h='10' bg='blue.500' px={4} />
      <GridItem w='100%' h='10' bg='blue.500' px={4} />
      <GridItem w='100%' h='10' bg='blue.500' px={4} />
      <GridItem w='100%' h='10' bg='blue.500' px={4} />
      <GridItem w='100%' h='10' bg='blue.500' px={4} />
    </Grid>
    )    
  }
  
  return (
    <Flex direction={'column'}>
      <Layout empresa={props.empresa}>
        <Herosection slides={slide}/>
        <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '20px']} justifyContent={'space-between'}>
          <Galeria width={width} />
        </Flex>
        <Flex w={'full'} justify={'center'} align={'center'} alignItems={'center'} h={40}> 
          <Text fontSize={24} color={'gray.700'}>Cardápio</Text>
        </Flex>        
        <ProdutosWrapper />
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