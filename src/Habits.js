import Header from './Header';
import Title from './Title';
import Habit from './Habit';
import { useState } from 'react';
import { useEffect } from 'react';
import './components/Habits.css';
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
        return <p className={'no-habits'}>Você não tem nenhum hábito cadastrado. Adicione um hábito para começar a trackear!</p>;

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
                <section className={'habits-header'}>
                    <Title />
                    <Button onClick={(() => {setVisibleHabit(!visibleHabit)})}>
                        <Icon>+</Icon>
                    </Button>
                </section>
                <HabitList>{showHabits()}</HabitList>
                {visibleHabit === true && (

                    <section className='habit-div'>
                        <input className={'habit-name'} type={'text'} placeholder={'nome do hábito'} value={habitName} onChange={(e) => setHabitName(e.target.value)}/>
                        <div className='new-week-days'>
                            <>
                                {weekDays.map(day => (
                                    <>
                                        <div className='week-day' onClick={() => daySelection(day.id)}>{day.name}</div>
                                    </>
                                ))}
                            </>
                        </div>
                        <section className={'action-habit-button'}>
                            <button className={'cancel-habit'}>Cancelar</button>
                            <button className={'save-habit'} onClick={createHabit}>Salvar</button>
                        </section>
                    </section>

                )}
        </HabitsContainer>

    );
}

const HabitsContainer = styled.div`

    height: 100%;
    margin-top: 50px;
    width: 375px;
    padding-top: 31px;
    padding-right 31px:

`;

const HabitList = styled.div`

    
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

const Button = styled.div`

    margin-top: 7px;
    width: 40px;
    height: 35px;
    left: 317px;
    top: 92px;
    display: flex;
    justify-content: center;

    background: #52B6FF;
    border-radius: 4.63636px;

`;

const Icon = styled.div`

    margin-top: 3px;
    width: 16px;
    height: 34px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;

    color: #FFFFFF;

`;