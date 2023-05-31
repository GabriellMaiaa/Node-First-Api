import http from 'http'
//Rotas são o caminho de entrada na nossa API

//Cabeçalho/Headers - São metadados que ajudam a ver como esse código pode ser interpretado pelo Front End
const users = []

const server = http.createServer( async (req, res) => {
  const { method, url }  = req

  const buffers = [] //Leitura de strings, para ler o corpo da req

  for await (const chunk of req) {
    buffers.push(chunk)
  }
  //Depois que for lido como string, passa abaixo para JSON

  try {// Vai tentar pegar o corpo da requisição em JSON
   req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {// Se não conseguir buscar retorne nulo
    req.body = null;
  }
  

//A partir daqui começam as rotas
  if(method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
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
