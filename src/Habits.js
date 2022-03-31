import Header from './Header';
import HabitsBody from './HabitsBody';
import styled from "styled-components";

export default function Habits () {
    
    

    return (

        <HabitsContainer>
            <Header />
            <HabitsBody />
        </HabitsContainer>

    );
}

const HabitsContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
`;