import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import style from './layoutStyle.module.scss'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={style.layout}>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta name="author" content={data.site.siteMetadata.author} />
            <meta property="og:type" content="web" />
            <meta
              property="og:description"
              content={data.site.siteMetadata.description}
            />
            <meta property="og:title" content={data.site.siteMetadata.title} />
          </Helmet>

          <Header />

          <div className={style.container} id="changesize">
            {children}
          </div>
        </div>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
