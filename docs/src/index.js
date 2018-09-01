import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { Head } from 'mdx-go'
import H, {
  Div,
  H1,
} from '../..'

const scope = Object.keys(H)
  .filter(key => /^[A-Z]/.test(key))
  .reduce((a, key) => ({ ...a, [key]: H[key] }), {})

const code = `<Div css={{
  padding: '64px'
}}>
  <H1 css={{
    margin: 0,
    marginBottom: '32px',
    display: 'inline-block',
    fontSize: '48px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '32px',
    paddingRight: '32px',
    color: 'white',
    backgroundColor: 'red',
    transform: 'skew(-6deg)',
    '@media screen and (min-width: 48em)': {
      fontSize: '64px'
    }
  }}>
    Horror
  </H1>
  <P css={{
    margin: 0,
    marginBottom: '32px',
    fontSize: '20px',
    fontWeight: 'bold'
  }}>
    React HTML elements with CSS-in-JS
  </P>
  <Pre css={{
    fontFamily: 'Menlo, monospace',
    fontSize: '14px',
    color: 'red'
  }}>
    npm i horror
  </Pre>
  <A href='https://github.com/jxnblk/horror'
    css={{
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-block',
      padding: '16px',
      borderRadius: '4px',
      color: 'white',
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: '#900',
      }
    }}>
    GitHub
  </A>
</Div>`

const transform = src => `<React.Fragment>
${src}
</React.Fragment>`

const breakpoint = '@media screen and (min-width: 48em)'

const Editor = props =>
  <H
    {...props}
    is={LiveEditor}
    css={{
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      margin: 0,
      padding: '16px',
      color: 'red',
      backgroundColor: '#300',
      ...props.css
    }}
  />

const Err = props =>
  <H
    is={LiveError}
    css={{
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      margin: 0,
      padding: '16px',
      color: 'white',
      backgroundColor: 'red',
      ...props.css
    }}
  />

const Flex = props =>
  <Div
    {...props}
    css={{
      minHeight: '100vh',
      [breakpoint]: {
        display: 'flex'
      }
    }}
  />

export const Root = props => props.children

export default class extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Horror</title>
          <meta name='description' content='React HTML elements with CSS-in-JS' />
        </Head>
        <LiveProvider
          code={code}
          scope={scope}
          transformCode={transform}
          mountStylesheet={false}>
          <Err />
          <Flex>
            <Div
              css={{
                [breakpoint]: {
                  width: '65%'
                }
              }}
            >
              <LivePreview />
            </Div>
            <Editor
              css={{
                [breakpoint]: {
                  width: '35%'
                }
              }}
            />
          </Flex>
        </LiveProvider>
      </React.Fragment>
    )
  }
}
