import http from 'http'
//Rotas são o caminho de entrada na nossa API

const server = http.createServer((req, res) => {
  return res.end('Helouu World')
})

const port = 3333
server.listen(port)
