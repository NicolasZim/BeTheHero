const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name:     Joi.string().required(),
    email:    Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city:     Joi.string().required(),
    uf:       Joi.string().required().length(2)
  }),
}), OngController.create);


routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index)


routes.post('/incidents', 
celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}),
celebrate({
  [Segments.BODY]: Joi.object().keys({
    title:        Joi.string().required(),
    description:  Joi.string().required(),
    value:        Joi.number().required(),
  }),
}), IncidentController.create)


routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentController.delete)
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