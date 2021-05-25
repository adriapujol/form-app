import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);

    async function login(username, password) {

        const userInfo = { username: username, password: password }
        try {
            const response = await axios.post('http://localhost:3001/user/login', userInfo, { withCredentials: true });
            const user = response.data;
            setCurrentUser(user);
            setErrorMessage("");
            setLoading(false);
        } catch (error) {
            console.log(error.response.data.error);
            setErrorMessage(error.response.data.error);
            setLoading(false);
        }
    }

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('http://localhost:3001/user/', { withCredentials: true });
                const user = response.data;
                setCurrentUser(user);
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }

        getUser();

    }, [])

    const value = {
        currentUser,
        errorMessage,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

