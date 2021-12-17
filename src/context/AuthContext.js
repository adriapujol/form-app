import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);


    async function register(username, password, role) {
        const userInfo = { username: username, password: password, role: role };

        try {
            const response = await axios.post('https://jenniferetcarlos.herokuapp.com/user/register', userInfo, { withCredentials: true });
            const user = response.data;
            setErrorMessage("");
            alert(`User ${user.username} added successfully!`);

        } catch (error) {
            if (error.message === "Network Error") {
                setErrorMessage(error.message);
            } else {
                setErrorMessage(error.response.data.error);
            }
        }
    }

    async function login(username, password) {

        const userInfo = { username: username, password: password };
        try {
            const response = await axios.post('https://jenniferetcarlos.herokuapp.com/user/login', userInfo, { withCredentials: true });
            const user = response.data;
            setCurrentUser(user);
            setErrorMessage("");
            setLoading(false);
        } catch (error) {
            if (error.message === "Network Error") {
                setErrorMessage(error.message);
            } else {
                setErrorMessage(error.response.data.error);
            }
            setLoading(false);
        }
    }

    async function logout() {
        try {
            await axios.get('https://jenniferetcarlos.herokuapp.com/user/logout', { withCredentials: true });
            setCurrentUser(null);
        } catch (error) {
            if (error.response.data.error) setErrorMessage(error.response.data.error);
        }
    }

    function setForm(formData) {
        setCurrentUser(prevCurrentUser => ({ ...prevCurrentUser, formAnswers: formData }));
    }

    useEffect(() => {
        async function getUser() {

            try {
                const response = await axios.get('https://jenniferetcarlos.herokuapp.com/user/', { withCredentials: true });
                const user = response.data;
                setCurrentUser(user);
                setLoading(false);
            } catch (error) {
                if (error.message === "Network Error") {
                    setErrorMessage(error.message);
                } else {
                    //ignore this
                }
                setLoading(false);
            }
        }

        getUser();

    }, []);

    const value = {
        currentUser,
        errorMessage,
        setForm,
        register,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

