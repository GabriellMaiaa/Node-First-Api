//As streams leem pequenas partes de alguma coisa e procuram trabalhar rapido com esses dados

//Toda entrada e saída de informação é uma Stream


import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = index++

    if(i > 100) {
      this.push(null)
    } else {
      this.push(i)
    }
  }
}

new OneToHundredStream().pipe(process.stdout)