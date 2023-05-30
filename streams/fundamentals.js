//As streams leem pequenas partes de alguma coisa e procuram trabalhar rapido com esses dados

//Toda entrada e saída de informação é uma Stream
//Você consegue trabalhar com os dados antes deles estarem completos


import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

   setTimeout(() => {
    if(i > 100) {
      this.push(null)
    } else {
      const buf = Buffer.from(String(i))

      this.push(buf)
    }
   }, 1000)
  
  }
}

new OneToHundredStream()
  .pipe(process.stdout)