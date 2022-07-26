import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import Video from '../components/video'
import { getData } from '../config/fetchData'

export default function Videos(props) {
  
  const [video, setVideo] = useState(props.video)
    
  useEffect(() => {
    setVideo(props.video)
  },[props.video])

  return(
  <Flex direction={'column'}>
  <Layout>
    <Breadcrumbs pagina='Campus Online' anterior='Home' />
    <Flex direction={['column','column','column','row','row']} px={[4,4,4,40,40]} mx={6} alignItems={'center'}>
    <Video video={video} />
    </Flex>
  </Layout>
</Flex>
)}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query.q
  const res = await getData(`blogs/${ctx.query.q}`)
  return {
      props: {
        video: res.blog,
      },
  }
}