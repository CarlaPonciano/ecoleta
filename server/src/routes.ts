import express from 'express'
//biblioteca de upload de imagens
import multer from 'multer'
//configuraçaõ da bibioteca
import multerConfig from './config/multer'
//validação dos dados
import { celebrate, Joi } from 'celebrate'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

//desacopla as rotas do arquivo principal para outro arquivo
const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

//single: receber apenas 1 arquivo
//mais de um arquivo: upload.array()
//nome_do_campo
routes.post(
    '/points', 
    upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            //email: verifica se tem o @ com domínio
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            //possível utilizar regex()
            items: Joi.string().required()
        })
    }, {
        //verifica todos os campos, e não para a execução no primeiro erro que enocntrar.
        //dessa forma, retorna todos os campos que deram erro
        abortEarly: false
    }), 
    pointsController.create
)

export default routes