import React from "react";

const weekDayToday = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

export default function Date () {

    const Date = (() => {

        let showDate = new Date();
        let todayDate = `${showDate.getDate()}/${showDate.getMonth()}`;

        return (

            <section className={'today-date'}>
                <p>{todayDate}</p>
            </section>

        );

    });

}