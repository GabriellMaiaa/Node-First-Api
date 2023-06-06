import http from 'http'

import { routes } from './routes.js'

//Rotas são o caminho de entrada na nossa API
//Cabeçalho/Headers - São metadados que ajudam a ver como esse código pode ser interpretado pelo Front End

const server = http.createServer( async (req, res) => {
  const { method, url }  = req

  const route = routes.find(route => {
    return route.method === method && route.path === url
  })
  console.log(route)

  if(route) {
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

const port = 3333
server.listen(port)
