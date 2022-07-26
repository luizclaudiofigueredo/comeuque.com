import Layout from '../components/layout'
import { Flex } from '@chakra-ui/react'
import Herosection from "./herosection"
import { getData } from '../config/fetchData'
import { getDados } from '../config/fetchDados'
import { useEffect, useState } from 'react'
import Galeria from '../components/galeria'

export default function Home(props) { 
  const [ videos, setBlog ] = useState(props.videos)
  
  const [ slide, setSlide ] = useState(props.slides)

  useEffect(() => {
    setBlog(props.videos)
    setSlide(props.slides)
  },[props.videos, props.slides, props.empresa])
  
  
  return (
    <Flex direction={'column'}>
      <Layout empresa={props.empresa}>
        <Herosection slides={slide}/>
        <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '60px']} justifyContent={'space-between'}>
          <Galeria />    
        </Flex>
      </Layout>
    </Flex>
  )
}

const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.CHANNEL_ID}&maxResults=3&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`;

export async function getServerSideProps() {
    const res = await getData(`blogs?categoria=youtube`)
    const slides_res = await getDados(`slides`)
    const empresas = await getDados(`empresas/1`)
    return {
        props: {
          videos: res.blogs,
          slides: slides_res,
          empresa: empresas,
          result: res.result
        },
    }
}