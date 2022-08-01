import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Image,
    Center,
    Link,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdSend,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsInstagram, BsYoutube, BsPerson } from 'react-icons/bs';
  import emailjs from 'emailjs-com'
import Botao from './botao';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../lib/constant';
  
export default function Contato(props) {
   
    function handleSubmit(e) {
      e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
  
      emailjs.sendForm( 'service_ikge4sk' , 'template_32a0hfj', e.target, '8Hh2hSzRwdOGAe58h')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }

    const Logo = (props) => {
        return (
          <Flex justify={'center'} py={8}>
            <Image src='images/logosite-final.png' h={'120px'} alt="Logotipo" paddingTop={2}/>
          </Flex>
        );
      };

    const FormularioContato = () => {
      return(
      <Flex direction='column'>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <Center flexDirection={'column'}>
          <FormControl w={'full'} mb={3}>
              <FormLabel htmlFor='nome' color={DARK_COLOR}>Seu nome</FormLabel>
              <InputGroup borderColor="gray.800">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input name='nome' type='string' placeholder='Nome' color={'white'} />
              </InputGroup>
          </FormControl>        
          <FormControl w={'full'} mb={3}>
              <FormLabel htmlFor='email' color={DARK_COLOR}>Seu Email</FormLabel>
              <InputGroup borderColor="gray.800">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input name='email' type='string' placeholder='Email' color={'white'} />
              </InputGroup>
          </FormControl>           
          <FormControl w={'full'} mb={3}>
              <FormLabel htmlFor='observacoes' color={DARK_COLOR}>Mensagem</FormLabel>
              <InputGroup borderColor="gray.800">
                <Textarea name='observacoes' placeholder='Mensagem' />
              </InputGroup>
          </FormControl>                            
      </Center>

      <Center flexDirection={'column'} mt={6}>
          <Flex direction='row' w={'full'} alignItems={'center'}>
              <Button py={6} type="submit" bg={DARK_COLOR} color={'white'} w={'sm'} _hover={{bg: LIGHT_COLOR, color: 'white'}}>
                Enviar Mensagem
              </Button>
          </Flex>
      </Center>
      </form>
    </Flex>      
    )}

    const Social = () => {
      return(
        <HStack
        mt={{ lg: 10, md: 10 }}
        spacing={5}
        px={5}
        alignItems='center'>
        <a href={`https://facebook.com/${props.empresa.facebook}`}>
        <IconButton
          aria-label="facebook"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: '#0D74FF' }}
          icon={<MdFacebook size="28px" />}
        />
        </a>
        <a href={`https://instagram.com/${props.empresa.instagram}`}>
        <IconButton
          aria-label="instagram"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: '#0D74FF' }}
          icon={<BsInstagram size="28px" />}
        />
        </a>
        <a href={`https://youtube.com/${props.empresa.youtube}`}>
        <IconButton
          aria-label="youtube"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: '#0D74FF' }}
          icon={<BsYoutube size="28px" />}
        />
        </a>
      </HStack>         
      )
    }

    return (
    <Box bg='#fdc319' boxShadow='md' >

      <Logo />

      <Flex direction={['column','column','column','row']} justify={'space-evenly'}>

        <Flex p={[6,6,6,10,10]} justify={'flex-start'} direction={'column'}>
          <VStack minW={350} spacing={2} gap={3} >
            <Heading mb={4} color={'gray.800'}>Contato</Heading>
            <FormularioContato />
          </VStack>
        </Flex>

        <Flex p={[4,4,4,10,10]} justify={'flex-start'} >
          <VStack minW={350} gap={2}>
            <Heading mb={4} color={'gray.800'}>Redes Sociais</Heading>
            <Social />
          </VStack>
        </Flex>

        <Flex p={[4,4,4,10,10]}  maxW={420} justify={'flex-start'}>
            <VStack minW={350} spacing={2} gap={3}>
                <Heading mb={4} color={'gray.800'}>{props.empresa.nome}</Heading>
                <Text>{props.empresa.endereco}</Text>
                <Link href={`https://wa.me/55${props.empresa.telefone.replace(/[^\d.]/g, '')}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`}><Text color={DARK_COLOR} fontSize={28} fontWeight={'800'}>{props.empresa.telefone}</Text></Link>
            </VStack>
        </Flex>

      </Flex>

    </Box>
    );
  }