import React from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Popover,
    Link,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Button,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

import { PRIMARY_COLOR } from '../lib/constant'
import { useAuth } from '../contexts/AuthContext';
  
  export default function MainMenu() {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <Box>
        <Flex
          bg={'#825221'}
          color={'white'}
          minH={'42px'}
          paddingTop={{ base: 2 }}
          paddingBottom={{ base: 4 }}
          px={{ base: 25 }}
          align={'center'}
          justify={'space-between'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} color={PRIMARY_COLOR} /> : <HamburgerIcon w={7} h={7} color={PRIMARY_COLOR} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'space-between', md: 'space-between' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', '#0a0b09')}>
              <Link href='/'><a><Image src='images/logosite-final.png' h={'60px'} alt="Logotipo" paddingTop={2}/></a></Link>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} mt={5}>
              <DesktopNav />
            </Flex>

            <Flex mt={4}>
              <Button h={'36px'} borderRadius={25} fontSize={'sm'} bg={'#F53434'} color={'white'} mx={8} px={16} onClick='#'>Fazer Pedido</Button>
            </Flex>
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.600');
    const linkHoverColor = useColorModeValue('#FF7A08', 'white');
    const popoverContentBgColor = useColorModeValue('gray.500', 'gray.800');
    const { user } = useAuth()
    return (
      <Stack direction={'row'} spacing={8}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'0.938rem'}
                  fontWeight={500}
                  letterSpacing={1}
                  fontFamily={'Roboto'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                    fontWeight: 800,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
        { user &&  
            <Flex direction={'column'} align={'center'}>
            <Image
                borderRadius='full'
                boxSize='32px' 
                src={user?.photoURL}
                alt='image'
            /> 
            </Flex>
          }
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('#FF7A08', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'gray.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('#FF7A08', '#0a0b09')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
            color: '#FF7A08',
          }}>
          <Text
            _hover={{
              textDecoration: 'none',
              color: '#FF7A08',
            }}          
            fontWeight={600}
            color={useColorModeValue('white', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
   
  const NAV_ITEMS = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Nossa História',
      href: '/',
    },
    {
      label: 'Cardápio',
      href: '/',
    },        
    {
      label: 'Contato',
      href: '/',
    },
  ];