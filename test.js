import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import tags from 'html-tags'
import H from './src'
import E from './src/emotion'
import create from './src/create'

const renderJSON = el => render(el).toJSON()

test(`styled-components H renders`, t => {
  const json = renderJSON(
    React.createElement(H, { css: 'color: tomato;' })
  )
  t.snapshot(json)
})

tags.forEach(tag => (
  test(`styled-components H.${tag} renders`, t => {
    const json = renderJSON(
      React.createElement(H[tag], { css: 'color: tomato;' })
    )
    t.snapshot(json)
  })
))

test(`emotion H renders`, t => {
  const json = renderJSON(
    React.createElement(E, { css: 'color: tomato;' })
  )
  t.snapshot(json)
})

tags.forEach(tag => (
  test(`emotion H.${tag} renders`, t => {
    const json = renderJSON(
      React.createElement(E[tag], { css: 'color: tomato;' })
    )
    t.snapshot(json)
  })
))

// fixture
const styled = Component => (...styles) => {
  class Styled extends React.Component {
    render () {
      const style = styles.reduce((a, b) => {
        const sx = typeof b === 'function'
          ? b(this.props)
          : b
        return { ...a, ...sx }
      }, {})

      return <Component {...this.props} style={style} />
    }
  }
  Styled.withComponent = () => Styled
  return Styled
}

test('creates custom styled components', t => {
  const C = create(styled)
  const json = renderJSON(
    <C css={{ color: 'tomato' }} />
  )
  t.snapshot(json)
})
