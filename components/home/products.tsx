import { createStyles, Paper, SimpleGrid, Title, Card, MediaQuery, Stack } from '@mantine/core'
import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { ArticleCardImage } from '../mini/CategoryCard'
import {motion} from 'framer-motion'
const useStyles = createStyles((theme)=>({
    wrapper: {
        position: 'relative'
    },
    paper: {
        background: 'none',
        height: '150vh',
        zIndex: 1,
        [theme.fn.smallerThan('md')]: {
            height: 'auto'
        }
    },
    content: {

    },
    title: {
        color: 'white',
        textShadow: '0px 0px 10px black'
    }
}))

function Products() {
    const {classes} = useStyles() 
  return (
    <ParallaxBanner
    layers={[
        {
            image:  './products.jpg',
            speed: 20
        }
    ]}>
        <div className={classes.wrapper} id='shop'>
            <Paper className={classes.paper} p={'md'}>
                <Title mt={70} mb={60} className={classes.title} align='center'>Shop Categories</Title>
                <br />
                <br />
                <MediaQuery smallerThan={'md'} styles={{display: 'none'}}>
                <SimpleGrid cols={4}>
                    
                    <motion.div key={'elec'} initial={{opacity: 0}} transition={{duration: 1, delay: 0.5}} whileInView={{opacity: 1}}><ArticleCardImage category='Shop' title='Electronics' image='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' /></motion.div>
                    <motion.div key={'clot'}  initial={{opacity: 0}} transition={{duration: 1, delay: 1}} whileInView={{opacity: 1}}><ArticleCardImage category='Shop' title='Clothing' image='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' /></motion.div>
                    <motion.div key={'esse'}  initial={{opacity: 0}} transition={{duration: 1, delay: 1.5}} whileInView={{opacity: 1}}><ArticleCardImage category='Shop' title='Essentials' image='https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' /></motion.div>
                    <motion.div key={'cosm'}  initial={{opacity: 0}} transition={{duration: 1, delay: 2}} whileInView={{opacity: 1}}><ArticleCardImage category='Shop' title='Cosmetics' image='https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' /></motion.div>
                </SimpleGrid>   
                </MediaQuery>
                <MediaQuery largerThan={'md'} styles={{display: 'none'}}>
                    <Stack>
                    <ArticleCardImage category='Shop' title='Electronics' image='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    <ArticleCardImage category='Shop' title='Clothing' image='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' />
                    <ArticleCardImage category='Shop' title='Essentials' image='https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    <ArticleCardImage category='Shop' title='Cosmetics' image='https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
                    <br />
                    <br />
                    </Stack>
                </MediaQuery>
            </Paper>
        </div>

    </ParallaxBanner>
  )
}

export default Products