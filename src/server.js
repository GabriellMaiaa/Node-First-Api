import http from 'http'

const server = http.createServer((req, res) => {
  return res.end('Helouu World')
})

const port = 3333
server.listen(port)
