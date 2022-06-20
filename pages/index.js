import { CardSection, Group, SimpleGrid, Title, Text, Image, Card, useMantineTheme, Badge, BackgroundImage, Stack } from '@mantine/core'
import React from 'react'
import ACard from '../Components/ACard'
import ALinkButton from '../Components/ALinkButton'

function index() {
  const theme = useMantineTheme()
  return (
    <div>
      <Title style={{marginBottom: 10}}>Home</Title>
      <SimpleGrid cols={1} style={{marginBottom: 5}}>
        <ACard Body={
          <>
          <Card.Section>
            <Image src={'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
          </Card.Section>
          <Group position='apart' style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>Get to know us!</Text>
            <Badge color={'blue'} variant='light'>About Us</Badge>
          </Group>
          <Text style={{marginBottom: 5}} size='sm'>Know more about our business, goals and visions.</Text>
          <ALinkButton page='/about' title='About Us Page' color='blue' options={{
            from: 'filled', to: 'outline'
          }} fullWidth ={true}></ALinkButton>
          </>
        }></ACard>
      </SimpleGrid>
      <SimpleGrid cols={2} style={{marginBottom: 5}}>
        <ACard Body={
          <>
          
          <Group position='apart' style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>Our contacts</Text>
            <Badge color={'red'} variant='light'>Contacts</Badge>
          </Group>
          <Text style={{marginBottom: 5}} size='sm'>Our contact numbers, location and more!</Text>
          <ALinkButton page='/contact' title='Contact Us Page' color='red' options={{
            from: 'filled', to: 'outline'
          }} fullWidth ={true}></ALinkButton>
          </>
        }></ACard>
        <BackgroundImage radius={20} src={'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}></BackgroundImage>
      </SimpleGrid>
      <SimpleGrid cols={2} style={{marginBottom: 5}}>
        <BackgroundImage radius={20} src={'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}></BackgroundImage>
        <Stack spacing={'sm'}>
        <Card shadow={'md'}>
            <Text color={'green'} align='center'>Pricing</Text>
          </Card>
          <Card shadow={'md'}>
            <Text weight={500} color={'gray'} align='center'>FAQ</Text>
          </Card>
        </Stack>
      </SimpleGrid>
    </div>
  )
}

export default index