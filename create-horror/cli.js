#!/usr/bin/env node
const init = require('initit')

const [ name ] = process.argv.slice(2)
const template = 'jxnblk/horror/examples/basic'

if (!name) {
  console.log(`name is required:

$ npm init horror my-project
  `)
  process.exit(1)
}

init({ name, template })
  .then(res => {
    console.log('project created:', name)
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
