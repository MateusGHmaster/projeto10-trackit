import './components/TodayHabit.css';
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';

export default function TodayHabit (props) {
    
    const [concluded, setConcluded] = useState(false);
    const [count, setCount] = useState(0);
    const [sequence, setSequence] = useState(0);
    const [max, setMax] = useState(0);

    const config = {

        headers: { Authorization: `Bearer ${localStorage.getItem('trackItToken')}` }

    };

    return (

        <HabitContainer>
            <section>
                <p className={'habit-title'}>{props.name}</p>
            </section>
            <Streak>
                <p>Sequência atual: {sequence} dias</p>
                <p>Seu recorde: {max} dias</p>
            </Streak>
            <CheckList className={`check ${concluded ? 'checked' : ''}`} onClick={() => {
                    setConcluded(!concluded);
                    if (concluded === false) {
                        
                        const check = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
                        {id: props.id}, config);
                        check.then((response) => {
                            console.log('Foi!');
                            const { data } = response;
                            console.log(data);
                        });
                        check.catch((err) =>{
                            console.log(err);
                        });
                        
                        setCount(count + 1);
                        setSequence(sequence + 1);
                        if (max === sequence) {
                            setMax(max + 1);
                        }
                    } else {

                        const uncheck = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
                        {id: props.id}, config);
                        uncheck.then((response) => {
                            console.log('Foi!');
                            const { data } = response;
                            console.log(data);
                        });
                        uncheck.catch((err) =>{
                            console.log(err);
                        });

                        setCount(count - 1);
                        setSequence(0);
                    }
                    console.log(count);
                }}>
                    <Check>✓</Check>
            </CheckList>
        </HabitContainer>

    );
    
}

const HabitContainer = styled.div`

    width: 340px;
    height: 91px;
    margin-left: 10px;
    padding-left: 14px;
    padding-right: 14px;

    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 13px;
    color: #666666;

`;

const Streak = styled.div`

    margin-top: 10px;

`;

const CheckList = styled.div`

    margin-top: -63px;
    margin-left: 275px;

    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;

`;

const Check = styled.div`

    font-size: 60px;
    color: white;

`;