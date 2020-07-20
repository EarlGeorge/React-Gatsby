import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Scrollbars } from 'react-custom-scrollbars'
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
      <Scrollbars
        renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: 'rgba(0, 0, 0, 0.70)', borderRadius: '3px', boxShadow: '0 0 2px 1px #c7d2ee' }} />
        }
      >
        <div className={style.layout}>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta
              name="author"
              content={data.site.siteMetadata.author}
            />
            <meta property="og:type" content="webapp,reactjs,front-end" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
          </Helmet>

          <Header />

          <div className={style.container} id='changesize'>{children}</div>

        </div>

        <Footer />
      </Scrollbars>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
