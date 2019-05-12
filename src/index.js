import shortMiddleware from './shortMiddleware';

const marginX = () => ({
  match: 'marginX',
  resolve: ({ key, value }) => ({
    marginRight: value,
    marginLeft: value
  }),
})

const marginY = () => ({
  match: 'marginY',
  resolve: ({ key, value }) => ({
    marginTop: value,
    marginBottom: value
  }),
})

const paddingX = () => ({
  match: 'paddingX',
  resolve: ({ key, value }) => ({
    paddingRight: value,
    paddingLeft: value
  }),
})

const paddingY = () => ({
  match: 'paddingY',
  resolve: ({ key, value }) => ({
    paddingTop: value,
    paddingBottom: value
  }),
})

const spacingAliases = ({ short = true } = {}) => {
  const list = []

  if (short) {
    list.push(shortMiddleware())
  }

  list.push(marginX())
  list.push(marginY())
  list.push(paddingX())
  list.push(paddingY())

  return list;
}

export default spacingAliases
