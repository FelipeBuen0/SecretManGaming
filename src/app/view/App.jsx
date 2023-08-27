import React from "react"
import Menu from "./components/menu/Menu"
import { BrowserRouter } from  'react-router-dom'
import Content from "./content/Content"
import "./App.css"

export default function App() {
  return (
     <div className="App">
        <BrowserRouter>
        
          <Menu></Menu>
          <Content></Content>
        </BrowserRouter>
     </div>
  )
}