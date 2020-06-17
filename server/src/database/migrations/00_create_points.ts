//importa o tipo da variável
import Knex from 'knex'

//exporta duas funções
//recebe a instância de acesso ao banco de dados: knex

//realiza as alterações no banco
//utiliza o typescript para informar qual o formato da variável e ter acesso a todos os métodos existentes
export async function up(knex: Knex) {
    //função que recebe a referência para a tabela para a criação dos campos
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        //salva a referência para a imagem: nome do arquivo
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

//desfaz as alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('points')
}