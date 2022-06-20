import React from 'react'
import {Card, Group, Text, Badge} from '@mantine/core'

function AAnnouncement({badgeTitle, textTitle, badgeColor, addInfo}) {
  return (
    <Card shadow={'lg'} p='md' style={{marginBottom: 10}}>
        <Group position='apart'>
            <Text weight={'500'}>{textTitle}</Text>
            <Badge color={badgeColor}>{badgeTitle}</Badge>
            {addInfo}
        </Group>
    </Card>
  )
}

export default AAnnouncement