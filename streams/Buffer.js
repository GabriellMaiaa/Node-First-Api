// Buffers são maneirsas da gente salvar e ler da memória rapidamente
// Guarda os dados de uma forma binária, por isso é preciso transfomar para STRING

const buffer = Buffer.from('ok')
console.log(buffer.toJSON())