import React from 'react'
import styled, { keyframes } from 'styled-components'
import { breakPoints } from '../components/MediaType'

// Components
import Layout from '../components/Layout'
import Form from '../components/ContactForm'
import Card from '../components/Card/index'
// SVG
import backgroundImg from '../../static/assets/1535921965916-1386c9716a66.jpg'
import cover from '../../static/assets/cover.jpg'
import partners from '../../static/assets/partners.svg'
import services from '../../static/assets/service.svg'
import social from '../../static/assets/social-icon.svg'

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

const ContactPage = styled.div`
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
const CardWrap = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 170px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;

  @media ${breakPoints.phone} {
    margin-top: 180px; 
    left: 7%; 
    width: 85%;
  }
`


const contactPage = () => {
  return (
    <Layout>
      <ContactPage>
        <TopImg src={cover} />
        <Background src={backgroundImg} />
        <Backend />
        <FormGrid>
          <Form />
        </FormGrid>
        <CardWrap>
          <Card title='Services' img={services} body='Computing, Coding, Engineering, Analytics, Unique UI, Collaboration, Startup, & more.' />
          <Card title='Partners' img={partners} body='We can collaborate, if I could be able to help you with your project/task, and convert it to the next 1bn Startup. Or even with already existing company : )' />
          <Card title='Find me on' img={social} body='GitHub, Twitter, Instagram, Bitbucket, Linkedin and in other social networks. Or make request for my resume.' />
        </CardWrap>
      </ContactPage>
    </Layout>
  )
}

export default contactPage
