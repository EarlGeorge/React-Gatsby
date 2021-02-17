import React from 'react'
import styled from 'styled-components'
import { breakPoints } from '../components/MediaType'

// Components
import Layout from '../components/Layout'
import Cube from '../components/Cube'
import Card from '../components/Card/index'
import cloudPng from '../../static/assets/clouds.png'

const CubWrapp = styled.section`
  position: relative;
  overflow: hidden;
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
  background: rgba(89, 108, 134, 0.7);
  color: white;
  animation: cube 2.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

  @keyframes cube {
    0% {
      transform: translateY(0px) translateZ(0px) rotateX(0deg);
      transform-origin: top center;
      opacity: 0;
    }
    100% {
      transform: translateY(-10px) translateZ(1230px) rotateX(-35deg);
      transform-origin: top center;
      opacity: 1;
      box-shadow: inset 0 0 0 100px rgba(89, 108, 134, 0.7);
    }
  }

  h3 {
    position: relative;
    top: -35px;
    padding: 0 50px;
    font-size: 19px;
    letter-spacing: 2px;
  }

  @media ${breakPoints.phone} {
    clip-path: none;
    animation: none;
    max-width: 90%;
    border-top-left-radius: 50px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 130px;
    overflow-x: hidden;
  }
`

const CubGrid = styled.div`
  position: relative;
  top: -220px;
  display: grid;
  justify-content: center; 
  z-index:5000;
`

const CardWrapp = styled.div`
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
`
const Clouds = styled.div`
  position: absolute;
  display: grid;
  justify-content: center; 
  width: 850em;
  height: 100%;
  animation: cloudLoop 240s linear both infinite ;
  background-image: url(${cloudPng});
  background-color: rgba(79,129,179,0.3);
  opacity: 0.8;

  @keyframes cloudLoop {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0); 
    } 
  }
`

const Index = () => {
  return (
    <Layout>
      <CardWrapp>
        <Card
          title='Tech'
          body='Can contain bunch of buzzwords  lul'
        />
        <Card
          title='Lifestyle'
          body='coding, collaboration, innovation, funny moments, projects, chillin - hanging out.'
        />
        <Card
          title='Spare time'
          body='coding, documentary movies, music, movies, etc.'
        />
      </CardWrapp>
      <CubWrapp>
        <h3>Thinking outside the BOX</h3>
        <CubGrid>
          <Cube />
        </CubGrid>
        <Clouds />
      </CubWrapp>
    </Layout>
  )
}

export default Index

