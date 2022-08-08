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
  import { BsInstagram, BsYoutube, BsPerson, BsWhatsapp } from 'react-icons/bs';
  import emailjs from 'emailjs-com'
import Botao from './botao';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../lib/constant';
  
export default function FaleConosco(props) {

    function sendEmail(e) {
      e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
  
      emailjs.sendForm( 'template_c7eep5s' , 'template_c7eep5s', e.target, 'YQsqvFEGr6f5vFWum')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }    

    const Logo = (props) => {
        return (
          <Flex justify={'center'} py={8}>
            <Image src={process.env.IMAGEM_URL + props.imagem} h={'120px'} alt="Logotipo" paddingTop={2}/>
          </Flex>
        );
      };

      const Details = () => {
        const colSpan = useBreakpointValue({ base: 2, md: 1 });
        return (
          <form onSubmit={sendEmail}>
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
                        <Input name='nome' type='string' placeholder='Nome' bg='white' color={'gray.800'} _placeholder={{ color: 'gray.500' }} />
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
                        <Input name='email' type='string' placeholder='Email' bg='white' color={'gray.800'} _placeholder={{ color: 'gray.500' }} />
                      </InputGroup>
                  </FormControl>
              </GridItem>
              
              <GridItem colSpan={2}>
                <FormControl>
                <FormLabel htmlFor='observacoes' color={DARK_COLOR}>Mensagem</FormLabel>
                      <InputGroup borderColor="gray.800">
                        <Textarea name='observacoes' placeholder='Mensagem' bg='white' color={'gray.800'} _placeholder={{ color: 'gray.500' }} />
                      </InputGroup>
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button bg={DARK_COLOR} color={"white"} size="lg" w="full" _hover={{ bg: '#916601' }}>
                  Enviar Mensagem
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
          </form>
        );
      };

      const Social = () => {
        return (
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
            <Heading color={DARK_COLOR}>Redes Sociais</Heading>
              <Text>Nos Acompanhe nas Redes Sociais e Fique por dentro das Novidades e Promoções!</Text>
            </VStack>
            <SimpleGrid rowGap={6} w="full">             
              <GridItem>
                <HStack
                  w='full'
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  justify={'center'}
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
              </GridItem>
            </SimpleGrid>
          </VStack>
        );
      };      

    const Pedidos = () => {
      return(
        <VStack w="full" h="full" p={10} spacing={6} alignItems="flex-start">
          <VStack w={'full'} alignItems="center">
            <Logo imagem={props.empresa.url_imagem} />
          </VStack>
          <VStack alignItems={"flex-start"} w="full">             
              <Text>{props.empresa.endereco}</Text>
              <Text>{props.empresa.bairro}, {props.empresa.cidade}/{props.empresa.estado}</Text>
              <Flex direction={"row"} justify={"center"} alignItems={'center'} w={'full'} mb={4}>
                  <IconButton
                      aria-label="youtube"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      color={DARK_COLOR}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsWhatsapp size="28px" />}
                    />
                  <a href={`https://wa.me/55${props.empresa.whatsapp.replace(/[^\d.]/g, '')}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`}>
                    <Text fontFamily={'Mont-Heavy'} color={DARK_COLOR} fontSize={24}>
                      {props.empresa.whatsapp}
                    </Text>
                  </a>
              </Flex>
              <Botao paddingY={6} mt={4}/>
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