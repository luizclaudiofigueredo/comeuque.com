import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Contribuicao() {
  
  const router = useRouter()
  
  useEffect( () => {
    router.push('/contribuir')
  })

  return (
      <div>Redirecionando...</div>
    )
}