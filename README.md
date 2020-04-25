# React using Gatsby.

### Simple personal webapp. You can see [Live Demo](https://kind-mestorf-5a2bc0.netlify.com)
```
If you interested you can view CMS interface simple by going to page/admin 
email: george@georgee.co.uk
password: admin1234
please do not add or delete content, just look how it works..
```
---
## Getting started:

### Setup

```
1. Clone the repository.
```

```
2. Install dependencies.
```

## Development workflow:

>🎉 To start your development process, Run `gatsby develop` in the terminal. This will prepare the project for work and launch watch tasks to update files on-the-fly as you work.

## Production build:

>👻 Production-ready files, Run `gatsby build` and grab entire `public` folder. 💜

# Technologies:
| **Tech** | **Description** |**Using** |
|----------|-------|----|
| **React** | Blazing fast workflow for static web with React.js | [Gatsby](https://www.gatsbyjs.org/), [React](https://reactjs.org/)
| **CSS**  | Compiled CSS styles, to automate the tedious BEM notation it's better to use CSS/SASS modules, Components are styled using it and inside pages folder is used styled-components.  | ([sass/modules](https://www.gatsbyjs.org/packages/gatsby-plugin-sass),[autoprefixer](https://github.com/postcss/autoprefixer),[helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)) [styled-components](https://www.styled-components.com/)
| **JavaScript** | It has been built with default configurations.. Also In this case used prop-types insted of TypeScript but at some points U can omit it at all. | [Babel](https://www.gatsbyjs.org/docs/babel/), [Typechecking](https://reactjs.org/docs/typechecking-with-proptypes.html) <br> [Customization](https://www.gatsbyjs.org/docs/customization/)
| **Offline-first** | Progressive Web App (PWA) | [Service worker](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)
| **GraphQL** | Compared to be an alternative and even replace to REST web services, 'in a couple of years'. But main reason of usage is that `Gatsby` is powered by GraphQL. | [GraphQL](https://graphql.org/)
| **DATA SOURCE** | In this case I used simple Markdown. But it can be any type of database, APIs. etc | [remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark) <br> [filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)
| **Hosting & CMS** |  Hosting and Serverless backend services for static websites. | [Netlify](https://www.netlify.com/), [Content Management System](https://www.netlifycms.org/)

# Project structure:
* ### public/ **#Production folder**

     Contains production-ready files: JavaScript and CSS bundles and all other dependency stuff.

* ### src/ **#Development folder**
    * **components/**
        * **'****'** #Components
  
    * **pages/**
        * **index.js** #Main page.
        * **contact/** #Contact form page.
        * **blog/** #Blog page with some content inside.
        * **about/**  #Info about me.
        * **gallery/** #Gallery.
        * **projects/** #Projects.
    * **templates/**  #Actual pages based on Markdown files.
        * **post/**
    * **markdown/** #Data source
        * **blog/**
        * **gallery/**
        * **projects/**


* ### / ***#Root files***

   - #### .gatsby-config
   
     >Can Include: siteMetadata, list of different plugins configurations. [more info](https://www.gatsbyjs.org/docs/gatsby-config/)

  - #### .gatsby-node

    > Basically it is used for database access, APIs call. In this case to create page based on Markdown file. [more info](https://www.gatsbyjs.org/docs/node-apis/)

  - #### .package.json

    > Gives some useful npm dependency information..

  - #### static/

     - ### admin/ #Contains [CMS](https://www.netlifycms.org/docs/add-to-your-site/) config files.
     - ### assets/   #Includes image files: '.jpeg', '.jpg', '.png', '.svg', '.mp4', 'webm', 'wav', 'mp3'..  [{image}](https://www.gatsbyjs.org/docs/adding-images-fonts-files/)

## Feedback

    When you have encountered a bug, or have a useful suggestion how to improve development.
    [Create a new issue](/React-Gatsby/issues).
