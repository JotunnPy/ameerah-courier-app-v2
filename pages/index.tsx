
import {Card, Container, Group, Title, Button, Paper } from '@mantine/core'
import React from 'react'
import ContactUs from '../components/home/contact'
import FeaturesTitle from '../components/home/features'
import Hero from '../components/home/hero'
import Products from '../components/home/products'
import { StatsRing } from '../components/home/stats'

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
    <br />
    <br />
    <ContactUs />
    </Paper>
    </>
  )
}

export default index