import { Flex } from '@chakra-ui/react'
import { getData } from '../config/fetchData'
import { useEffect, useState } from 'react'
import Video from './video'

function Player(video) { 
    return (
        <Flex justifyContent={'center'} w={'full'} direction={'column'}>
            <Video video={video} />
        </Flex>
        
    )
}

export default Player

