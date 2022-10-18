import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import React from "react"
import { Login } from "../pages/login"
import { Cadastro } from "../pages/cadastro"



export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/login"  element={<Login /> }/>
                <Route path="/Cadastro"  element={<Cadastro /> }/>
            </Routes>
        </Router>
    )
}