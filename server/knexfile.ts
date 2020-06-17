import path from 'path'

//configurações

//não pode utilizar a sintaxe export default, pois o Knex não suporta
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    //defini a localização da pasta das migrations
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    //defini a localização da pasta das seeds
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}