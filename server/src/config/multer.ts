import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
    //destination: localização da pasta onde serão salvos os arquivos enviados
    //filename: 
    //gerar nome único para os arquivos: crypto
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex')

            const fileName = `${hash}-${file.originalname}`

            //primeiro parâmetro seria o erro. colocar um try catch para situações que teria erro
            callback(null, fileName)
        }
    })
}