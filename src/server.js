import http from 'http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

import { randomUUID } from 'crypto'//LIB qu tem a capacidade de criar IDS aleatórios e únicos

const database = new Database()

//Rotas são o caminho de entrada na nossa API
//Cabeçalho/Headers - São metadados que ajudam a ver como esse código pode ser interpretado pelo Front End

const server = http.createServer( async (req, res) => {
  const { method, url }  = req

  await json(req, res)//Middleware

//A partir daqui começam as rotas
  if(method === 'GET' && url === '/users') {
    const users = database.select('users')

    return res
    .end(JSON.stringify(users))
  }
  
  if(method === 'POST' && url === '/users') {
    const { name, email } = req.body// Desestruturação do Body, colocando já o nome e email como variantes por usuário

    const user = {
      id: randomUUID(),
      name,
      email
    }
    database.insert('users', user)
    
    return res.writeHead(201).end('Criação de usuário')// Retornar criação
  }

  return res.writeHead(404).end()
})

const port = 3333
server.listen(port)
