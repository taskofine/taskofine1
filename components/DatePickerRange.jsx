import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import coaching  from '../utils/skeletonCoaching';

let modifiedStartDate;
let modifiedEndDate;

function DatePickerRange({stageNumber, amIAdmin, updateDB, startPeriod, endPeriod,coach}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  

  useEffect(()=>{
    const update = () => { 
        if(startPeriod){ 
          modifiedStartDate? setStartDate(modifiedStartDate) :  setStartDate(new Date(startPeriod));
        }   
        if(endPeriod){
         modifiedEndDate? setEndDate(modifiedEndDate) :  setEndDate(new Date(endPeriod));
        }
      }
     update();  
  },[startPeriod]);


  const handleStartDateChange = (date) => {
    setStartDate(date);
    switch(stageNumber){
        case '1': coach.stage1.startPeriod = date; break;
        case '2': coach.stage2.startPeriod = date; break;
        case '3': coach.stage3.startPeriod = date; break;
        case '4': coach.stage4.startPeriod = date; break;
        case '5': coach.stage5.startPeriod = date; break;
        case '6': coach.stage6.startPeriod = date;  break;
        case '7': coach.stage7.startPeriod = date;  break;
        case '8': coach.stage8.startPeriod = date;  break;
        case '9': coach.stage9.startPeriod = date;  break;
        case '10': coach.stage10.startPeriod = date;  break;
        default: break;
       }
       updateDB();
  };


  const handleEndDateChange = (date) => {
    setEndDate(date);
    modifiedEndDate = date;
    switch(stageNumber){
        case '1': coaching.stage1.endPeriod = date; break;
        case '2': coaching.stage2.endPeriod = date; break;
        case '3': coaching.stage3.endPeriod = date; break;
        case '4': coaching.stage4.endPeriod = date; break;
        case '5': coaching.stage5.endPeriod = date; break;
        case '6': coaching.stage6.endPeriod = date;  break;
        case '7': coaching.stage7.endPeriod = date;  break;
        case '8': coaching.stage8.endPeriod = date;  break;
        case '9': coaching.stage9.endPeriod = date;  break;
        case '10': coaching.stage10.endPeriod = date;  break;
        default: break;
       }
       updateDB();
  };

  return (
    <div>
      <DatePicker
        disabled={amIAdmin?false:true}
        
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        minDate={new Date()}
      />
      <DatePicker
        disabled={amIAdmin?false:true}
        dateFormat="dd/MM/yyyy"
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="End Date"
        minDate={startDate}
      />
    </div>
  );
}

export default DatePickerRange;
