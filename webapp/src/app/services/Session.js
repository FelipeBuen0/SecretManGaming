import { useEffect, useState } from "react";
import { create } from "./api";
class Session {
    static profile = null;
    static current = null;
    static parseToken(token) {
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

    static async authenticateUser(record) {
        try {
            const response = await create('authentication/login', record);
            localStorage.setItem("auhT", response.data);
            Session.current = this.parseToken(response.data);
            console.log(Session.current)
            return response;
        } catch (error) {
            return error;
        }
    }

    static clearAuthentication() {
        localStorage.removeItem("auhT");
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
