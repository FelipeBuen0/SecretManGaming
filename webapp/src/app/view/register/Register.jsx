import { React, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Session } from '../../services/Session';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './Register.css';
import { redirect } from "react-router-dom";
export default function LoginView () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    /**
     * @function
     * HandlesLogin
     * */
    async function handleLogin ()  {
        const record = {email, password}
        const result = await Session.authenticateUser(record);
        debugger
        if (result.status === 200 || result.status === 201) {
            return redirect('/')
        }
        if (result.response.status === 500) {
            return console.log('Failed to login')
        }
    }

    /**
     * @UserInterface
     * UI
     * */
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