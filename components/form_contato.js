import React from 'react'
import { Flex, FormControl, FormLabel, Input, Center, Button, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import InputMask from "react-input-mask"

export default function FormContato() {
  
  const router = useRouter()
   
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm( 'service_ikge4sk' , 'template_32a0hfj', e.target, '8Hh2hSzRwdOGAe58h')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
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
                <Input name='user_name' type='string' placeholder='Nome completo' color={'white'} />
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='email' color={'#FF7A08'}>Seu email</FormLabel>
                <Input name='user_email' type='email' placeholder='Seu email válido' color={'white'} />
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='telefone' color={'#FF7A08'}>Telefone</FormLabel>
                <Input name='user_phone' as={InputMask} mask="(**) *****-****" placeholder='Telefone/WhatsApp' color={'white'} />
            </FormControl>                     
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='message' color={'#FF7A08'}>Mensagem / Pedido de Oração</FormLabel>
                <Textarea name='message' placeholder='Escreva a sua mensagem ou pedido de oração' color={'white'} />
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