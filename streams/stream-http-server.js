import http from 'node:http'
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform { //Ela transforma pegando o de leitura
  _transform(chunk, enconding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

const server = http.createServer((req, res) => {// Aqui foi criado o servidor onde está pegando os valores do Fetch criado
  return req //Com a função do numero 1 ao 100
    .pipe(new InverseNumberStream()) // E invertendo a response que é a funcao OneToHundredStream(), e mostrando com o console acima
    .pipe(res)
})

server.listen(3334)