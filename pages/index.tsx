
import {Card, Container, Group, Title, Button, Paper, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import ContactUs from '../components/home/contact'
import FeaturesTitle from '../components/home/features'
import Hero from '../components/home/hero'
import Products from '../components/home/products'
import Review from '../components/home/Review'
import { StatsRing } from '../components/home/stats'
import Carousel from '../components/mini/Carousel'

function index() {
  return (
    <>
    <Hero />
    <Products />
    <Paper p={'md'}>
    <FeaturesTitle />
    <StatsRing data={[
      {
        label: 'Customers Served',
        stats: '1000+',
        progress: 60,
        color: 'green',
        icon: 'up'
      },
      {
        label: 'Satisfactory Rate',
        stats: '98%',
        progress: 80,
        color: 'teal',
        icon: 'up'
      },
      {
        label: 'Packages delivered on time',
        stats: '100%',
        progress: 100,
        color: 'lightgreen',
        icon: 'up'
      }
    ]} />
    <br />
    <br />
    <Title mt={30} className='quotation' style={{color: 'white'}} align='center'>What do customers think about <br /> <Text component='span' variant='gradient' inherit gradient={{from: 'orange', to: 'red'}}>Ameerah Star</Text> ?</Title> 
    <br />
    <br />
    <br />
    <br />
    <ContactUs />
    </Paper>
    </>
  )
}

export default index