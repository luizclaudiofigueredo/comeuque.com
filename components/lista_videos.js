import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import YoutubePalavra from './youtube_palavra'


export default function ListaVideos(videos) {
    return (
        <Flex direction={['column','column','column','row','row']} mt={'32px'}>
        {
              videos.length === 0 
              ? <h2>Nenhum Vídeo</h2>

              : videos.map(video => (   
                <Box key={video.videoId} pos="relative" shadow={'base'}>               
                  <YoutubePalavra video={video}/>
                </Box>
              ))
        }
        </Flex>
    )
}