import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Date from "./Date";
import { useState } from "react";
/* import './components/Today.css'; */


export default function Today () {

    const [concluded, setConcluded] = useState(false);

    function checkConcludedHabits () {

    }

    return (

        <>
            <Header />
            <section>
                <TodayDate>Segunda, 04/04</TodayDate>
                <ConcludedHabits>Nenhum hábito concluído ainda</ConcludedHabits>
            </section>
            <TodayContainer>
            </TodayContainer>
            <Footer />
        </>

    );
}

const TodayContainer = styled.div`

    height: 100%;
    margin-top: 50px;
    width: 375px;
    padding-top: 31px;
    padding-right 31px:

`;

const TodayDate = styled.div`

    margin-top: 100px;
    margin-left: 15px;
    width: 250px;
    height: 29px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;

    color: #126BA5;

`;

const ConcludedHabits = styled.div`

    margin-left: 15px;
    width: 278px;
    height: 22px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;

    color: #BABABA;

`;