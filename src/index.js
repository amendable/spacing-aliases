import shortMiddleware from './shortMiddleware';

const defaultAliases = {
  marginX: ['marginRight', 'marginLeft'],
  marginY: ['marginBottom', 'marginTop'],
  paddingX: ['paddingRight', 'paddingLeft'],
  paddingY: ['paddingBottom', 'paddingTop'],
}

const aliasesMiddleware = ({ aliases }) => ({
  match: Object.keys(aliases),
  resolve: ({ key, value }) => aliases[key].reduce((obj, item) => {
    obj[item] = value;
    return obj;
  }, {}),
})

const spacingAliases = ({ short = true, aliases = defaultAliases } = {}) => {
  const list = []

  if (short) {
    list.push(shortMiddleware())
  }

  list.push(aliasesMiddleware({ aliases }))

  return list;
}

export { defaultAliases }
export default spacingAliases
