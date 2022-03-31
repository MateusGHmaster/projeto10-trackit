import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";

export default function Register () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');

    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
    }

    function registerNewUser () {
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: name,
            image: pic,
            password: password
        });
        promise.then (response => {
            const {data} = response;
            console.log(data);
            navigate('/');
        })
        promise.catch (error => {
            console.log(error);
            alert('Ocorreu um erro, e sentimos muito por isso. Por favor, tente novamente.');
            refreshPage();
        })
    }

    return (

        <Container>
            <Logo />
            <Input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input type='text' placeholder='nome' value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type='url' placeholder='foto' value={pic} onChange={(e) => setPic(e.target.value)}/>
            <Button onClick={registerNewUser}>Cadastrar</Button>
            <StyledLink to='/'>Já possui uma conta? Faça login!</StyledLink>
        </Container>

    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
`;


const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
`;