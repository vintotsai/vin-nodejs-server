const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const port = 8899

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const realPath = __dirname + pathname
  console.log('realPath->', realPath)
  fs.readFile(realPath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        'content-type': 'text/plain'
      })
      res.write('404,页面不在..')
      res.end()
    } else {
      // res.writeHead(200, {
      //   'content-type': 'text/html;charset="utf-8'
      // })
      res.write(data)
      res.end()
    }
  })
})
server.listen(port)

console.log('server on :', `http://localhost:${port}`)
