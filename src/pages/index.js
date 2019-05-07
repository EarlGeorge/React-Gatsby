import React from 'react'
import styled, {css, keyframes} from 'styled-components'


// Components
import Layout from '../components/Layout'
import Cube from '../components/Cube'
import Card from '../components/Card/index'

import bg from '../../static/assets/1451846704872-4c2a8e1468fe.jpg'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})


const cube = keyframes`
  0% {
    -webkit-transform: translateY(0) translateZ(0) rotateX(0deg);
    transform: translateY(0px) translateZ(0px) rotateX(0deg);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-10px) translateZ(1230px) rotateX(-35deg);
    transform: translateY(-10px) translateZ(1230px) rotateX(-35deg);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    opacity: 1;
    box-shadow: inset 0 0 0 100px rgba(89, 108, 134, 0.7);
  }
`

const Bg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Cubwrapp = styled.section`
  position: relative;
  top: -100px;
  height: 300px;
  max-width: 50%;
  clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
  margin: auto;
  padding: 4em 0 2em;
  display: grid;
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  justify-content: center;
  background: rgba(89, 108, 134, 0.9);
  color: white;
  animation: ${cube} 2.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

  h3 {
    position: relative;
    top: -35px;
    padding: 0 50px;
    font-size: 19px;
    letter-spacing: 2px;
  }

  ${media.phone`
    clip-path: none;
    animation: none;
    max-width: 90%;
    border-top-left-radius: 50px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 130px;
    overflow-x: hidden;
  `}
`

const Cubgrid = styled.div`
  position: relative;
  top: -220px;
  display: grid;
  justify-content: center; 
`

const Cardwrapp = styled.div`
  position: relative;
  width: 80%;
	margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 200px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: auto;

  ${media.phone`left: -8px;`}
`

const index = () => {
  return (
    <>
      <Bg src={bg}/>

      <Layout >
    
        <Cardwrapp >
          <Card title='Tech' body='Can contain bunch of buzzwords. : )'/>
          <Card title='Lifestyle' body='coding, collaboration, stories, innovation, funny moments, projects, chilling - hanging out.'/>
          <Card title='Spare time' body='coding, friends, cycling, documentary movies, music, movies, etc.'/>
        </Cardwrapp>

  
        <Cubwrapp>
          <h3>Thinking outside the BOX from inside : ))</h3>
          <Cubgrid> <Cube/> </Cubgrid>
        </Cubwrapp>


        <Cardwrapp >
          <Card />
          <Card />
          <Card />
          <Card />
        </Cardwrapp>
    
        
        <Cardwrapp >
          <Card />
          <Card />
          <Card />
          <Card />
        </Cardwrapp>
  
      </Layout>
    </>
  )
}

export default index
