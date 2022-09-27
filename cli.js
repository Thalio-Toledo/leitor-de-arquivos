
const pegarArquivo = require('./index')

const caminho = process.argv;

async function processaTexto(caminho){
    const resultado = await pegarArquivo(caminho[2])
    
}

processaTexto(caminho)