import React, { useState } from 'react'
import { Flex, FormControl, FormLabel, Input, Center, Button, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import { postData } from '../config/fetchData'

export default function FormPessoa() {

  const initialState = {
        nome: '',
        telefone: '',
        grupo: '',
        observacoes: ''
  }
  
  const [pessoa, setPessoa] = useState(initialState)
  
  const router = useRouter()

  const handleChange = e => {
    const {name, value} = e.target
    setPessoa({...pessoa, [name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    let res = await postData('pessoas', {...pessoa})
    sendEmail(e)
    router.push('/')  
  }  
   
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    console.log(process.env.EMAILJS_KEY)

    emailjs.sendForm( 'service_ikge4sk' , 'template_62eo172', e.target, '8Hh2hSzRwdOGAe58h')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <Flex direction='column'>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <Center flexDirection={'column'}>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='nome' color={'#FF7A08'}>Seu nome</FormLabel>
                <Input name='nome' value={pessoa.nome} type='string' placeholder='Nome completo' color={'white'} onChange={handleChange} />
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='telefone' color={'#FF7A08'}>Telefone</FormLabel>
                <Input name='telefone' value={pessoa.telefone} type='tel' placeholder='Telefone/WhatsApp' color={'white'} onChange={handleChange}/>
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='grupo' color={'#FF7A08'}>Grupo</FormLabel>
                <Select name='grupo' placeholder='Grupo de Pessoas' onChange={handleChange}>
                    <option value="Criança">Criança</option>
                    <option value="Adolescente">Adolescente</option>
                    <option value="Jovem">Jovem</option>
                    <option value="Adulto">Adulto</option>
                    <option value="Idoso">Idoso</option>
                </Select>
            </FormControl>            
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='obeservacoes' color={'#FF7A08'}>Fale um pouco de você</FormLabel>
                <Input name='observacoes' value={pessoa.observacoes} type='string' placeholder='Fale um pouco de você' color={'white'} onChange={handleChange}/>
            </FormControl>                            
        </Center>

        <Center flexDirection={'column'} mt={6}>
            <Flex direction='row' w={'full'}>
                <Button type="submit" bg='#FF7A08' color={'white'} w={'sm'} _hover={{bg: 'gray.300', color: 'black'}}>Enviar</Button>
            </Flex>
        </Center>
        </form>
    </Flex>
    </>
  )
}