import http from 'node:http'
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform { //Ela transforma pegando o de leitura
  _transform(chunk, enconding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

const server = http.createServer( async (req, res) => {// Aqui foi criado o servidor onde está pegando os valores do Fetch criado
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString();
  console.log(fullStreamContent)
 
  return res.end(fullStreamContent)
})

server.listen(3334)