import React from 'react'
import {
  Div,
  Header,
  H1,
  P,
  Code,
} from 'horror'

const Title = props =>
  <H1
    {...props}
    css={{
      margin: 0,
      fontSize: '48px',
      padding: '8px',
      display: 'inline-block',
      color: 'white',
      backgroundColor: 'red',
    }}
  />

export default props =>
  <Div
    css={{
      padding: '32px',
    }}>
    <Header>
      <Title>
        Hello Horror
      </Title>
      <P>
        Edit the source code in <Code>pages/index.js</Code> to get started
      </P>
    </Header>
  </Div>
