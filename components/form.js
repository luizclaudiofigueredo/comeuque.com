import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Text, Textarea, VStack } from '@chakra-ui/react';
import { DARK_COLOR } from '../lib/constant';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com'

const Basic = () => {

return(
<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-start">
      <Heading color={DARK_COLOR}>Contato</Heading>
      <Text>Tem alguma dúvida? Algum problema? Quer apenas conversar? Esse aqui é o seu espaço.</Text>
    </VStack>

    <Formik
      initialValues={{
        nome: '',
        email: '',
        mensagem: ''
      }}
      onSubmit={(values , {resetForm} ) => { 
        emailjs.sendForm( 'service_0zd9evo' , 'template_c7eep5s', JSON.stringify(values))   
        resetForm({ values: ''});
     }}      
      >     

{({

values,

errors,

touched,

handleChange,

handleBlur,

handleSubmit,

isSubmitting,

/* and other goodies */

}) => (

      <Form>

        <FormControl>
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
                    onChange={handleChange}
                    onBlur={handleBlur}          
                    value={values.nome}                          
                    />
                </InputGroup>
            </FormControl>

            <FormControl>
                  <FormLabel htmlFor='email' color={DARK_COLOR}>Seu Email</FormLabel>
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
                          onChange={handleChange}
                          onBlur={handleBlur}          
                          value={values.email} 
                        />
                      </InputGroup>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='observacoes' color={DARK_COLOR}>Mensagem</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <Textarea 
                          name='mensagem' 
                          placeholder='Deixe sua mensagem' 
                          bg='white' 
                          color={'gray.800'} 
                          _placeholder={{ color: 'gray.500' }} 
                          onChange={handleChange}
                          onBlur={handleBlur}          
                          value={values.mensagem}                          
                          />
                      </InputGroup>
            </FormControl>

        <Button type="submit" disabled={isSubmitting} bg={DARK_COLOR} color={"white"} my={4} size="lg" w="full" _hover={{ bg: '#916601' }}>
            Enviar Mensagem
        </Button>
      </Form>)}
    </Formik>
  </VStack>
)
};

export default Basic