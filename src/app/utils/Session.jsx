import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

class Session {
    static profile = null;
    static current = null;

    static parse(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        } catch (exception) {
            return null;
        }
    }

    static authenticateUser(username) {
        localStorage.setItem("auth", username);
    }

    static clearAuthentication() {
        localStorage.removeItem("authenticated");
        // Additional code if needed...
    }

    static validate() {
        const token = localStorage.getItem("authenticated");
        if (token) {
            Session.current = token;
            Session.profile = Session.parse(token);
            const isValid = Session.profile && Session.profile.exp && new Date(Session.profile.exp * 1000) > new Date();
            return isValid;
        }
        return false;
    }

    static logoff() {
        Session.current = null;
        delete Session.current;
        Session.clearAuthentication();
        localStorage.removeItem("authenticated");
        // Additional code if needed...
    }

    static goToLogin() {
        Session.clearAuthentication();
        return (
            <Navigate to="/Login"/>
        )
        // Perform navigation to the login page as needed...
    }
}

function IsAuthenticated() {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem("authenticated") || null
    );

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated || authenticated !== "true") {
        debugger;
        Session.goToLogin();
    }

    return false;
}

export { Session, IsAuthenticated };