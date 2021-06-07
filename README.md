# Personal web implemented with Gatsby.

> https://george.davituri.dev

## Getting started:

```
2. Install dependencies.
```

## Development workflow:

> 🎉 To start your development process, Run `gatsby develop` in the terminal. This will prepare the project for work and launch watch tasks to update files on-the-fly as you work.

## Production build:

> 👻 Production-ready files, Run `gatsby build` and grab entire `public` folder. 💜

# Technologies:

| **Tech**          | **Description**                                                                                                                                               | **Using**                                                                                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **React**         | Blazing fast workflow for static web with React.js                                                                                                            | [Gatsby](https://www.gatsbyjs.org/), [React](https://reactjs.org/)                                                                                                                                                                                             |
| **CSS**           | Components are styled using CSS/SASS modules.. inside pages folder is used styled-components.                                                                 | ([sass/modules](https://www.gatsbyjs.org/packages/gatsby-plugin-sass),[autoprefixer](https://github.com/postcss/autoprefixer),[helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)) [styled-components](https://www.styled-components.com/) |
| **Offline-first** | Progressive Web App (PWA)                                                                                                                                     | [Service worker](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)                                                                                                                                                                                     |
| **GraphQL**       | Compared to be an alternative and even replace to REST web services, 'in a couple of years'. But main reason of usage is that `Gatsby` is powered by GraphQL. | [GraphQL](https://graphql.org/)                                                                                                                                                                                                                                |
| **DATA SOURCE**   | In this case I used simple Markdown. But it can be any type of database, APIs.                                                                                | [remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark) <br> [filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)                                                                                                           |
| **Hosting & CMS** | Hosting for static web.                                                                                                                                       | [Netlify](https://www.netlify.com/), [Content Management System](https://www.netlifycms.org/)                                                                                                                                                                  |

# Project structure:

- ### src/

  - **components/** \*\*\*\*

  - **pages/**
    - **index.js** #Main page.
    - **contact/** #Contact form page.
    - **blog/** #Blog page with some content inside.
    - **about/** #Info about me.
    - **gallery/** #Gallery.
    - **projects/** #Projects.
  - **templates/** #Actual pages based on Markdown files.
  - **markdown/** #Data source
    - **blog/**
    - **gallery/**
    - **projects/**

* ### / **_#Root files_**

  - #### .gatsby-config

    > Can Include: siteMetadata, list of different plugins configurations. [more info](https://www.gatsbyjs.org/docs/gatsby-config/)

  - #### .gatsby-node

    > Basically it is used for database access, APIs call. In this case to create page based on Markdown file. [more info](https://www.gatsbyjs.org/docs/node-apis/)

  - #### .package.json

    > Gives some useful npm dependency information..

  - #### static/

    - ### admin/ [CMS](https://www.netlifycms.org/docs/add-to-your-site/) config.
    - ### assets/

## Feedback

    If you have encountered a bug, or have a useful suggestion how to improve code
    create issue, or make a pull request!
