import styled from "styled-components";
import Header from "./Header";


export default function Today () {
    
    
    
    return (

        <TodayContainer>
            <Header />
            <p className="text-test">TODAY</p>
        </TodayContainer>

    );
}

const TodayContainer = styled.div`

    min-height: 100vh;
    width: 100%;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;

`;