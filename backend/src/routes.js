const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)
module.exports = routes;


/* 
  Rota / Recurso
*/

/* 
  Métodos HTTP:

  GET: Buscar/listar uma informação do back-end
  POST: Criar uma informação no back-end
  PUT: Alterar uma informação no back-end
  DELETE: Deletar uma informação no back-end
*/

/* 
  Tipos de paarametros:

  Query: Parametros nomeados e enviados na rota"
  após o "?" (Filtros, páginação...)

  Route Params: Parametros utilizados
  para identificar recursos
  ex: http://localhost:3333/users?name=Nicolas&Idade=20 => { name: 'Nicolas', Idade: '20' }
  ex: http://localhost:3333/users/:id => { id: '1' } | request.params

  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  ex: http://localhost:3333/users => { name: 'Nicolas Zim', age: 20 } | request.body | Use JSON syntax on endpoint
*/

/* 
  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CounchDB, etc ...
*/