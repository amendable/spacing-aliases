# Spacing aliases

This allows you to use shorthand aliases for spacing props (`marginX`, `py`, `paddingY`, etc.). 

## Usage
```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import spacingAliases from '@amendable/spacing-aliases'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      spacingAliases(),
      inlineStyles()
    ]}
  >
    <Box paddingX={2} paddingY={1} color='white' backgroundColor='black'>
      Padded box
    </Box>
  </AmendableProvider>
)
```

## Supported props

It supports longer forms as described [here](https://github.com/amendable/spacing-aliases/blob/master/src/index.js#L3-L8).

The shorter form syntax thats supported is [here](https://github.com/amendable/spacing-aliases/blob/master/src/shortMiddleware.js).
