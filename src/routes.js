import { Database } from "./database.js"
import { randomUUID } from 'crypto'//LIB que tem a capacidade de criar IDS aleatórios e únicos

const database = new Database()

export const routes = [ 
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) => {
      const users = database.select('users')

      return res// response
      .end(JSON.stringify(users))
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: (req, res) => {
      const { email, name } = req.body// Desestruturação do Body, colocando já o nome e email como variantes por usuário

      const user = {
        id: randomUUID(),
        name,
        email
      }
      database.insert('users', user)// para inserir dentro de users a variavel users
      
      return res.writeHead(201).end('Criação de usuário')// Retornar criação escrita
    }
  },
]