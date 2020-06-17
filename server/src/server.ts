import express, { query } from 'express'
//é necessário importar também a definição de tipos (typescript) 
import routes from './routes'
import path from 'path'
import cors from 'cors'
import { errors } from 'celebrate'

const app = express()

//permite o acesso de todas as URLs
app.use(cors())

app.use(express.json())
app.use(routes)

//função específica do express para servir arquivos estáticos
app.use('/uploads', express.static(path.resolve(__dirname, '..' , 'uploads')))

//no final antes do listen
//retorno dos erros para o frontend para nao dar erro 500 (servidor) e sim bad request (400)
app.use(errors())

//defini qual a porta de execução da aplicação
app.listen(3333)