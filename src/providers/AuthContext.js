import { createContext } from 'react';
import { useState } from 'react';
/* import styled from 'styled-components'; */

const AuthContext = createContext();

export function AuthContextProvider ({ children }) {

    const mainAuth = JSON.parse(localStorage.getItem('auth'));
    const [auth, setAuth] = useState(mainAuth);

    function userLogin (authData) {
        setAuth(authData);
        localStorage.setItem('auth', JSON.stringify(authData));
    }

    return (

        <AuthContext.Provider value={{ auth, userLogin }}>
            {children}
        </AuthContext.Provider>


    );


}

export default AuthContext;



/* const AuthContext.Provider = styled.div`

    background-color: transparent;

`; */