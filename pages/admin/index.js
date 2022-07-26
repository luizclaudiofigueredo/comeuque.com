import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Protected from '../../components/protected'
import TopBarAdmin from '../../components/admin/topbar'
import Dashboard from '../../components/admin/dashboard'
import DadosUser from '../../components/admin/dados_user'
import Empresas from '../../components/admin/empresas'
import Visitantes from '../../components/admin/visitantes'
import Blogs from '../../components/admin/blogs'
import Contas from '../../components/admin/contas'
import { useAuth } from '../../contexts/AuthContext'

function Home() {

  const [ opcao, setOpcao ] = useState(0)

  const { user, logout } = useAuth() 
  
  const router = useRouter()

  const log_out = () => {
    logout()
    router.replace('/')
  }

  return (
    <Protected>
        <Flex direction={'column'} bg={'gray.300'} h={'100vh'}>
            <TopBarAdmin />
            <Flex w={'full'}>
                <Flex direction={'column'} w='280px' bg={'#232222'} h={'100vh'} p={4} alignItems={'center'}>
                    <DadosUser />
                    <VStack w={'full'} alignItems={'left'}>
                        { ITEMS_MENU.map(
                            (item) => (
                                <Text key={item.id} bg={ opcao === item.id ? 'blue.700': '#232222'} color={ opcao === item.id ? 'whiteAlpha.900' : 'whiteAlpha.600'} _hover={{ fontWeight: 'semibold', color: 'whiteAlpha.800', cursor: 'pointer'}} p={2} onClick={() => setOpcao(item.id)}>{item.label}</Text>
                            )
                        )}
                    </VStack>
                </Flex>
                <Flex direction={'column'} h={'100vh'} p={4} w={'full'}>
                { opcao === 0  && <Dashboard /> }
                { opcao === 1  && <Empresas /> }
                { opcao === 2  && <Blogs /> }
                { opcao === 3  && <Contas /> }
                { opcao === 4  && <Visitantes /> }
                </Flex>
            </Flex>
        </Flex>
    </Protected>
  )
}

export default Home

const ITEMS_MENU = [
    { 
        id: 0,
        label: 'Dashboard',
    },
    { 
        id: 1,
        label: 'Empresas',
    },
    { 
        id: 2,
        label: 'Blogs',
    },
    { 
        id: 3,
        label: 'Contas',
    },
    {
        id: 4,
        label: 'Visitantes',
    },
    {
        id: 5,
        label: 'Sair do Sistema',
    },    
]
