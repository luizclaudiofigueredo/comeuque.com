import React, { useState } from 'react'
import { Flex, FormControl, FormLabel, Input, Center, Button, Textarea, RadioGroup, Radio, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { postData } from '../config/fetchData'

export default function FormVisitante() {

  const initialState = {
        nome: '',
        sobrenome: '',
        telefone: '',
        grupo: '',
        observacoes: ''
  }
  
  const [visitante, setVisitante] = useState(initialState)
  
  const router = useRouter()

  const handleChange = e => {
    const {name, value} = e.target
    setVisitante({...visitante, [name]:value})
  }

  
  const saveRecord = async (e) => {
    const res = await postData(
      `visitantes`, {...visitante}
    )
    console.log(res.msg)
  }    

  const handleSubmit = async(e) => {
    e.preventDefault()
 
    Swal.fire({
        title: 'Confirma salvar o registro?',
        icon: 'warning',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Sim, pode salvar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            saveRecord(e)
            sendEmail(e)
            Swal.fire('Salvo com sucesso!', '', 'success')
            setVisitante(initialState)
        } else if (result.isDenied) {
          Swal.fire('Inclusão ou Alteração não foram salvas', '', 'info')
        }
      })
  }  
   
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm( 'service_ikge4sk' , 'template_62eo172', e.target, '8Hh2hSzRwdOGAe58h')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }


  function handleChangeA(event) {
    const { name, value, type, checked } = event.target
    setVisitante(visitante => {
        return {
            ...visitante,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }  

  function createEvent(name, value) {
    return {
        target: {
            name: name,
            value: value,
            type: "radio",
            checked: false
        }
    }
  }  

  return (
    <>
    <Flex direction='column'>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <Center flexDirection={'column'}>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='nome' color={'#FF7A08'}>Seu nome</FormLabel>
                <Input name='nome' value={visitante.nome} type='string' placeholder='Nome' color={'white'} onChange={handleChange} />
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='sobrenome' color={'#FF7A08'}>Sobrenome</FormLabel>
                <Input name='sobrenome' value={visitante.sobrenome} type='string' placeholder='Sobrenome' color={'white'} onChange={handleChange} />
            </FormControl>            
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='telefone' color={'#FF7A08'}>Telefone</FormLabel>
                <Input name='telefone' value={visitante.telefone} type='tel' placeholder='(99) 99999-9999' color={'white'} onChange={handleChange}/>
            </FormControl>           
            <FormControl w={'full'} mb={3}>
              <FormLabel htmlFor='grupo' color={'#FF7A08'}>Grupo</FormLabel>
              <RadioGroup
                  color={'whiteAlpha.700'}
                  name="grupo"
                  onChange={
                      function(value) {
                          handleChangeA(
                              createEvent("grupo", value)
                          )
                      }
                  }
              >
                <VStack spacing='12px' alignItems={'start'}>
                  <Radio color={'white'} value='1'>Criança</Radio>
                  <Radio color={'white'} value='2'>Adolescente</Radio>
                  <Radio color={'white'} value='3'>Jovem</Radio>
                  <Radio color={'white'} value='4'>Adulto</Radio>
                  <Radio color={'white'} value='5'>Idoso</Radio>
                </VStack>
              </RadioGroup>            
            </FormControl>
            <FormControl w={'full'} mb={3}>
                <FormLabel htmlFor='observacoes' color={'#FF7A08'}>Fale um pouco de você</FormLabel>
                <Textarea name='observacoes' value={visitante.observacoes} placeholder='Fale um pouco de você' color={'white'} onChange={handleChange} />
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