
# horror

:scream: React HTML elements with CSS-in-JS

```sh
npm i horror styled-components
```

## Quick Start

To create a Horror starter project, run:

```sh
npm init horror my-horror-project
```

## Usage

```jsx
import React from 'react'
import { Div, H1 } from 'horror'

export default props =>
  <Div css={{
    padding: '32px'
  }}>
    <H1 css={`color: red;`}>
      Horror
    </H1>
  </Div>
```

- Includes all HTML elements
- Use object literal or CSS syntax
- Style any component
- Support for [styled-components][sc] or [emotion][emotion]

## HTML Tags

Changing the underlying HTML tag can be done in any of the following ways:

- Importing the tag directly: `import { Header } from 'horror'`
- Using a key on the default import: `<Horror.header />`
- Using the `is` prop: `<Horror is='header' />`
- Using the styled-components API: `const H1 = Horror.withComponent('h1')`

## Using Custom Components

To use a custom component, pass it to the `is` prop:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'
import H from 'horror'

const RedLink = props =>
  <H
    {...props}
    is={Link}
    css={{
      color: 'red'
    }}
  />
```

## Creating Style Components

Horror can be used to create component primitive abstractions, similar to using [styled-components][sc] or [react-emotion][emotion],
but with a more React-like syntax.

```jsx
import React from 'react'
import H from 'horror'

const Button = ({
  primary,
  ...props
}) =>
  <H.button
    {...props}
    css={{
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      margin: 0,
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
      verticalAlign: 'middle',
      appearance: 'none',
      border: 0,
      borderRadius: '4px',
      color: 'white',
      backgroundColor: primary ? '#07c' : '#444',
      '&:hover': {
        boxShadow: 'inset 0 0 0 64px rgba(0, 0, 0, .125)'
      }
    }}
  />

Button.displayName = 'Button'

export default Button
```

## Emotion

Horror also works with [emotion][emotion]:

```sh
npm i emotion react-emotion
```

```jsx
import H from 'horror/emotion'
```

## Related & Inspiration

- [styled-components][sc]
- [emotion][emotion]
- [jsxstyle](https://github.com/smyte/jsxstyle)
- [glamorous](https://github.com/paypal/glamorous)

[emotion]: https://github.com/emotion-js/emotion
[sc]: https://github.com/styled-components/styled-components/

[MIT License](LICENSE.md)
|
[Made by Compositor](https://compositor.io)
