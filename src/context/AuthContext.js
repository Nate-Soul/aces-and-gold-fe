import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")) ||  null);

    const login = async (inputs) => {
        const res = await axios.post(`http://127.0.0.1:8000/auth/api/login`, inputs);
        setcurrentUser(res.data);
    }

    const logout = async () => {
        await axios.post(`http://127.0.0.1:8000/auth/api/logout`);
        setcurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{login, logout, currentUser}}>
            {children}
        </AuthContext.Provider>
    )

}