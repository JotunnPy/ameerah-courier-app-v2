import { ActionIcon, Group, MediaQuery } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import React, { ReactNode, useEffect, useState, useCallback } from 'react'
import { ArrowBack, ArrowForward } from 'tabler-icons-react'
import {motion, useAnimation} from 'framer-motion'


interface CarouselArgs{
    layers: JSX.Element[],
    delay: number,
    
}
function Carousel({layers , delay}:CarouselArgs) {
  const [currIndex, setCurrIndex] = useState(0)
  const animation = useAnimation()
  return (
    <>
      <motion.div animate={animation}>
        {layers[currIndex]}
      </motion.div>
      <ActionIcon ml={20} variant='filled' color={'gray'} size={'xl'}
        onClick={()=>{
          if(layers[currIndex - 1] != null){
            setCurrIndex((s)=> s - 1)
          }
        }}><ArrowBack /></ActionIcon>
      <ActionIcon variant='filled' color={'gray'} size={'xl'}
      onClick={()=>{
         animation.start({
          opacity: [1,0,1],
          transition: {
            duration: 1
          }
        })
          setTimeout(()=>{
            if(layers[currIndex + 1] != null){
              setCurrIndex((s)=> s + 1)
            }else{
              setCurrIndex(0)
            }
          }, 800)
      }}><ArrowForward /></ActionIcon>
    </>
  )
}

export default Carousel