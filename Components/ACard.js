import { Card } from '@mantine/core'
import React from 'react'

function ACard({Body, shadow = 'md', p = 'sm', style = {}}) {
  return (
    <Card style={style} p = {p} color='dark' shadow={shadow}>
        {Body}
    </Card>
  )
}

export default ACard