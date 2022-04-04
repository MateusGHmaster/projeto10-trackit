import dayjs from "dayjs";

export default function TodayDate() {

    let date = dayjs().date();
    let month = dayjs().month();
    let weekDay = dayjs().day();
    let dayName = dayjs(weekDay);

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

