import appName from './components/TrackIt.png';
import axios from 'axios';
import './components/Header.css';

import styled from "styled-components";
import { useState } from 'react';

export default function Header () {
    
    const [userPic, setUserPic] = useState ('');
    
    return (

        <HeaderContainer>
            <TopBarAppName>
                <img className={'top-bar-name'} src={appName} alt={'top-bar-name'}/>
            </TopBarAppName>
            <UserPicture>
                <img className={'user-pic'} src={''} alt={'user-profile-picture'}/>
            </UserPicture>
        </HeaderContainer>

    );
}

const HeaderContainer = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`;

const TopBarAppName = styled.div`

    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97px;
    height: 49px;

`;

const UserPicture = styled.div`

    margin-top: -50px;
    margin-left: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 51px;
    height: 51px;
    background-color: green;

`;