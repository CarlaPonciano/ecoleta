import knex from 'knex'
//trabalhar com caminhos no node. Padroniza os caminhos independente do SO
import path from 'path'

//recebe um objeto com as configurações do banco de dados
//filename: qual o arquivo que será armazenado o arquivo do banco de dados
const connection = knex({
    client: 'sqlite3',
    connection: {
        //resolve: une caminhos
        //__dirname: variável global: retorna o diretório do arquivo que está sendo executado.
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default connection