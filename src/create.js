import React from 'react'
import tags from 'html-tags'

const Tag = ({
  is = 'div',
  css,
  theme,
  ...props
}) => (
  React.createElement(is, props)
)

const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

const create = styled => {
  const H = styled(Tag)([], ({ css }) => css)
  tags.forEach(tag => {
    const T = cap(tag)
    H[tag] = H.withComponent(tag)
    H[tag].displayName = 'H.' + tag

    H[T] = H.withComponent(tag)
    H[T].displayName = 'H.' + T
  })
  return H
}

export default create
