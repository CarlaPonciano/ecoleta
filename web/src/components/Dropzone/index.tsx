import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

//define a função que será recebida
interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    //0: apenas 1 arquivo
    const file = acceptedFiles[0]

    //criação da URL:
    const fileUrl = URL.createObjectURL(file)

    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])

  //accept: 'image/*': aceita qualquer tipo de imagem
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  //receber mais de um arquivo: adicionar a propriedade multiple no input
  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()}  accept= "image/*" />

      { selectedFileUrl 
        ? <img src={selectedFileUrl} alt="Point thumbnail" />
        : (
          <p>
            <FiUpload />
            Imagem do estabelecimento
          </p>
        )
      }
    </div>
  )
}

export default Dropzone