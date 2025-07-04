import http from 'node:http'

// - Criar usuário
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários 

// - HTTP
//  - Método HTTP
//  - URL

// GET, POST, PUT, PATCH, DELETE 

// GET => Buscar um recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuário do back-end
// POST /users => Criar um usuário do back-end
//
// Stateful - Stateless
//
// Cabeçalhos (Requisição/Resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {
  const {method, url} = req

  if (method === "GET" && url === "/users") {
    return res
      .setHeader('Content-type','application/json')
      .end(JSON.stringify(users))
  }
  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })
    return res.end("Criação de usuário")
  }
  return res.end('Hello World')
})

server.listen(3333)

