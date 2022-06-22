import { Group, SimpleGrid, Title, Text, Image, Card, useMantineTheme as MantineTheme, Badge, BackgroundImage, Stack , Modal, Button} from '@mantine/core'
import {useState as UseState, useEffect as UseEffect} from 'react'
import TextTransition, {presets} from 'react-text-transition'
import AAnnouncement from '../Components/AAnnouncement'
import ACard from '../Components/ACard'
import ALinkButton from '../Components/ALinkButton'

const TEXTS = [
  "Fast",
  "Hassle-Free", 
  "Reasonably Priced"
];

function index() {
  const theme = MantineTheme()

  const [index, setIndex] = UseState(0)

  UseEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const [o, setO] = UseState(false)
  return (
    <div>
      <Group position='apart'><Title style={{marginBottom: 10, textShadow: '0px 0px 10px'}}>Home</Title>
      <Modal  onClose={()=>setO(false)} opened={o}>
        <Title style={{marginBottom: 10}}>Announcements</Title>
        <AAnnouncement  textTitle={'Website Release'} badgeTitle={'Info'} badgeColor={'blue'} addInfo={
          <Text size='sm'>Date: 20/06/22</Text>
        } />
      </Modal>
      <Button color={'yellow'} variant={'filled'} onClick={()=>{setO(true)}}>Announcements</Button>
      </Group>
      <Card className='gradient' shadow={'lg'} style={{marginBottom: 10}} p='md'>
      <Stack spacing='xs'>
      <Title style={{color:'white', textShadow: '0px 0px 10px'}} order={1}>
      <TextTransition inline springConfig={presets.wobbly}>
      {TEXTS[index % TEXTS.length]}
      </TextTransition>
      </Title>
      <Title style={{color:'white', textShadow: '0px 0px 10px'}} order={1}>
      {" Delivery Service"}
      </Title>
      </Stack>
      </Card>
      <SimpleGrid cols={1} style={{marginBottom: 15}}>
        <ACard Body={
          <>
          <Card.Section>
            <Image src={'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
          </Card.Section>
          <Group position='apart' style={{marginBottom: 15, marginTop: theme.spacing.sm}}>
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
      <SimpleGrid cols={2} style={{marginBottom: 10}}>
        <Card className='gradient2'>
          <Group position='apart' style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500} color='white'>Our contacts</Text>
            <Badge color={'red'} variant='filled'>Contacts</Badge>
          </Group>
          <Text color='white' style={{marginBottom: 5}} size='sm'>Our contact numbers, location and more!</Text>
          <ALinkButton page='/contact' title='Contact Us Page' color='red' options={{
            from: 'filled', to: 'outline'
          }} fullWidth ={true}></ALinkButton>
        </Card>
        <BackgroundImage radius={20} src={'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}></BackgroundImage>
      </SimpleGrid>
      <SimpleGrid cols={2} style={{marginBottom: 5}}>
        <BackgroundImage radius={20} src={'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}></BackgroundImage>
        <Stack spacing={'sm'}>
        <Card shadow={'md'}>
          
            <Text weight={500} color={'green'} align='center'>Pricing</Text>
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