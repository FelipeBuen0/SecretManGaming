import { React, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
export default function LoginView () {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Card region="center" className="md:w-25rem">
        <div className="Login">
            <h1 style={{fontSize: '32px'}}>Welcome! Log-In!</h1>
            <span className="p-float-label">
                <InputText 
                id="username"
                value={user}
                className="p-inputtext-lg"
                onChange={(e) => setUser(e.target.value)}/>
                <label htmlFor="username">Username</label>
            </span>
            <span className="p-float-label">
                <Password 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                feedback={true}
                className="p-inputtext-lg" />
                <label htmlFor="password">Password</label>
            </span>
            <Button onClick={login({user, password})} label="Entrar" size="large"/>
            <p>Esqueceu a senha?</p>
            <p>Criar conta</p>
        </div>
        </Card>
        </>
    )
}
function login (credentials) {
    if (!credentials || credentials === {}) {
        return;
    }
    localStorage.setItem('auth', credentials.user);
}