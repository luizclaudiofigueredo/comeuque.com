import { Text, Flex, Image, Link, Center } from '@chakra-ui/react'
import React from 'react'
import Moment from 'moment'
import 'moment/locale/pt-br'
import { PRIMARY_COLOR } from '../lib/constant'
import {FaCaretRight} from 'react-icons/fa'
import { useRouter } from 'next/router'


function YoutubePalavra({video}) {
  
  const router = useRouter()

  const handleEvent = (id) => {
    router.push(`/videos?q=${id}`)
  }

  return (
    <>
    <Image src={video.imagemUrl} alt="imagem" boxSize="full" p={2} cursor={'pointer'} onClick={ () => handleEvent(video._id)} />
    <Flex w={'full'} top={["72%","72%","75%","70%","70%"]} p={4} cursor={'pointer'} justify={'space-between'} position={'absolute'} onClick={ () => handleEvent(video._id)}>
      <Center w={[100,100,150,150,150]}>
      <FaCaretRight color={PRIMARY_COLOR} size={[28]} />
      <Text fontSize={[12,12,12,16,16]} py={2} 
          color={'whiteAlpha.700'}  
          alignItems={'center'}
          zIndex={1}
           >
            {video.categoria}
      </Text>
      </Center>
      <Center w={[100,100,150,150,150]}>
      <FaCaretRight color={PRIMARY_COLOR} size={[28]} />
      <Text fontSize={[12,12,12,16,16]} py={2} 
          alignItems={'center'} color={'whiteAlpha.700'}
          zIndex={1}
           >
            {Moment(video.data_publicacao).locale('pt-br').format('DD/MMMM')}
      </Text>
      </Center>
    </Flex>

  </>     
  )
}

export default YoutubePalavra