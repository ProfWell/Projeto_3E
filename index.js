const http = require('http');

const server = http.createServer((req,res)=>{
    const{url} = req;
    console.log(url);
    if(url === '/'){
        res.end('Pagina Inicial (Raiz)');
    }else if (url === '/contato'){
        res.end('Pagina de Contato');
    }else if(url === '/sobre'){
        res.end('Pagina Sobre o Projeto');
    }
});

server.listen(3000, ()=>{
    console.log('Servidor Rodando na Porta 3000');
});