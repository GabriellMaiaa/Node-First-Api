import http from 'http'
import { json } from './middlewares/json.js'

//Rotas são o caminho de entrada na nossa API

//Cabeçalho/Headers - São metadados que ajudam a ver como esse código pode ser interpretado pelo Front End
const users = []

const server = http.createServer( async (req, res) => {
  const { method, url }  = req

  await json(req, res)//Middleware

//A partir daqui começam as rotas
  if(method === 'GET' && url === '/users') {
    return res
    .end(JSON.stringify(users))
  }
  
  if(method === 'POST' && url === '/users') {
    const { name, email } = req.body// Desestruturação do Body, colocando já o nome e email como variantes por usuário

    users.push({
      id: 1,
      name,
      email
    })
    
    return res.writeHead(201).end('Criação de usuário')// Retornar criação
  }

  return res.writeHead(404).end()
})

const port = 3333
server.listen(port)
