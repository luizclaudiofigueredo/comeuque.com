import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../breadcrumbs'
import Layout from '../layout'
import Player from '../player_youtube'
import { getData } from '../../config/fetchData'

export default function Videos(props) {
  const [ video, setVideo ] = useState(props.blog)

  return (
    <Flex direction={'column'}>
      <Layout>
        <Breadcrumbs pagina='Campus Online' anterior='Home' />
        <Flex direction='row' w={'full'} px={['10px', '10px', '10px' , '60px']} mt={'22px'} justifyContent={'space-between'}>
          <Player video={video}/>
        </Flex>
      </Layout>
    </Flex>
  )
}

export async function getStaticProps(context) {
  const res = await getData(`blogs/${context.query._id}`)
  return {
      props: {
        blog: res.blog,
      },
  }
}