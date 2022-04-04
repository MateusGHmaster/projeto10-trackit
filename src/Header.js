import appName from './components/TrackIt.png';
import './components/Header.css';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Header (props) {
    
    const navigate = useNavigate();
    const profilePicture = props.picture;

    return (

        <HeaderContainer>
            <TopBarAppName>
                <img className={'top-bar-name'} src={appName} alt={'top-bar-name'} onClick={() => navigate('/today')}/>
            </TopBarAppName>
            <UserPicture>
                <img className={'user-pic'} src={profilePicture} alt={'user-profile'}/>
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