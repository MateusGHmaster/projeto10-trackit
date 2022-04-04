import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpin from "react-loading-spin";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

export default function Login () {
    
    const navigate = useNavigate ();

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [picture, setPicture] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(picture);
    
    function refreshPage() {
        window.location.reload(false);
    }

    function login () {
        setLoading(true);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {email: email, password: password});
        promise.then (response => {
            setLoading(false);
            const {data} = response;
            localStorage.setItem('trackItToken', data.token);
            setPicture(data.image);
            navigate ('/today');
        });
        promise.catch (response => {
            setLoading(false);
            console.log(response);
            alert('Houve um erro. Por favor, verifique seu email e senha.');
            refreshPage ();
        });
    } 

    return (

        <LoginContainer>
            <Logo />
            <Input type={'text'} placeholder={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type={'password'} placeholder={'senha'} value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={login}>
                {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={10} />
                    ) : (
                        'Entrar'        
                    ) 
                }
            </Button>
            <StyledLink to='/register'>Não tem uma conta? Cadastre-se!</StyledLink>
        </LoginContainer>

    );
}

const StyledLink = styled(Link)`

    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;

`;

const LoginContainer = styled.div`

    margin-top: -60px;
    height: 100vh;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
    font-family: 'Lexend Deca', sans-serif;

`;
