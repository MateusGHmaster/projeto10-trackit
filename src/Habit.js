import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function Habit (props) {
    
    const [habitTitle, setHabitTitle] = useState('');
    
    return (

        <HabitContainer>
            <section>
                <p className={'habit-title'}>{props.name}</p>
                <div></div>
            </section>
        </HabitContainer>

    );
    
}

const HabitContainer = styled.div`



`;