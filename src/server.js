import http from 'http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

//Rotas são o caminho de entrada na nossa API
//Cabeçalho/Headers - São metadados que ajudam a ver como esse código pode ser interpretado pelo Front End
// Tipos de Busca:

//Route Parameters: http://localhost:3333/users/1 - Vem identificando qual o valor na própria URL
//Query Parameter:URL Stateful -> http://localhost:3333?usersId=1&name=Gabriel
//Request Body:Você manda o corpo da requisição direto no padrão


const server = http.createServer( async (req, res) => {
  const { method, url }  = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })
  console.log(route)

  if(route) {
    const routeParams = req.url.match(route.path)

    req.params = {...routeParams.groups }

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

const port = 3333
server.listen(port)
