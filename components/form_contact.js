import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import { Button, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Text, Textarea, VStack } from '@chakra-ui/react';
import { DARK_COLOR } from '../lib/constant';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import Swal from 'sweetalert2';

export const ContactUs = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const form = useRef();

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
<VStack w="full" h="full" p={10} spacing={10} >

    <VStack spacing={3} alignItems="flex-start" w={'full'}>
      <Heading color={DARK_COLOR}>Contato</Heading>
      <Text>Teve uma experiência com a gente? Fala pra gente como foi, dê sua sugestão e nos ajude a melhorar e fazer tudo ficar ainda mais gostoso.</Text>
    </VStack>    
    <VStack spacing={3} alignItems="center" w={'full'}>
        <form ref={form} onSubmit={handleSubmit}>
        <FormControl minW={300}>
            <FormLabel htmlFor='nome' color={DARK_COLOR}>Seu nome</FormLabel>
                <InputGroup borderColor="gray.800">
                <InputLeftElement pointerEvents="none">
                    <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input 
                    name='nome' 
                    type='string' 
                    placeholder='Seu Nome' 
                    bg='white' 
                    color={'gray.800'} 
                    _placeholder={{ color: 'gray.500' }}
                    onChange={event => setNome(event.target.value)}
                    value={nome}                                            
                    />
                </InputGroup>
            </FormControl>

            <FormControl>
                  <FormLabel htmlFor='email' color={DARK_COLOR} mt={2}>Seu Email</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input 
                          name='email' 
                          type='string' 
                          placeholder='Seu Email' 
                          bg='white' 
                          color={'gray.800'} 
                          _placeholder={{ color: 'gray.500' }}
                          onChange={event => setEmail(event.target.value)}
                          value={email}                           
                        />
                      </InputGroup>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='observacoes' color={DARK_COLOR} mt={2}>Mensagem</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <Textarea 
                          name='mensagem' 
                          placeholder='Deixe sua mensagem' 
                          bg='white' 
                          color={'gray.800'} 
                          _placeholder={{ color: 'gray.500' }} 
                          onChange={event => setMensagem(event.target.value)}
                          value={mensagem}                                                    
                          />
                      </InputGroup>
            </FormControl>

            <Button type="submit" bg={DARK_COLOR} color={"white"} my={4} size="lg" w="full" _hover={{ bg: '#916601' }} onClick={handleSubmit}>
                Enviar Mensagem
            </Button>
          </form>
      </VStack>
    </VStack>
  );
};
