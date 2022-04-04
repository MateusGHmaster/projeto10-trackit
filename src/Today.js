import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import TodayHabit from "./TodayHabit";
import TodayDate from "./TodayDate";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpin from "react-loading-spin";
import axios from "axios";

export default function Today () {

    const [habits, setHabits] = useState ([]);
    const [complete, setComplete] = useState (true);
    const [did, setDid] = useState(0);
    const [finished, setFinished] = useState(0);

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

    function click () {
        setComplete(!complete);
    }

    function showHabits () {

        if(habits.length > 0) {
          return habits.map(habit => {
            const { id, name, days } = habit;
            return (
                <>
                    <TodayHabit id={id} name={name} days={days} onClick={() => click()}/>
                </>
            );
          });
        }
        return (
            <WaitingTodayHabits>
                <p className={'no-habits'}>Você não tem nenhum hábito cadastrado. Adicione um hábito para começar a trackear!</p>
                <LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={10} />
            </WaitingTodayHabits>
        );

    }

    return (

        <>
            <Header />
                < TodayDate/>
                {complete ? (
                    <NoConcludedHabits>Nenhum hábito concluído ainda</NoConcludedHabits>
                ) : (<ConcludedHabits>{did}% dos hábitos concluídos</ConcludedHabits>)}
            <TodayContainer>
                <HabitList onClick={() => {
                        click();
                        setFinished(finished + 1);
                        setDid((finished/habits.length) * 100);
                    }}>{showHabits()}
                </HabitList>
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

const NoConcludedHabits = styled.div`

    margin-left: 15px;
    width: 278px;
    height: 22px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;

    color: #BABABA;

`;

const ConcludedHabits = styled.div`

    margin-left: 15px;
    width: 278px;
    height: 22px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;

    color: green;

`;

const HabitList = styled.div`

    
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

const WaitingTodayHabits = styled.div`

    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;

`;