//As streams leem pequenas partes de alguma coisa e procuram trabalhar rapido com esses dados

//Toda entrada e saída de informação é uma Stream
//Você consegue trabalhar com os dados antes deles estarem completos


import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {// STREAM DE LEITURA
  index = 1

  _read() {//Aqui a stream está lendo dados de 1 a 100. Sempre primeiro as propriedades
    const i = this.index++

   setTimeout(() => {
    if(i > 100) {
      this.push(null)
    } else {
      const buf = Buffer.from(String(i))

      this.push(buf)
    }
   }, 1000)//Com 1 segundo de intervalo para aparecerem os números no terminal
  
  }
}


class MultiplyByTenStream extends Writable {// STREAM DE ESCRITA SOBRE UMA LEITURA
  
  _write(chunk, encoding, callback) {//Chunk - Pega o conteúdo da stream que for usada de parâmetro e executa
    
    console.log(Number(chunk.toString() * 10))
    callback()// Aqui está trazendo todos os numero lidos
  }
}

class InverseNumberStream extends Transform { //Ela transforma pegando o de leitura
  _transform(chunk, enconding, callback) {
    const transformed = Number(chunk.toString()) * -1;

          //saída para o erro
    callback(null, Buffer.from(String(transformed)))//O 1 argumento é NULL pq ele serve para a SAÍDA do ERRO
  }
}

new OneToHundredStream()// Lê os dados de 1 a 100
  .pipe(new InverseNumberStream())// Inverte os números para sinal negativo(-)
  .pipe(new MultiplyByTenStream())// Pega os números já negativos e multiplica por 10