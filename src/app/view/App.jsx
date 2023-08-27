import React from "react"
import Menu from "./components/menu/Menu"
import Content from "./content/Content"
import "./App.css"

export default function App() {
  return (
    <>
     <div className="App">
        <Menu></Menu>
        <Content></Content>
     </div>
    </>
  )
}