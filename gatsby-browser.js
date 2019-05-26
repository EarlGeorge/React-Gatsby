/**

 * Implement Gatsby's Browser APIs in this file.

 *

 * See: https://www.gatsbyjs.org/docs/browser-apis/

 */


// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=gatsby-remark-prismjs
// Syntax highlighting for Blog Page

exports.onClientEntry = () => {

    require("prismjs/themes/prism-coy.css")
  
}