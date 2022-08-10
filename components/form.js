import React from 'react'
import { Flex, FormControl, FormLabel, Input, Center, Button, Textarea } from '@chakra-ui/react'
import emailjs from 'emailjs-com'

export default function Contato() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
   
  const handleSubmit = async(e) => {
    e.preventDefault()
    sendEmail(e)
    Swal.fire('Mensagem enviada com sucesso!', '', 'success')
    setNome('')
    setEmail('')
    setMensagem('')    
  }  
   
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_0zd9evo' , 'template_c7eep5s', e.target, 'YQsqvFEGr6f5vFWum')
      .then((result) => {
          console.log('Ok')
      }, (error) => {
          console.log(error.text);
      });
  } 

  return (
    <>
    <Flex direction='column'>
        <form onSubmit={sendEmail} className="w-full max-w-sm">
        <Center flexDirection={'column'}>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='nome' color={'#FF7A08'}>Seu nome</FormLabel>
                <Input name='nome' type='string' placeholder='Nome completo' color={'white'} />
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='email' color={'#FF7A08'}>Seu email</FormLabel>
                <Input name='email' type='email' placeholder='Seu email válido' color={'white'} />
            </FormControl>        
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='message' color={'#FF7A08'}>Mensagem / Pedido de Oração</FormLabel>
                <Textarea name='mensagemm' placeholder='Escreva a sua mensagem' color={'white'} />
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