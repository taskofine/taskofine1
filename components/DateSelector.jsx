import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const DateSelector = () => {

  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='w-12 sm:w-16'>
      <DatePicker className='flex' dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
};

export default DateSelector;
