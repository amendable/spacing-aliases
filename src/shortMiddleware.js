const shortRegex = /\A([mp])([xytblr])\z/;
const replaces = {
  m: 'margin',
  p: 'padding',
  x: 'X',
  y: 'Y',
  t: 'Top',
  b: 'Bottom',
  l: 'Left',
  r: 'Right',
}

const shortMiddleware = () => ({
  match: shortRegex,
  resolve: ({ key, value }) => {
    const matches = key.match(shortRegex)
    const prefix = replaces[matches[1]]
    const suffix = replaces[matches[2]]

    return {
      [`${prefix}${suffix}`]: value,
    }
  }
})

export default shortMiddleware
