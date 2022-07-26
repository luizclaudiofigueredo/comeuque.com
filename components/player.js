import { Flex } from '@chakra-ui/react'

function YoutubePlayer({video}) { 
    const url = `https://www.youtube.com/embed/${video.videoId}`
    return (
        <Flex justifyContent={'center'} w={'full'} direction={'column'}>
            <div className='video-container'>
                <iframe
                    title={video.titulo}
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </Flex>
        
    )
}

export default YoutubePlayer