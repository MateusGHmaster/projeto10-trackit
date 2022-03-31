import logo from './logo.png';
import trackit from './trackIt.png';
import styled from "styled-components";

export default function Logo () {
    return (

        <AppLogo>
            <img src={logo} alt={'logo'} height={110} width={180}/>
            <img src={trackit} alt={'app-name'} height={60} width={180}/>
        </AppLogo>

    );
}

const AppLogo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;