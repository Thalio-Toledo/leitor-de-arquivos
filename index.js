const fs = require('fs');
const path = require('path');


 async function pegarArquivo(caminho){

     const caminhoAbsoluto = path.join(__dirname,'.',caminho);
     
     const encoding ='utf-8';

     //ler todos os arquivos
     const arquivos = await fs.promises.readdir(caminhoAbsoluto, {encoding})
        console.log("Arquivos de Texto", arquivos)
     //ler textos dos arquivos
     const arrayTextos = await Promise.all(arquivos.map(async (arquivo)=>{
        const localArquivo = `${caminhoAbsoluto}/${arquivo}`;

       
        const textos = await fs.promises.readFile(localArquivo,encoding)
       
        return `texto: ${textos}`
     })) 
     
   
     console.log(arrayTextos)
      

 }


module.exports =  pegarArquivo

