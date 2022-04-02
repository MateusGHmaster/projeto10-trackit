import styled from "styled-components";

const weekDays = [
    {id: 0, name: 'D'},
    {id: 1, name: 'S'},
    {id: 2, name: 'T'},
    {id: 3, name: 'Q'},
    {id: 4, name: 'Q'},
    {id: 5, name: 'S'},
    {id: 6, name: 'S'}    
];


export default function Habit (props) {
    
    return (

        <HabitContainer>
            <section>
                <p className={'habit-title'}>{props.name}</p>
                <div className='week-days'>
                    {weekDays.map(day => (
                        <div className='week-day'>{day.name}</div>
                    ))}
                </div>
            </section>
        </HabitContainer>

    );
    
}

const HabitContainer = styled.div`



`;