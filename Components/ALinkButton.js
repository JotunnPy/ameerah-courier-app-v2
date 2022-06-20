import { Button } from '@mantine/core'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'

function ALinkButton({icon , fullWidth = false, title = 'Button', page = '/', options = {
    from: 'filled',
    to: 'outline'
}, style = {
    
}, color='dark'}) {

    const [variant, setVariant] = useState(options.from)
    const [loading, setLoading] = useState(false)

    var onTouch = useCallback(()=>{
        setVariant(options.to)
    }, [])
    var onTouchEnd = useCallback(()=>{
        setVariant(options.from)
    }, []) 
    var startLoading = useCallback(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 300)
    }, [])
    var onHover = useCallback(()=>{
        setVariant(options.to)
    }, [])
    var onHoverEnd = useCallback(()=>{
        setVariant(options.from)
    }, [])

  return (
    <>
    <Link href={page}>
    <Button fullWidth={fullWidth} leftIcon={icon} onTouchStart={onTouch} onTouchEnd={onTouchEnd} color={color} style={style} onClick={startLoading} onMouseEnter={onHover} onMouseLeave={onHoverEnd} loading={loading}  variant={variant}>
        {title}
    </Button>
    </Link>
    </>
  )
}

export default ALinkButton