import ProfilePic from './ProfilePic';
import TopAppName from './TopAppName';
import styled from "styled-components";

export default function Header () {
    
    
    
    return (

        <HeaderContainer>
            <TopAppName />
            <ProfilePic />
        </HeaderContainer>

    );
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;