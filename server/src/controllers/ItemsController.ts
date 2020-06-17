import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    //index: listagem
    async index (request: Request, response: Response) {
        //importação da conexão com o banco de dados
        const items = await knex('items').select('*')
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.2.108:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    } 
}

export default ItemsController