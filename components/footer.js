import {
    Box,
    chakra,
    Container,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
    
  const Logo = (props) => {
    return (
        <Image src='images/logosite-final.png' h={'90px'} alt="Logotipo" paddingTop={2}/>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function FooterSmall({empresa}) {
    return (
      <Box
        bg={useColorModeValue('#825221', 'gray.900')}
        color={useColorModeValue('white', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>História</Link>
            <Link href={'#'}>Cardápio</Link>
            <Link href={'#'}>Contato</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 Powered by <a href="https://www.kallario.com.br">Kalla Rio</a>.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Facebook'} href={`https://www.facebook.com/${empresa.facebook}`}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Instagram'} href={`https://www.facebook.com/${empresa.instagram}`}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Youtube'} href={`https://www.facebook.com/${empresa.youtube}`}>
                <FaYoutube />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }