import React from 'react'
import tags from 'html-tags'
import cap from './cap'

const Tag = ({
  is = 'div',
  css,
  theme,
  ...props
}) => (
  React.createElement(is, props)
)

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
