// const express = require('express')
// const mysql = require('mysql')
// const cors = require('cors')



// const app = express()
// app.use(cors())
// app.use(express.json())

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'123456',
//     database:'registro'
   
// })

// db.connect((err) => {
//     if (err) {
//         console.error(`Erro ao conectar ao banco de dados: ${err.stack}`)
//         return
//     }

//     console.log('Conexão com o banco de dados bem-sucedida!')
    
// })

// // enviar cadastro

// app.post('/pages/cadastro', (req, res) =>{
//     const sql = "INSERT INTO registros (`nome`, `email`, `idade`, `cpf`, `cep`, `endereco`, `bairro`, `cidade`, `estado`, `numero`, `telefone`, `senha`, `confirmarsenha`, `sexo`, `estadoCivil`, `rendaFamiliar`, `pessoasEmCasa`, `escolaridade`, `despesasMensais`, `raca`, `filhos`, `profissao`) VALUES (?)"
//     const values = [
//         req.body.nome, 
//         req.body.email, 
//         req.body.idade,
//         req.body.cpf,
//         req.body.cep,
//         req.body.endereco,
//         req.body.bairro,
//         req.body.cidade,
//         req.body.estado,
//         req.body.numero,
//         req.body.telefone,
//         req.body.senha, 
//         req.body.confirmarsenha,
//         req.body.sexo,
//         req.body.estadoCivil,
//         req.body.rendaFamiliar,
//         req.body.pessoasEmCasa,
//         req.body.escolaridade,
//         req.body.despesasMensais,
//         req.body.raca,
//         req.body.filhos,
//         req.body.profissao
//     ]

//     console.log(values)

//     db.query(sql, [values], (err, data) => {
//         if (err) {
//             if (!res.headersSent) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
//             } else {
//                 console.error('Cabeçalhos HTTP já foram enviados para o cliente');
//             }
//         } else {
//             if (!res.headersSent) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(200).json(data);
//             } else {
//                 console.error('Cabeçalhos HTTP já foram enviados para o cliente');
//             }
//         }
//     })

// })

// // acessar o login

// app.post('/pages/login', (req, res) => {
//     console.log('Dados recebidos do cliente:', req.body)
//     const sql = "SELECT * FROM registros WHERE `cpf` = ? AND `senha` = ?"
//     console.log(sql)
//     db.query(sql, [req.body.cpf, req.body.senha], (err, data) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json('error')
//         }
//         if (data.length > 0) {
//             console.log('Login bem-sucedido')
//             return res.status(200).json('sucesso')
//         } else {
//             console.log('Login falhou')
//             return res.status(401).json('erro')
//         }
//     })
// })


// // Verificar se o CPF já está cadastrado
// app.post('/pages/verificar-cpf', (req, res) => {
//     const { cpf } = req.body;
//     const sql = "SELECT * FROM registros WHERE `cpf` = ?";

//     db.query(sql, [cpf], (err, data) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Erro ao verificar CPF' });
//         }
//         if (data.length > 0) {
//             return res.status(200).json({ existe: true });
//         } else {
//             return res.status(200).json({ existe: false });
//         }
//     });
// });

// app.listen(8081, () =>{
//     console.log('funcionando')
// })

// pake
//  "start": "nodemon index.js"