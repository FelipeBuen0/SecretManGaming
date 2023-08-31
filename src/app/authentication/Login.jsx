import { React, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './Login.css';
export default function LoginView () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{
        username: '_cebs',
        password: '123Brasil'
    }]
    return (
        <div className="h-screen flex align-items-center justify-content-center sm:max-w-screen">
        <Card region="center" className="sm:w-9 md:w-25rem">
            <div className="flex flex-column">
                <h1 className="text-3xl text-center">Log-In!</h1>
                <span className="p-float-label">
                    <InputText 
                    id="username"
                    value={username}
                    className="p-inputtext w-12"
                    onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="username">Username</label>
                </span>
                <span className="p-float-label mb-4 mt-4">
                    <Password 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    feedback={true}
                    className="w-12 input-width" 
                />
                    <label htmlFor="password">Password</label>
                </span>
                <Button onClick={handleLogin} style={{backgroundColor: "#309E3A", color: "white", border: "none"}} label="Entrar" size="medium"/>
                <p className="text-center">Esqueceu a senha?</p>
                <p className="text-center">Criar conta</p>
            </div>
        </Card>
        </div>
    )
    function handleLogin (e)  {
        e.preventDefault()
        debugger
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
        }
    }
}