---
title: 'Power of SVG'
date: '2020-12-14'
path: react.js-hooks-gg
tags: '#styled-components #framer-motion #svg'
image: /assets/loader.jpg
seo: 'react hooks, react.js, javascript'
---

## Lets Transform the component 
Animation
## useState 

```js
const [value, setValue] = useState('')
```
Where value is the variable to which we will bind the state, setState is the method to be called to update it and the parameter passed to useState is the state's default value.

## 1) We change the declaration of the component into a functional one.



https://g5hbz.csb.app/


Your browser does not support the video tag.
</video>
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

This is great, as writing functional components is often preferred by the community as they offer advantages, code that is easier to read and maintain, easier to test and often following better practices.Let's get started and overview some of them.

## Let's review old classic class-based component and convert it to functional component.

```js
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right,#68849c, #8aa4ba);
  z-index: 1;
`

const Svg = styled(motion.svg)`
  width: 500px;
  height: auto;
  overflow: visible;
  stroke: #fff;
  stroke-width: 0.5;

  &:hover {
      cursor: pointer
  }
`
const containerVariants = {
    hidden: {},
    visible: {},
    exit: {
        opacity: 0.3,
        transition: { ease: 'easeOut', duration: 1.3 }
    }
}

const svgVariants = {
    visible: {
        transition: {
            type: 'spring',
            staggerChildren: 0.4,
            when: 'beforeChildren',
        }
    },
    exit: {
        x: 50,
        y: 50,
        scale: 0.7,
        transition: { ease: 'easeOut', duration: 1.4 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0.4,
        pathLength: 0,
        fill: 'rgba(0, 0, 0, 0.1)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(0, 0, 0, 0.3)',
        transition: {
            duration: 7,
            ease: 'easeInOut',
        }
    }
}

const Loader = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <Container
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 150"
                        variants={svgVariants}
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={0.1}
                    >
                        <motion.path variants={pathVariants} d="M 0 22.16 0 33.04 97.5 16.52 97.5 0 0 22.16z" />
                        <motion.path variants={pathVariants} d="M 97.5 16.52 97.5 0 139 22.16 139 33.04 97.5 16.52z" />
                        <motion.path variants={pathVariants} d="M 0 38.68 0 49.56 83 40.29 83 25.38 0 38.68z" />
                        <motion.path variants={pathVariants} d="M 83 40.29 83 25.38 139 38.68 139 49.56 83 40.29z" />
                        <motion.path variants={pathVariants} d="M 0 53.59 0 64.46 63.26 62.05 63.26 47.95 0 53.59z" />
                        <motion.path variants={pathVariants} d="M 63.26 62.05 63.26 47.95 139 53.59 139 64.46 63.26 62.05z" />
                        <motion.path variants={pathVariants} d="M 0 69.3 0 80.18 42.71 81.79 42.71 68.09 0 69.3z" />
                        <motion.path variants={pathVariants} d="M 42.71 81.79 42.71 68.09 139 69.3 139 80.18 42.71 81.79z" />
                        <motion.path variants={pathVariants} d="M 0 85.01 0 95.89 64.06 101.53 64.06 87.03 0 85.01z" />
                        <motion.path variants={pathVariants} d="M 64.06 101.53 64.06 87.03 139 85.01 139 95.89 64.06 101.53z" />
                        <motion.path variants={pathVariants} d="M 0 101.13 0 112.01 83 124.09 83 109.59 0 101.13z" />
                        <motion.path variants={pathVariants} d="M 83 124.09 83 109.59 139 101.13 139 112.01 83 124.09z" />
                        <motion.path variants={pathVariants} d="M 0 116.44 0 127.32 97.5 148.67 97.91 130.14 0 116.44z" />
                        <motion.path variants={pathVariants} d="M 97.5 148.67 97.91 130.14 139 116.44 139 127.32 97.5 148.67z" />
                    </Svg>
                </Container>
            )}
        </AnimatePresence>
    )
}

export default Loader

```

# Another example

<img src="/assets/ezgif.com-gif-maker (2).gif"  alt="demo :)" />

All it does is allows the user to input something, which is saved in the components internal state and displayed bellow input field. But the useState hook will allow us to transform it into its functional component.

