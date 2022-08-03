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
    SimpleGrid,
    GridItem,
    useBreakpointValue,
    Select,
    Checkbox,
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
  
export default function FaleConosco(props) {
   
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

      const Details = () => {
        const colSpan = useBreakpointValue({ base: 2, md: 1 });
        return (
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
            <Heading color={DARK_COLOR}>Contato</Heading>
              <Text>Tem alguma dúvida? Algum problema? Quer apenas conversar? Esse aqui é o seu espaço.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel htmlFor='nome' color={DARK_COLOR}>Seu nome</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input name='nome' type='string' placeholder='Nome' color={'gray.800'} _placeholder={{ color: 'white' }} />
                      </InputGroup>
                  </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel htmlFor='email' color={DARK_COLOR}>Seu Email</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input name='email' type='string' placeholder='Email' color={'gray.800'} _placeholder={{ color: 'white' }} />
                      </InputGroup>
                  </FormControl>
              </GridItem>
              
              <GridItem colSpan={2}>
                <FormControl>
                <FormLabel htmlFor='observacoes' color={DARK_COLOR}>Mensagem</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <Textarea name='observacoes' placeholder='Mensagem' color={'gray.800'} _placeholder={{ color: 'white' }} />
                      </InputGroup>
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button bg={DARK_COLOR} color={"white"} size="lg" w="full">
                  Enviar Mensagem
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        );
      };

    const Contato = () => {
      return(
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack maxW={290} gap={3} >
            <Heading color={DARK_COLOR}>Contato</Heading>
            <VStack direction='column' minWidth='max-content'>
              <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <Center flexDirection={'column'}>
                  <FormControl w={'full'} mb={3}>
                      <FormLabel htmlFor='nome' color={DARK_COLOR}>Seu nome</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input name='nome' type='string' placeholder='Nome' color={'gray.800'} _placeholder={{ color: 'white' }} />
                      </InputGroup>
                  </FormControl>        
                  <FormControl w={'full'} mb={3} alignItems="center">
                      <FormLabel htmlFor='email' color={DARK_COLOR}>Seu Email</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input name='email' type='string' placeholder='Email' color={'gray.800'} _placeholder={{ color: 'white' }} />
                      </InputGroup>
                  </FormControl>           
                  <FormControl mb={3}>
                      <FormLabel htmlFor='observacoes' color={DARK_COLOR}>Mensagem</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <Textarea name='observacoes' placeholder='Mensagem' color={'gray.800'} _placeholder={{ color: 'white' }} />
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
            </VStack>      
          </VStack>
        </VStack>
    )}

    const Social = () => {
      return(
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack maxW={290} gap={2}>
            <Heading mb={4} color={DARK_COLOR} fontFamily="Mont-Heavy">Redes Sociais</Heading>
        
            <HStack
              minWidth='max-content'ya
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
            <Text>Nos Acompanhe nas Redes Sociais e Fique por dentro das Novidades e Promoções!</Text>
          </VStack>
        </VStack>         
      )
    }

    const Pedidos = () => {
      return(
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack maxW={290} spacing={2} gap={3}>
                <Logo />
                <Text>{props.empresa.endereco}</Text>
                <Link href={`https://wa.me/55${props.empresa.telefone.replace(/[^\d.]/g, '')}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`}><Text fontFamily={'Mont-Heavy'} color={DARK_COLOR} fontSize={28} fontWeight={'800'}>{props.empresa.telefone}</Text></Link>
                <Botao paddingY={5} />
            </VStack>
        </VStack>        
      )
    }

    return (
    <Box bg='#fdc319' id="contato">
      <Container maxW="container.xl" p={0}>
      <Flex
      h={{ base: 'auto', md: 'fit-content' }}
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
      justify={'space-evenly'}
      >
        <Details />
        <Social />
        <Pedidos />
      </Flex>
      </Container>
    </Box>
    );
  }