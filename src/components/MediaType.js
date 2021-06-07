//  media queries for styled-components, only used inside pages folder.

const sizes = {
  desktop: 2560,
  tabletLarge: 1200,
  tablet: 768,
  phone: 576,
}

const breakPoints = Object.keys(sizes).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${sizes[cur]}px)`
  return acc
}, {})

export { breakPoints }
