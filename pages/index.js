import Layout from '../components/layout'
import { Flex, Text } from '@chakra-ui/react'
import { getDados } from '../config/fetchDados'
import { useEffect, useState } from 'react'
import Galeria from '../components/galeria'
import useWindowDimensions from '../components/useWindowDimensions';
import Hero from '../components/hero'
import MyMap from '../components/mymap'
import FaleConosco from '../components/form_contato'
import { useDispatch } from 'react-redux'
import { setEmpresa } from '../redux/empresaSlice'
import BlogList from '../components/blog'

export default function Home(props) { 

  const dispatch = useDispatch()

  dispatch(setEmpresa(props.empresa.link_delivery))

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
        <Galeria width={width} produtos={props.produtos} />
        </Flex>
        <BlogList blogs={props.blogs} />
        <MyMap empresa={props.empresa}/>
        <FaleConosco empresa={props.empresa} />        
      </Layout>
    </Flex>
  )
}

export async function getServerSideProps() {
    const p = await getDados(`produtos`)
    const s = await getDados(`slides`)
    const e = await getDados(`empresas/1`)
    const b = await getDados(`blogs`)
    return {
        props: {
          produtos: p,
          slides: s,
          empresa: e,
          blogs: b,
        },
    }
}
