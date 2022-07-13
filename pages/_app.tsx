import { AppProps } from 'next/app';
import Head from 'next/head';
import {Stack, Card, AppShell, Burger, Button, Drawer, Group, Header, MantineProvider, MediaQuery, Text, Title } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Link from 'next/link';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Head>
        <title>Ameerah Courier</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ParallaxProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <AnimatePresence exitBeforeEnter>
        <motion.div key={props.router.pathname} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.3}}>
          <AppShell
          header={
              <Header p={'md'} height={70} style={{background: 'none', borderBottom: 'none'}}>
                <Group position='apart'>
                  <Title order={2} ml={10}>
                      <Text color={'white'} style={{textShadow: '0px 0px 10px black'}} inherit>
                        Ameerah
                      </Text>
                  </Title>
                  <MediaQuery smallerThan={'md'} styles={{display: 'none'}}>
                  <Group>
                  <Link href={'/'}><motion.a whileHover={{scale: 1.2}}><Button variant='light'>Home</Button></motion.a></Link>
                  <Link href={'/#shop'}><motion.a whileHover={{scale: 1.2}}><Button variant='light'>Shop</Button></motion.a></Link>
                    <Link href={'/#about-us'}><motion.a whileHover={{scale: 1.2}}><Button variant='light'>About Us</Button></motion.a></Link>
                    <Link href={'/#contact-us'}><motion.a whileHover={{scale: 1.2}}><Button variant='light'>Contact Us</Button></motion.a></Link>
                    <motion.a whileHover={{scale: 1.2}}><Button variant='light'>Pricing</Button></motion.a>
                  </Group>
                  </MediaQuery>
                  <Drawer position='left' size={'xs'} onClose={()=> setOpened(!opened)} opened={opened}>
                        <Stack  align={'center'} justify={'center'}>
                        <Link href={'/'}><motion.a whileHover={{scale: 1.2}}><Button variant='filled'>Home</Button></motion.a></Link>
                        <Link href={'/#shop'}><motion.a whileHover={{scale: 1.2}}><Button variant='filled'>Shop</Button></motion.a></Link>
                    
                        <Link href={'/#about-us'}><motion.a whileHover={{scale: 1.2}}><Button onClick={()=>{setOpened(!opened)}} variant='filled'>About Us</Button></motion.a></Link>
                        <Link href={'/#contact-us'}><motion.a whileHover={{scale: 1.2}}><Button onClick={()=>{setOpened(!opened)}} variant='filled'>Contact Us</Button></motion.a></Link>
                        <motion.a whileHover={{scale: 1.2}}><Button onClick={()=>{setOpened(!opened)}} variant='filled'>Pricing</Button></motion.a>
                        </Stack>
                  </Drawer>
                  <MediaQuery largerThan={'md'} styles={{display: 'none'}}>
                    <Burger opened={opened} onClick={()=> setOpened(!opened)}>
                    </Burger>
                  </MediaQuery>
                </Group>
              </Header>
          }
          fixed>
          <Component {...pageProps} />
          </AppShell>
        </motion.div>
        </AnimatePresence>
      </MantineProvider>
      </ParallaxProvider>
    </>
  );
}