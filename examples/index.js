import React from 'react'
import tags from 'html-tags'
import voids from 'html-tags/void'
import H, { H2 } from '../index'

const demoCSS = `color: red;
font-size: 32px;
text-transform: uppercase;
letter-spacing: 0.1em;
margin: 0;
`

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


export default class extends React.Component {
  state = {
    css: demoCSS,
    type: 'h2',
  }

  update = (fn) => this.setState(fn)

  render () {
    const {
      type,
      css
    } = this.state

    return (
      <H css={{ padding: '32px' }}>
        <H.header>
          <H.h1 css='color:red'>Horror</H.h1>
          <H is='h2'>
            React HTML elements with CSS-in-JS
          </H>
          <H.pre>npm i horror</H.pre>
          <Button primary>Beep</Button>
        </H.header>
        <H css={{
          paddingTop: '48px',
          paddingBottom: '48px',
        }}>
          <H2>
            Demo
          </H2>
          <H css={{ display: 'flex' }}>
            <H css={{}}>
              {React.createElement(H, {
                is: type,
                css,
                children: voids.includes(type) ? undefined : 'Demo'
              })}
            </H>
            <H css={{}}>
              <H.select
                type='text'
                name='type'
                value={type}
                onChange={e => {
                  this.update({ type: e.target.value })
                }}>
                {tags.map(t => (
                  <option
                    key={t}
                    value={t}
                    label={t}
                  />
                ))}
              </H.select>
              <H.textarea
                name='css'
                value={css}
                onChange={e => {
                  this.update({ css: e.target.value })
                }}
              />
            </H>
          </H>
        </H>
      </H>
    )
  }
}
