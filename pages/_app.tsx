import { AppProps } from 'next/app';
import Head from 'next/head';
import {Stack, AppShell, Burger, Button, Drawer, Group, Header, MantineProvider, MediaQuery, Text, Title } from '@mantine/core';
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
              <Header p={'md'} height={70}>
                <Group position='apart'>
                  <Title order={2} ml={20}>
                      <Text variant='gradient' gradient={{from: 'blue', to: 'teal'}} inherit>
                        Ameerah Courier
                      </Text>
                  </Title>
                  <MediaQuery smallerThan={'md'} styles={{display: 'none'}}>
                  <Group>
                    <Link href={'/#about-us'}><motion.a whileHover={{scale: 1.2}}><Button variant='subtle'>About Us</Button></motion.a></Link>
                    <Link href={'/#contact-us'}><motion.a whileHover={{scale: 1.2}}><Button variant='subtle'>Contact Us</Button></motion.a></Link>
                    <motion.a whileHover={{scale: 1.2}}><Button variant='subtle'>Pricing</Button></motion.a>
                  </Group>
                  </MediaQuery>
                  <Drawer position='top' size={90} onClose={()=> setOpened(!opened)} opened={opened}>
                        <Group position='center'>
                        <Link href={'/#about-us'}><motion.a whileHover={{scale: 1.2}}><Button onClick={()=>{setOpened(!opened)}} variant='subtle'>About Us</Button></motion.a></Link>
                        <Link href={'/#contact-us'}><motion.a whileHover={{scale: 1.2}}><Button onClick={()=>{setOpened(!opened)}} variant='subtle'>Contact Us</Button></motion.a></Link>
                        <motion.a whileHover={{scale: 1.2}}><Button onClick={()=>{setOpened(!opened)}} variant='subtle'>Pricing</Button></motion.a>
                        </Group>
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