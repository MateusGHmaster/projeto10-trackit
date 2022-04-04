import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function TodayDate() {

    let date = dayjs().date();
    let month = dayjs().month();
    let weekDay = dayjs().day();
    let dayName = dayjs(weekDay).locale('pt-br');

    if (date < 10) {

        date = `0${date.toString()}`;

    }

    if (month < 10) {

        month = `0${month.toString()}`;

    }

    return (

            <p>{dayName}, {date}/{month}</p>

    );

}

