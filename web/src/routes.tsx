import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

//cada página da aplicação é um Route
//path: qual o endereço que acessa
//exact: faz a verificação exata da url, se não verifica apenas o ínicio da URL e quando da match
//já direciona
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={CreatePoint} path='/create-point' />
        </BrowserRouter>
    )
}

export default Routes