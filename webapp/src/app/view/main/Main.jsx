import React from "react";
import Header from "../components/header/Header"
export default function Main() {
    const products = [{ 
        productId: 1,
        name: 'Protetor Auricular',
        categoria: 'Protetores'
    }, {
        productId: 2,
        name: 'Botas de borracha',
        categoria: 'Protetores, calçados'
    }, {
        productId: 3,
        name: 'Luvas de borracha',
        categoria: 'Protetores, luvas'
    }, {
        productId: 4,
        name: 'Capacete',
        categoria: 'Protetores'
    }]
    return (
        <div>
            <Header></Header>
            <h1 className="mt-2">
                Header-Content
            </h1>
            {products.map((items) => {
                return (
                    <div>
                        <ul>
                            <li key={items.productId}>
                                Nome: {items.name}
                            </li>
                        </ul>
                        <ul>
                            <li key={items.productId}>
                                Categoria {items.categoria}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
    
}
