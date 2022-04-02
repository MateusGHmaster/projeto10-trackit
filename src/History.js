import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function History () {
    return (

        <>
            <Header />
            <HistoryTitle>Histórico</HistoryTitle>
            <FutureHistory>Em breve, você poderá ver o histórico dos seus hábitos, aqui!</FutureHistory>
            <Footer />
        </>

    );
}

const HistoryTitle = styled.div`

    margin-top: 100px;
    margin-left: 15px;
    width: 100px;
    height: 29px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;

    color: #126BA5;

`;

const FutureHistory = styled.div`

    margin-top: 15px;
    margin-left: 15px;
    width: 338px;
    height: 74px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;

    color: #666666;

`;