import React, { useState, useEffect } from "react";

const LoginContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})

export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (userLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
}
export default LoginContext;