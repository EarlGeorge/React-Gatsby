import React from 'react'
import styled from 'styled-components'

import { breakPoints } from '../components/MediaType'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const AboutMe = styled.section`
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 1px 22px;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 1px;

  @media ${breakPoints.phone} {
    font-size: 17px;
  }
`
export default () => {
  return (
    <Layout>
      <Seo title="About" />
      <AboutMe>
        <p>
          My name is George Davituri. I am studying and researching Comp Sci
          which is slightly overused word LOL😂. Literally obsessed with coding
          & technology, overall. My knowledge in general is deep but, I have
          only been coding for a few years. Also I enjoy creating unique UI's
          using new/top trend Front-end libraries and frameworks.
          <br />
          <br />
          <br />I am now actively looking for some fun projects to work on. I
          like challenges of all sorts so if you are looking for someone to work
          with, don't hesitate to drop me a message with any suggestions.
          Looking forward to hearing from you!🙂
        </p>
        <marquee direction="right">I am from #საქართველო</marquee>
      </AboutMe>
    </Layout>
  )
}
