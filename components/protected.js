import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'
import { useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'

function Protected({children}) {
    const router = useRouter()
    const { isLoggedIn } = useAuth()
    
    useEffect(() => {
        if (isLoggedIn === false) {
            router.replace('/')
        }
    })

    return (
        <Flex direction={'column'} minHeight={'100vh'}>
            {isLoggedIn && children}
        </Flex>
    )
}

export default Protected