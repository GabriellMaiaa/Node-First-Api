//Middlewares saõ funções Interceptadoras

export async function json(req, res) {
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
  
  res.setHeader('Content-type', 'application/json')
}