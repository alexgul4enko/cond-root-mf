// const finalhandler = require('finalhandler')
// const http = require('http')
// const serveStatic = require('serve-static')

// // Serve up public/ftp folder
// const serve = serveStatic('dist', { index: ['index.html', 'index.htm'] })

// // Create server
// const server = http.createServer(function onRequest(req, res) {
//   serve(req, res, finalhandler(req, res))
// })

// // Listen
// server.listen(8000)


const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic('dist', { index: ['index.html', 'index.htm'] }))
app.use('/test2', serveStatic('../test2/dist'))
app.listen(8000)
