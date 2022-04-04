import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import TodayHabit from "./TodayHabit";
import TodayDate from "./TodayDate";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Today () {

    const [habits, setHabits] = useState ([]);

    const config = {

        headers: { Authorization: `Bearer ${localStorage.getItem('trackItToken')}` }

    };

    useEffect (() => {
        
        getHabits();

    }, []);

    function getHabits () {

        const promise = axios.get ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then (response => {
            const {data} = response;
            setHabits(data);
        })
        promise.catch (err => {
            console.log(err.response);
            alert ('Algo deu errado. Por favor, tente novamente.');
        });

    }

    function showHabits () {

        if(habits.length > 0) {
          return habits.map(habit => {
            const { id, name, days } = habit;
            return (
                <>
                    <TodayHabit id={id} name={name} days={days} />
                </>
            );
          });
        }
        return <p className={'no-habits'}>Você não tem nenhum hábito cadastrado. Adicione um hábito para começar a trackear!</p>;

    }

    return (

        <>
            <Header />
            <section>
                {/* <TodayDate/> */}
                <TodayInfo>Segunda, 04/04</TodayInfo>
                <ConcludedHabits>Nenhum hábito concluído ainda</ConcludedHabits>
            </section>
            <TodayContainer>
                <HabitList>{showHabits()}</HabitList>
            </TodayContainer>
            <Footer />
        </>

    );
}

const TodayContainer = styled.div`

    height: 100%;
    margin-top: 15px;
    width: 375px;
    padding-top: 31px;
    padding-right 31px:

`;

const TodayInfo = styled.div`

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

const HabitList = styled.div`

    
    display: flex;
    flex-direction: column;
    gap: 10px;

`;