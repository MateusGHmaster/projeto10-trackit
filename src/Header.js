import appName from './trackIt.png';

import styled from "styled-components";

export default function Header () {
    
    
    
    return (

        <HeaderContainer>
            <img className={'top-bar-app-name'} src={appName} alt={'navbar-app-name'} height={30} width={90}/>
        </HeaderContainer>

    );
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    ::top-bar-app-name {
        z-index: 1;
    }
`;