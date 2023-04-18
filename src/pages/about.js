import React from 'react'
import styled from 'styled-components'

import { breakPoints } from '../components/MediaType'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const AboutMe = styled.section`
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 1px 22px;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;

  @media ${breakPoints.phone} {
    font-size: 17px;
  }
`
const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
`

const H2 = styled.h2`
  font-size: 28px;
  font-weight: 400;
`

export default () => {
  return (
    <Layout>
      <Seo title="About" />
      <AboutMe>
        <H1>George Davituri</H1>
        <H2>I'm software engineer</H2>
        <marquee direction="right">From #საქართველო</marquee>
      </AboutMe>
    </Layout>
  )
}
