import React, {useEffect, useState} from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Modal } from '@mantine/core';
import { ReceiptOff, Flame, CircleDotted, FileCode, MailFast, Car, Certificate, Send } from 'tabler-icons-react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 0
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: MailFast,
    title: 'Fast Delivery',
    description: 'We believe that time is gold, expect us to deliver your package with speed.',
    gradient: {from: 'yellow', to: 'orange'}
  },
  {
    icon: Car,
    title: 'A smart choice',
    description: 'We are diligent in our duties, expect your package to be delivered with care.',
    gradient: {from: 'red', to: 'orange'}
  },
  {
    icon: Certificate,
    title: 'Trusted',
    description:
      'We are worthy of your trust, by choosing us you can rest assured of honorable and honest work.',
  },
  {
    icon: Send,
    title: 'Hassle-Free',
    gradient: {from: 'green', to: 'teal'},
    description:
      'Services are meant for you to do less effort and focus on what is important. ',
  },
];

export default function FeaturesTitle() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false)
  const [observe, inView] = useInView({threshold: 0.2})
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={feature.gradient || { deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));
  
  //Animation part
  const animation = useAnimation()
  useEffect(() => {
    if(inView){
        animation.start({
            x: 0,
            opacity: 1,
            
            transition: {
                type: 'spring',
                duration: 0.6,
                delay: 0.3,
                bounce: 0.3
            }
        })
    }
    if(!inView){
        animation.start({
            x: '100vh'
            , opacity: 0
        })
    }
  },[inView])
  
  return (
    <div ref={observe} className={classes.wrapper} id='about-us'>
        <br />
      <motion.div animate={animation}>
      <Grid mt={10} gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            With us, you have <Text inherit component='span' variant='gradient' gradient={{from: 'yellow', to: 'orange'}}>speed</Text> in your deliveries.
          </Title>
          <Text color="dimmed">
            The on-time delivery rate for our business is consistently high, and our dispatch keeps our drivers and customers in continual contact to provide updates on the delivery.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
            onClick={()=> setOpened(!opened)}
          >
            <Modal opened={opened} onClose={()=> setOpened(!opened)}>
            We are a family-owned, Courier Service company providing services in Calgary and surrounding areas since 2018 We offer Hotshot, Same day or courier service within alberta. <br />
            The on-time delivery rate for our business is consistently high, and our dispatch keeps our drivers and customers in continual contact to provide updates on the delivery. <br />
            We employ a number of excellent people, all of whom have vast industry knowledge and expertise. For many years, our management team alone has offered courier services in Calgary and out-of-town delivery all across Alberta.
            </Modal>
            Read More
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
      </motion.div>
    </div>
  );
}