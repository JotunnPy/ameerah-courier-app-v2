import { BackgroundImage, Card, Group ,SimpleGrid, Image, Title, Container, Button, ActionIcon, ThemeIcon, useMantineTheme as MantineTheme, Text, Badge, Space, Divider } from '@mantine/core'
import React from 'react'
import {QuestionMark, ArrowDown} from 'tabler-icons-react'

function about() {
  const theme = MantineTheme()
  return (
    <>
    <Card shadow={theme.shadows.xl}> 
      <Card.Section>
        <Image height={200} src={'https://z-p3-scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/186484383_1735552889951550_3155623871822809380_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEdaYfifvx2WoT7JBIglYY37qU49stefrbupTj2y15-tlT6g4EQnD-2QqL3XWmdcFuTIejFo3vLOdv9NzN6Gtvh&_nc_ohc=5LEcTbgd2H4AX_LnTwO&_nc_ht=z-p3-scontent.fceb2-2.fna&oh=03_AVIE5PLED5wrnphM2rQHZ8MNsqFFOPi2dNzqul1kuuzTug&oe=62D89507'} />
      </Card.Section>
      <Group position='apart' style={{marginTop: theme.spacing.sm}}>
        <Text weight={600}> About Us </Text>
        <Badge variant='filled'>About Us</Badge>
      </Group>
      <Divider style={{marginTop: 10, marginBottom: 10}} />
      <Card shadow={theme.shadows.xl} style={{marginBottom: 10}}>
        <Group>
        <Badge>Business</Badge>
        <Text>
        We are a family-owned, Courier Service company providing services in Calgary and surrounding areas since 2018
        We offer Hotshot, Same day or courier service within alberta.
        </Text>
        </Group>
      </Card>
      <Card shadow={theme.shadows.xl} style={{marginBottom: 10}}>
        <Group>
        <Badge>Service</Badge>
        <Text>
        The on-time delivery rate for our business is consistently high, and our dispatch keeps our drivers and customers in continual contact to provide updates on the delivery.
        </Text>
        </Group>
      </Card>
      <Card shadow={theme.shadows.xl} style={{marginBottom: 10}}>
        <Group>
        <Badge>Personnel</Badge>
        <Text>  
        We employ a number of excellent people, all of whom have vast industry knowledge and expertise. For many years, our management team alone has offered courier services in Calgary and out-of-town delivery all across Alberta.
        </Text>
        </Group>
      </Card>
    </Card>
    </>
  )
}

export default about