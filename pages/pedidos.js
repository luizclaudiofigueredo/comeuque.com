import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Pedidos() {
  
  const router = useRouter()
  
  useEffect( () => {
    router.push('/intercessao')
  })

  return (
      <div>Redirecionando...</div>
    )
}