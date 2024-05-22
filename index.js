const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Ola Eu Sou o Node.js');
});

app.get('/contato',(req,res)=>{
    res.send('Pagina de Contatos');
});

app.get('/sobre',(req,res)=>{
    res.send('Pagina sobre o Projeto');
});

app.get('*',(req,res)=>{
    res.status(404).send('Pagina Nao Encontrada');
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na Porta ${PORT}`);
});

