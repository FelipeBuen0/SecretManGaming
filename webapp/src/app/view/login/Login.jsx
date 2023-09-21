import { React, useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Navigate } from "react-router-dom";
import { Session } from '../../services/Session';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './Login.css';
export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleLogin ()  {
        await Session.authenticateUser({email, password}).then(handleLoginSuccess).catch(handleLoginFailure);
    }
    async function handleLoginSuccess (response)  {
        if (!response.status || response.status !== 200) {
            //tratar o erro com uma dialog explicando que está incorreta as informações
        }
        //tratar o erro com uma dialog explicando que está incorreta as informações
    }
    async function handleLoginFailure (response)  {
        console.log('its not working')
    }
    return (
        <div className="h-screen flex align-items-center justify-content-center sm:max-w-screen">
        <Card region="center" className="sm:w-9 md:w-25rem">
            <div className="flex flex-column">
                <h1 className="text-3xl text-center">Log-In!</h1>
                <span className="p-float-label">
                    <InputText 
                    id="email"
                    value={email}
                    className="p-inputtext w-12"
                    onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                </span>
                <span className="p-float-label mb-4 mt-4">
                    <Password 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    feedback={false}
                    className="w-12 input-width" 
                />
                    <label htmlFor="password">Password</label>
                </span>
                <Button onClick={() => handleLogin()} style={{backgroundColor: "#309E3A", color: "white", border: "none"}} label="Entrar" size="medium"/>
                <p className="text-center">Esqueceu a senha?</p>
                <p className="text-center">Criar conta</p>
            </div>
        </Card>
        </div>
    )
}