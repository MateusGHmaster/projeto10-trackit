import './components/TodayHabit.css';
import styled from "styled-components";
import { useState } from 'react';

export default function TodayHabit (props) {
    
    const [concluded, setConcluded] = useState(false);
    let [count, setCount] = useState(0);

    return (

        <HabitContainer>
            <section>
                <p className={'habit-title'}>{props.name}</p>
            </section>
            <Streak>
                <p>Sequência atual:  dias</p>
                <p>Seu recorde:  dias</p>
            </Streak>
            <CheckList className={`check ${concluded ? 'checked' : ''}`} onClick={() => {
                    setConcluded(!concluded);
                    concluded ? (
                            setCount(count -= 1)
                        ) : (
                            setCount(count += 1)
                    );
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