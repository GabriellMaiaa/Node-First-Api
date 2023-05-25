import http from 'http'
//Rotas são o caminho de entrada na nossa API

//Cabeçalho/Headers - São metadados que ajudam a ver como esse código pode ser interpretado pelo Front End

const users =[]

const server = http.createServer((req, res) => {
  const { method, url }  = req

  if(method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }
  
  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name:'Gabriel Maia',
      idade:19
    })
    
    return res.end('Criação de usuário')
  }

  return res.end('Helouu World')
})

const port = 3333
server.listen(port)
