#!/usr/bin/env node

// chmod +x async.js


const { readFile } = require('fs')

const file = process.argv[2]
// const [,,file] = process.argv

if (file) {
  readFile(file, (err, data) => {
    if (err) throw err;
    process.stdout.write(`${data}\n`)
  })
} else {
  console.error("No file arg!")
}
