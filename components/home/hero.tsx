import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import TextTransition, {presets} from 'react-text-transition';
import { ParallaxBanner } from 'react-scroll-parallax';
import Link from 'next/link';
const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: theme.spacing.xl * 3,
      paddingTop: 0,
      justifyContent: 'center'
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 50,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

const TEXTS:string[]  = [
    "Fast",
    "Hassle-Free",
    "Affordable"
]

export default function Hero() {
  const { classes } = useStyles();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
        <ParallaxBanner
        layers={[
            {
                image: 'https://z-p3-scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/289546669_343251217971420_3021243269155834777_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEZ24dLPI52E1efvtreNS1BSK7fr5xL8ehIrt-vnEvx6OubAgJX39tEfw9joQOV8jUASRFvzB3F5DCcv78GeSJ4&_nc_ohc=ZlNRwsVNgeAAX_qmffm&_nc_ht=z-p3-scontent.fceb2-1.fna&oh=03_AVI1MqDbnBgfd7ClbLH_soTSzPoQ5DJtEj18NWz0n0qMsw&oe=62F33E57',
                speed: 30
            }
        ]}>
        <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.4}}>
                            <TextTransition springConfig={presets.wobbly}>
                                <Text variant='gradient' gradient={{from: 'orange', to: 'red'}} className={classes.title}>
                                    {TEXTS[index % TEXTS.length]}
                                </Text>
                            </TextTransition>  
                        <Title className={classes.title}>Delivery</Title>
                    </motion.div>
                    
                        <Text className={classes.description} size="xl" mt="xl">
                        Your package is in spectacular hands. To schedule a pick up or delivery, call us today!
                        </Text>

                    <Link href='/#about-us'><Button component='a' variant="gradient" size="xl" radius="xl" className={classes.control}>
                        Get started
                    </Button></Link>
                </Container>
            </div>
        </ParallaxBanner>
  );
}