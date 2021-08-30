import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function Calendarr(){
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
    return(
        <>

        <Calendar    markedDates={{
    '2021-08-16': {selected: true, marked:true, selectedColor:'#EF4E4E'},
    '2021-08-17': {selected: true, marked:true, selectedColor:'#EF4E4E'},
    '2021-08-18': {selected: true, marked:true, selectedColor:'#EF4E4E'},
    '2021-08-19': {selected: true, marked:true, selectedColor:'#EF4E4E'},
  }} style={{borderRadius:15,height:322}}
           
          />


        </>
    )
}