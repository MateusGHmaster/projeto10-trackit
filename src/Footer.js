import { CircularProgressbar } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './components/Footer.css';
import styled from "styled-components";

export default function Footer () {
    
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    
    return (

        <FooterBar>
            <button className={'side-footer-button'} onClick={(() => {navigate('/habits')})}>Hábitos</button>
            <button className={'today-circular-progress-bar'} onClick={(() => {navigate('/today')})}>Hoje</button>
            <button className={'side-footer-button'} onClick={(() => {navigate('/history')})}>Histórico</button>
        </FooterBar>

    );
}

const FooterBar = styled.div`

    position: fixed;
    bottom: 0;
    width: 390px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #FFFFFF;

`;
