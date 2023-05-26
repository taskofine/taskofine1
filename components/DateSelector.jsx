import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import coaching  from '../utils/skeletonCoaching';

let modifiedStartDate;
let modifiedEndDate;


const DateSelector = ({type, stageNumber, updateDB, startPeriod, endPeriod}) => {
   
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  useEffect(()=>{
    const update = () => { 
      if(startPeriod){ 
        modifiedStartDate? setStartDate(modifiedStartDate) :  setStartDate(startPeriod);
      }   
      if(endPeriod){
       modifiedEndDate? setEndDate(modifiedEndDate) :  setEndDate(endPeriod);
      }
    }
   update();  
  });


  const handleStartDateChange = (date) => { 
    //setStartDate(date);
    modifiedStartDate = date;
    switch(stageNumber){
      case '1': coaching.stage1.startPeriod = date; break;
      case '2': coaching.stage2.startPeriod = date; break;
      case '3': coaching.stage3.startPeriod = date; break;
      case '4': coaching.stage4.startPeriod = date; break;
      case '5': coaching.stage5.startPeriod = date; break;
      case '6': coaching.stage6.startPeriod = date;  break;
      case '7': coaching.stage7.startPeriod = date;  break;
      case '8': coaching.stage8.startPeriod = date;  break;
      case '9': coaching.stage9.startPeriod = date;  break;
      case '10': coaching.stage10.startPeriod = date;  break;
      default: break;
     }
     updateDB();

  };
  const handleEndDateChange = (date) => {
    //setEndDate(date);
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
    <div className='w-12 sm:w-16'>
      {
        type==="start"?
        <DatePicker className='flex' dateFormat="dd/MM/yyyy" selected={new Date(startDate)} onChange={(date) => handleStartDateChange(date)} />
        :
        <DatePicker className='flex' dateFormat="dd/MM/yyyy" selected={new Date(endDate)} onChange={(date) => handleEndDateChange(date)} />
      }
   
    </div>
  );
};

export default DateSelector;
