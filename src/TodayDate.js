import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br';
import styled from 'styled-components';

export default function TodayDate() {

    let date = dayjs().date();
    let month = dayjs().month()+1;
    let weekDay = dayjs().day();
    let day = dayjs(weekDay).locale(ptBr).format('dddd');
    day = day.replace('-feira', '');
    let dayName = day.charAt(0).toLocaleUpperCase() + day.slice(1);

    if (date < 10) {

        date = `0${date.toString()}`;

    }

    if (month < 10) {

        month = `0${month.toString()}`;

    }

    return (

            <Date>{dayName}, {date}/{month}</Date>

    );

}

const Date = styled.div`

    margin-top: 100px;
    margin-left: 15px;
    width: 250px;
    height: 29px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;

    color: #126BA5;

`;  