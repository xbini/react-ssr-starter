import express from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import ListPage from '../client/pages/list'
import { TOPICS } from '../core/core-api'
import { httpsService } from './https-service'

const template: string = require('../index.html')

const server = express()

server.use('/static', express.static('static'))

server.get('/index', (req, res) => {
    httpsService({ path: TOPICS, method: 'GET' })
    const renderedString = renderToString(<ListPage/>)
    res.send(template.replace('<ssr-content/>', renderedString))

})

server.listen(3000, () => {
    console.log('server is running')
})
