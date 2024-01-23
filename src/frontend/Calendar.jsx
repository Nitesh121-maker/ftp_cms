import React,{useState}from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Calendars() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };
  return (
    <div className='new-calender'>
        <h1>Calendar</h1>
        <Calendar onChange={onChange} value={date} />
    </div>
  )
}

export default Calendars