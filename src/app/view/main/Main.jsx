import { React, useState, useEffect} from "react";
import Header from "../components/header/Header";
import { Navigate } from "react-router-dom";

export default function Main() {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated")  || null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
        setAuthenticated(loggedInUser);
        }
    }, []);
    
    if (!authenticated || authenticated !== 'true') {
        debugger
        return <Navigate replace to="/Login" />;
    } else {
         return (
        <div className="Main flex flex-column w-screen h-screen">
            <Header />
            <h1> Welcome to the jungle </h1>
        </div>
    );
    }
    
}
