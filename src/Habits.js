import Header from './Header';
import Title from './Title';
import Habit from './Habit';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';


const weekDays = [
    {id: 0, name: 'D'},
    {id: 1, name: 'S'},
    {id: 2, name: 'T'},
    {id: 3, name: 'Q'},
    {id: 4, name: 'Q'},
    {id: 5, name: 'S'},
    {id: 6, name: 'S'}    
];

export default function Habits () {
    
    const [habits, setHabits] = useState ([]);
    const [visibleHabit, setVisibleHabit] = useState (false);
    const [habitName, setHabitName] = useState ('');
    const [selectedDays, setSelectedDays] = useState ([]);

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
                    <Habit id={id} name={name} days={days} />
                </>
            );
          });
        }
        return <p>Você não tem nenhum hábito cadastrado. Adicione um hábito para começar a trackear!</p>;

    }

    function daySelection (id) {
        if (selectedDays.includes(id)) {
            let newSelectedDay = selectedDays.filter(day => day !== id);
            setSelectedDays([...newSelectedDay]);
        } else {
            setSelectedDays([...selectedDays, id]);
        }
    }

    function createHabit () {
        
        console.log(selectedDays);
        console.log(habitName);
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{name: habitName, days: selectedDays}, config);
        promise.then((response) => {
            console.log('Foi!');
            const { data } = response;
            console.log(data);
            getHabits();
        });
        promise.catch((err) =>{
            console.log(err);
        });

    }

    return (

        <HabitsContainer>
            <Header />
                <Title />
                <HabitList>{showHabits()}</HabitList>
                {visibleHabit === true && (

                    <section className='habit-div'>
                        <input className={'habit-name'} type={'text'} placeholder={'nome do hábito'} value={habitName} onChange={(e) => setHabitName(e.target.value)}/>
                        <div className='week-days'>
                            <>
                                {weekDays.map(day => (
                                    <>
                                        <div className='week-day' onClick={() => daySelection(day.id)}>{day.name}</div>
                                    </>
                                ))}
                                <button>Cancelar</button>
                                <button onClick={createHabit}>Salvar</button>
                            </>
                        </div>
                    </section>

                )}
            
            
            <Button onClick={(() => {setVisibleHabit(!visibleHabit)})}>
                <Icon>+</Icon>
            </Button>
        </HabitsContainer>

    );
}

const HabitsContainer = styled.div`

    height: 100vh;
    margin-top: 50px;
    width: 100vw;
    padding: 31px;

`;

const HabitList = styled.div`

    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

const Button = styled.div`

    width: 40px;
    height: 35px;
    left: 317px;
    top: 92px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #52B6FF;
    border-radius: 4.63636px;

`;

const Icon = styled.div`

    width: 16px;
    height: 34px;
    left: 329px;
    top: 91px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

`;