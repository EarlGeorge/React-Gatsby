import React from 'react'
import styled, { keyframes } from 'styled-components'
import { breakPoints } from '../components/MediaType'

// Components
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Form from '../components/ContactForm'
import Social from '../components/Social'
// SVG
import backgroundImg from '../../static/assets/1535921965916-1386c9716a66.jpg'
import cover from '../../static/assets/cover.jpg'

const page = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`
const animate = keyframes`
  0% {
    transform: scaleZ(0);
    opacity: 0;
  }
  100% {
    transform: scaleZ(1);
    opacity: 1;
  }
`

const Container = styled.div`
  position: relative;
  top: 30px;
  width: 100%;
  height: 100%;
  animation: ${page} 2.0s ease-in-out;
`
const Background = styled.img`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${breakPoints.phone} {
    visibility: hidden;
  }
`
const TopImg = styled.img`
  position: absolute;
  width: 100%;
  height: 10%;
  opacity: 0.6;
  z-index: 100;

  @media ${breakPoints.phone} {
    visibility: hidden;
  }
`
const Backend = styled.div`
  position: absolute;
  top: 325px;
  margin-left: 270px;
  box-shadow:0px -7px 20px 3px #f3f3f3 ;
  z-index: 10;
  width: 40%;
  height: 580px;
  background: rgba(113, 132, 153, 0.609);

  @media ${breakPoints.tabletLarge} {
    top: 330px; 
    margin-left: 200px; 
    width: 50%; 
    height: 550px;
  }
  @media ${breakPoints.tablet} {
    top: 250px; 
    margin-left: 90px;
    width: 65%; 
    height: 550px;
  }
  @media ${breakPoints.phone} {
    visibility: hidden;
  }
`
const FormGrid = styled.div`
  position: absolute;
  top: 250px;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  animation: ${animate} 3.2s ease-in;

  @media ${breakPoints.tablet} {
    top: 170px; 
    margin-left: 15px;
  }
  @media ${breakPoints.phone} {
    top: 0; 
    left: 3%; 
    width: 85%;
  }
`
const Wrap = styled.div`
  position: relative;
  margin-top: 25px;
  margin-bottom: 150px;
  text-align: center;

  @media ${breakPoints.phone} {
    margin-top: 180px; 
    left: 7%; 
    width: 85%;
  }
`


const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <Seo title='Contact' />
        <TopImg src={cover} />
        <Background src={backgroundImg} />
        <Backend />
        <FormGrid>
          <Form />
        </FormGrid>
        <Wrap>
          <Social
            twitter='https://twitter.com/georgeDavituri'
          />
        </Wrap>
      </Container>
    </Layout>
  )
}

export default ContactPage
