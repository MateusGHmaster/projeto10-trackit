import appName from './trackIt.png';
import styled from "styled-components";

export default function ProfilePic () {

    return (
        <ProfilePicContainer>
            <img src={appName} alt={'navbar-app-name'} height={30} width={90}/>
        </ProfilePicContainer>
    );

}

const ProfilePicContainer = styled.div`

    z-index: 1;

`;