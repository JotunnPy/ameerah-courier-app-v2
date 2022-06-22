
import Head from 'next/head';
import { ActionIcon, BackgroundImage, Divider, Drawer, MantineProvider, Modal, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react'
import {
    AppShell as Shell,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Stack,
  CSSObject
} from '@mantine/core';

import { 
    Home,
    QuestionMark,
    Hourglass,
    CashBanknote,
    PhoneCall,
    Moon,
    Sun
} from 'tabler-icons-react';
import ALinkButton from '../Components/ALinkButton';

//Export Values

export default function App(props) {
    
  const { Component, pageProps } = props;
  const theme = useMantineTheme();

  // Opened State

   const [opened, setOpened] = useState(false);

//Loading State

  const [colorScheme, setColorScheme] = useState('dark')

  const [actionColor, setActionColor] = useState('yellow')
  

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
          <Drawer  transition={'pop'} padding={'md'} title={<Title  p={'lg'}>Menu</Title>} onClose={()=>setOpened(false)} opened={opened}>
          <Stack >
            <Divider />
              <ALinkButton title='Home' icon={<Home></Home>} options={{
                from: 'subtle',
                to: 'filled'
              }} page='/'></ALinkButton>

              <ALinkButton icon={<QuestionMark></QuestionMark>} title='About' options={{
                from: 'subtle',
                to: 'filled'
              }} page='/about'></ALinkButton>

              <ALinkButton icon={<PhoneCall></PhoneCall>} title='Contact' options={{
                from: 'subtle',
                to: 'filled'
              }} page='/contact'></ALinkButton>

              <ALinkButton title='FAQ' icon={<Hourglass></Hourglass>} options={{
                from: 'subtle',
                to: 'filled'
              }} page='/faq'></ALinkButton>

              <ALinkButton style={{}} icon={<CashBanknote></CashBanknote>} options={{
                from: 'subtle',
                to: 'filled'
              }} title='Pricing' page='/pricing'></ALinkButton>
              <Stack>
                <ALinkButton title='Log In' options={{
                  from: 'subtle',
                  to: 'outline'
                }}></ALinkButton>
              </Stack>
              </Stack>
          </Drawer>
      }
      footer={
        <Footer  height={60} p="md" style={{background: ''}}>
          <ActionIcon color={actionColor} onClick={()=>{
            if(colorScheme == 'dark'){
              setColorScheme('light')
            }else{
              setColorScheme('dark')
            }
          }}>{colorScheme == 'dark' ? <Moon></Moon> : <Sun></Sun>}</ActionIcon>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.dark[6]}
                mr="xl"
              />
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