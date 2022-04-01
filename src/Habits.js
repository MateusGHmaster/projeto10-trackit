import Header from './Header';
import Title from './Title';
/* import HabitsBody from './HabitsBody'; */
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

export default function Habits ({token}) {
    
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
              <Habit id={id} name={name} days={days} />
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
            getHabits();
        });
        promise.catch((err) =>{
            console.log('Não foi!');
        });

    }

    return (

        <HabitsContainer>
            <Header />
            <Title />
            {visibleHabit == true && (

                <section className='habit-div'>
                    <input className={'habit-name'} type={'text'} placeholder={'nome do hábito'} value={habitName} onChange={(e) => setHabitName(e.target.value)}/>
                    <div className='week-days'>
                    {weekDays.map(day => (
                        <div className='week-day' onClick={() => daySelection(day.id)}>{day.name}</div>
                    ))}
                    </div>
                    <button>Cancelar</button>
                    <button onClick={createHabit}>Salvar</button>
                </section>

            )} 
            
            {showHabits()}
            <button onClick={(() => {setVisibleHabit(!visibleHabit)})}>+</button>
        </HabitsContainer>

    );
}

const HabitsContainer = styled.div`

    height: 100vh;
    margin-top: 50px;
    width: 100vw;
    padding: 31px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background-color: #E5E5E5;

`;
