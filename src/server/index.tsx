import fs from 'fs'
import path from 'path'
import express from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import ListPage from '../client/pages/list'

const template: string = require('../index.html')

const server = express()
const staticDir = path.resolve(__dirname, '../../dist/server/static/s')

console.log(staticDir, 2)

server.use('/static', express.static('static'))

server.get('/index', (req, res) => {
    const renderedString = renderToString(<ListPage/>)
    res.send(template.replace('{{ ssr }}', renderedString))

})

server.listen(3000, () => {
    console.log('server is running')
})
