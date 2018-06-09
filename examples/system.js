// example with styled-system

import React from 'react'
import {
  width,
  fontSize,
  space,
  color,
} from 'styled-system'
import merge from 'deepmerge'
import H from '../src'

const compose = (...funcs) => props =>
  funcs.reduce((a = {}, fn) => merge(a, fn(props) || {}), {})

const coreSystem = compose(
  width,
  fontSize,
  space,
  color
)

const Box = props =>
  <H
    {...props}
    css={coreSystem(props)}
  />

export default props =>
  <Box p={3} bg='red'>
    <Box is='h1'
      fontSize={6}
      mt={5}
    >
      Hello styled-system
    </Box>
  </Box>
