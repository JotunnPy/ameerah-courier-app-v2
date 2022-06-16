import { AppProps } from 'next/app';
import Link from 'next/link'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react'
import {
    AppShell as Shell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  Title,
  Box,
  SimpleGrid,
  Stack,
  Image,
  Group,
  Container,
} from '@mantine/core';

import { 
    Home,
    QuestionMark,
    Phone,
    Hourglass,
    CashBanknote,
    BrandGoogle,
    Sunrise
} from 'tabler-icons-react';

export default function App(props) {
    
  const { Component, pageProps } = props;
  const theme = useMantineTheme();

  // Opened State

  const [opened, setOpened] = useState(false);

//Loading State

  const [homeLoading, setHomeLoading] = useState(false)
  const [aboutLoading, setAboutLoading] = useState(false)
  const [contactLoading, setContactLoading] = useState(false)
  const [FAQLoading, setFAQLoading] = useState(false)
  const [pricingLoading, setPricingLoading] = useState(false)

  const [colorScheme, setColorScheme] = useState('light')

  //Variant State

  const [homeColor, setHomeColor] = useState("outline")
  const [aboutColor, setAboutColor] = useState("outline")
  const [contactColor, setContactColor] = useState("outline")
  const [pricingColor, setPricingColor] = useState("outline")
  const [FAQColor, setFAQColor] = useState("outline")
  const [googleColor, setGoogleColor] = useState('gradient')

  //Active state

  

  return (
    <>
      <Head>
        <title>Ameerah Courier</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
        }}
      >
    <Shell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 150, lg: 250 }}>
          <Stack spacing={'xs'}>
          <Link scroll={false} href={'/'}>
          <Button leftIcon={<Home></Home>} onMouseLeave={()=>{setHomeColor('outline')}} onMouseEnter={()=>{setHomeColor('gradient')}} loading={homeLoading} onClick={()=> {
            setHomeLoading(true)
            setOpened(false)
            setTimeout(()=>{
                setHomeLoading(false)
            }, 300)
          }} variant={homeColor} gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Home</Button>
          </Link>
          <Link scroll={false} href='/about'>
          <Button onMouseLeave={()=>{setAboutColor('outline')}} onMouseEnter={()=>{setAboutColor('gradient')}} loading={aboutLoading} onClick={()=>{
            setAboutLoading(true)
            setOpened(false)
            setTimeout(()=>{
                setAboutLoading(false)
            }, 300)
          }} leftIcon={<QuestionMark />} variant={aboutColor} gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>About</Button>
          </Link>
          <Link scroll={false} href={'/contact'}>
          <Button onMouseLeave={()=>{setContactColor('outline')}} onMouseEnter={()=>{setContactColor('gradient')}} loading={contactLoading} onClick={()=>{
            setContactLoading(true)
            setOpened(false)
            setTimeout(()=>{
                setContactLoading(false)
            }, 300)
          }}  leftIcon={<Phone/>} variant={contactColor} gradient={{ from: 'indigo', to: 'cyan' }}>Contact</Button></Link>
          <Link scroll={false} href={'/faq'}>
          <Button onMouseLeave={()=>{setFAQColor('outline')}} onMouseEnter={()=>{setFAQColor('gradient')}} loading={FAQLoading} onClick={()=>{
            setOpened(false)
            setFAQLoading(true)
            setTimeout(()=>{
                setFAQLoading(false)
            }, 300)
          }}  leftIcon={<Hourglass/>} variant={FAQColor} gradient={{ from: 'orange', to: 'red' }}>F.A.Q</Button>
          </Link>
          <Link scroll={false} href={'/pricing'}>
          <Button onMouseLeave={()=>{setPricingColor('outline')}} onMouseEnter={()=>{setPricingColor('gradient')}} loading={pricingLoading} onClick={()=>{
            setPricingLoading(true)
            setOpened(false)
            setTimeout(()=>{
                setPricingLoading(false)
            }, 300)
          }}  leftIcon={<CashBanknote/>} variant={pricingColor} gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Pricing</Button>
          </Link>
          </Stack>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 150, lg: 250 }}>
            <Stack>
            <Button>Log In</Button>
            <Button>Register</Button>
            <Button leftIcon={<BrandGoogle></BrandGoogle>} gradient={{from: 'teal', to: 'green'}} onMouseLeave={()=>{setGoogleColor('gradient')}} onMouseEnter={()=>{setGoogleColor('outline')}}  variant={googleColor}>Sign-In with Google</Button>
            </Stack>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
        <Group>
        <Button onClick={()=>{
            if(colorScheme == 'light'){
                setColorScheme('dark')
            }else{
                setColorScheme('light')
            }
        }} color={'dark'}><Sunrise></Sunrise></Button>
            <Button>Call Us</Button>
        </Group>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Title  order={3}>Ameerah Courier</Title>
          </div>
        </Header>
      }
    >
        <Component {...pageProps} />
    </Shell>
      </MantineProvider>
    </>
  );
}