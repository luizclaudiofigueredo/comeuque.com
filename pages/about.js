import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import { getData } from '../config/fetchData'
import YoutubePlayer from '../components/player'
import Video from '../components/video'

export default function About(props) {
    const [ blog, setBlog ] = useState(props.blog)
    useEffect(() => {
      setBlog(props.blog)
    },[props.blog])
    return (
      <Flex direction={'column'}>
        <Layout>
          <Breadcrumbs pagina='Nossa História' anterior='Home' />
          <Flex direction={['column','column','column','row','row']} px={[4,4,4,40,40]} mx={6} alignItems={'center'}>
            <Video video={blog} />
          </Flex>
          <Flex direction='column' w={'full'} px={['10px', '10px', '10px' , '60px', '60px']} mt={[10,10,10,32,32]} justifyContent={'space-between'}>
            <Text color={'whiteAlpha.800'} fontSize={24} mb={4}>{blog.titulo}</Text>
            <Text color={'whiteAlpha.800'} fontSize={16}>{blog.resumo}</Text>
          </Flex>
        </Layout>
      </Flex>
    )
}

export async function getServerSideProps() {
  const res = await getData(`blogs?categoria=about`)
  return {
      props: {
        blog: res.blogs[0],
      },
  }
}