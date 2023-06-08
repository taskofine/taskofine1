'use client'
import {useState, useEffect, useRef} from 'react'
import { useRouter } from 'next/navigation';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';
import DatePickerRange from './DatePickerRange';
import Image from 'next/image';
import ChatPage from '../app/chat/page';
import Link from 'next/link';




let countedStages = [];

const Stage = ({stageNumber, amIAdmin, listTrainees, toggleTasks, openedTask,setOpenedTask,updateDB, isSkeletonUpdated, coach}) => {
    
  const popupTraineesRef = useRef(null);
  const popupStatusRef = useRef(null);
  const popupChatRef = useRef(null);

  const {data: session} = useSession();
  const router = useRouter();

  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const setChatPopup = () =>{
    setIsChatPopupOpen(!isChatPopupOpen);
  }
  
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const setStatus =  () =>  {
    setIsStatusOpen(!isStatusOpen);
  }

  const [isTimetableOpen, setIsTimetableOpen] = useState(false);
  const setTimetable =  () =>  {
    setIsTimetableOpen(!isTimetableOpen);
  }
  
  const [isTraineesOpen, setIsTraineesOpen] = useState(false);
  const setTrainees =  () =>  {
    setIsTraineesOpen(!isTraineesOpen);
  }

  const [tasksOpen, setTasksOpen] = useState(false);
  const [inputPlannedTimeValue, setInputPlannedTimeValue] = useState("0"); 
  const [inputDurationInDays,setInputDurationInDays] = useState("0");
  const [inputLastStage, setInputLastStage] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputTrainees, setInputTrainees] = useState([]);
  const [inputSearchTrainees, setInputSearchTrainees] = useState("");
  const [inputStartPeriod, setInputStartPeriod] = useState(null);
  const [inputEndPeriod, setInputEndPeriod] = useState(null);
  const [listSuggestedTraineees, setListSuggestedTrainees] = useState([]);
  const [listSelectedTraineees, setListSelectedTrainees] = useState([]);
  const [chatContents, setChatContents] =  useState([]);
 
  
  let name='';
  let status='';
  let trainees=[];
  let lastStage='';
  let durationInDays='';
  let plannedTimeInHours='';

  

useEffect(()=>{
  
  switch(stageNumber){
    case '1':
     
      setInputPlannedTimeValue(coach.stage1.plannedTimeInHours);  
      setInputDurationInDays(coach.stage1.durationInDays);
      setInputLastStage(coach.stage1.lastStage);
      setInputStatus(coach.stage1.status);
      setInputName(coach.stage1.name);
      setInputTrainees(coach.stage1.trainees);
      setInputStartPeriod(coach.stage1.startPeriod);
      setInputEndPeriod(coach.stage1.endPeriod);
      break;

    case '2': 
      setInputPlannedTimeValue(coach.stage2.plannedTimeInHours); 
      setInputDurationInDays(coach.stage2.durationInDays);
      setInputLastStage(coach.stage2.lastStage);
      setInputStatus(coach.stage2.status);
      setInputName(coach.stage2.name);
      setInputTrainees(coach.stage2.trainees);
      setInputStartPeriod(coach.stage2.startPeriod);
      setInputEndPeriod(coach.stage2.endPeriod);
      break;

    case '3': 
      setInputPlannedTimeValue(coach.stage3.plannedTimeInHours); 
      setInputDurationInDays(coach.stage3.durationInDays);
      setInputLastStage(coach.stage3.lastStage);
      setInputStatus(coach.stage3.status);
      setInputName(coach.stage3.name);
      setInputTrainees(coach.stage3.trainees);
      setInputStartPeriod(coach.stage3.startPeriod);
      setInputEndPeriod(coach.stage3.endPeriod);
      break;
    case '4': 
      setInputPlannedTimeValue(coach.stage4.plannedTimeInHours); 
      setInputDurationInDays(coach.stage4.durationInDays);
      setInputLastStage(coach.stage4.lastStage);
      setInputStatus(coach.stage4.status);
      setInputName(coach.stage4.name);
      setInputTrainees(coach.stage4.trainees);
      setInputStartPeriod(coach.stage4.startPeriod);
      setInputEndPeriod(coach.stage4.endPeriod);
      break;
    case '5': 
      setInputPlannedTimeValue(coach.stage5.plannedTimeInHours); 
      setInputDurationInDays(coach.stage5.durationInDays);
      setInputLastStage(coach.stage5.lastStage);
      setInputStatus(coach.stage5.status);
      setInputName(coach.stage5.name);
      setInputTrainees(coach.stage5.trainees);
      setInputStartPeriod(coach.stage5.startPeriod);
      setInputEndPeriod(coach.stage5.endPeriod);
      break;
    case '6': 
      setInputPlannedTimeValue(coach.stage6.plannedTimeInHours); 
      setInputDurationInDays(coach.stage6.durationInDays);
      setInputLastStage(coach.stage6.lastStage);
      setInputStatus(coach.stage6.status);
      setInputName(coach.stage6.name);
      setInputTrainees(coach.stage6.trainees);
      setInputStartPeriod(coach.stage6.startPeriod);
      setInputEndPeriod(coach.stage6.endPeriod);
      break;
    case '7': 
      setInputPlannedTimeValue(coach.stage7.plannedTimeInHours); 
      setInputDurationInDays(coach.stage7.durationInDays);
      setInputLastStage(coach.stage7.lastStage);
      setInputStatus(coach.stage7.status);
      setInputName(coach.stage7.name);
      setInputTrainees(coach.stage7.trainees);
      setInputStartPeriod(coach.stage7.startPeriod);
      setInputEndPeriod(coach.stage7.endPeriod);
      break;
    case '8': 
      setInputPlannedTimeValue(coach.stage8.plannedTimeInHours); 
      setInputDurationInDays(coach.stage8.durationInDays);
      setInputLastStage(coach.stage8.lastStage);
      setInputStatus(coach.stage8.status);
      setInputName(coach.stage8.name);
      setInputTrainees(coach.stage8.trainees);
      setInputStartPeriod(coach.stage8.startPeriod);
      setInputEndPeriod(coach.stage8.endPeriod);
      break;
    case '9': 
      setInputPlannedTimeValue(coach.stage9.plannedTimeInHours); 
      setInputDurationInDays(coach.stage9.durationInDays);
      setInputLastStage(coach.stage9.lastStage);
      setInputStatus(coach.stage9.status);
      setInputName(coach.stage9.name);
      setInputTrainees(coach.stage9.trainees);
      setInputStartPeriod(coach.stage9.startPeriod);
      setInputEndPeriod(coach.stage9.endPeriod);
      break;
    case '10': 
    setInputPlannedTimeValue(coach.stage10.plannedTimeInHours); 
    setInputDurationInDays(coach.stage10.durationInDays);
    setInputLastStage(coach.stage10.lastStage);
    setInputStatus(coach.stage10.status);
    setInputName(coach.stage10.name);
    setInputTrainees(coach.stage10.trainees);
    setInputStartPeriod(coach.stage10.startPeriod);
    setInputEndPeriod(coach.stage10.endPeriod);
    break;
    default:break;
  }
     
},[coach]);
  
   useEffect(()=>{   
    if(!isSkeletonUpdated) return;  
    if(!countedStages.includes(stageNumber)){
      countedStages.push(stageNumber);
      setListSuggestedTrainees(listTrainees);
      setChatContents(coaching.chat);
   
    
    }  
   },[isSkeletonUpdated]);
   


   useEffect(()=>{
    //event listeners
    const handleClickOutside = (event) => {   
     if (popupTraineesRef.current && !popupTraineesRef.current.contains(event.target)) {
       setTrainees();
     }
     else  if (popupStatusRef.current && !popupStatusRef.current.contains(event.target)) {
      setStatus();
    }
    else  if (popupChatRef.current && !popupChatRef.current.contains(event.target)) {
      setChatPopup();
    }
   };
   document.addEventListener('mousedown', handleClickOutside);
   return () => {
     document.removeEventListener('mousedown', handleClickOutside);
   };
  
 });
 



   const populateStatusInCoaching = (val) => {
    setInputStatus(val);
    switch(stageNumber){
    case '1': coaching.stage1.status=val;  break;
    case '2': coaching.stage2.status=val; break;
    case '3': coaching.stage3.status=val; break;
    case '4': coaching.stage4.status=val; break;
    case '5': coaching.stage5.status=val; break;
    case '6': coaching.stage6.status=val; break;
    case '7': coaching.stage7.status=val; break;
    case '8': coaching.stage8.status=val; break;
    case '9': coaching.stage9.status=val; break;
    case '10': coaching.stage10.status=val; break;
    default: break;
    }
    updateDB();
   }



   const manipulateSuggestedTraineeList = (val) =>{
    setInputSearchTrainees(val);
    const filteredListTrainess = listTrainees.filter((trainee)=>trainee.name.toLowerCase().includes(val.toLowerCase()));
    //setTrainees(filteredListTrainess);
    setListSuggestedTrainees(filteredListTrainess);
   }

   const manipulateSelectedTrainessList= (index) =>{
    console.log("aaaaaaaaaaaa=" + index);
   }


  //getting an index of a trainee in listTrainees & adding it to selected trainees
   const addTraineeToSelectedTrainees = (trainee)=>{ //trainee shows an entire record of  a trainee
    
     //trainee: the complete record of the trainee we wish to add to selectedTrainees
     //inputTrainees: selected trainees
     let arr = inputTrainees;
    !arr.includes(trainee?.email) &&  arr.push(trainee?.email);
    setInputTrainees(arr);
    setIsTraineesOpen(false); 
    switch(stageNumber){
      case '1': coaching.stage1.trainees=arr;  break;
      case '2': coaching.stage2.trainees=arr; break;
      case '3': coaching.stage3.trainees=arr; break;
      case '4': coaching.stage4.trainees=arr; break;
      case '5': coaching.stage5.trainees=arr; break;
      case '6': coaching.stage6.trainees=arr; break;
      case '7': coaching.stage7.trainees=arr; break;
      case '8': coaching.stage8.trainees=arr; break;
      case '9': coaching.stage9.trainees=arr; break;
      case '10': coaching.stage10.trainees=arr; break;
      default: break;
      }
      updateDB();
   }




   const removeTraineeFromSelectedTrainees = (trainee) => {
   
    //trainee is the email of the trainee we wish to remove
    //we use here inputTrainees that holds the selected trainees
    let arr = [];

    inputTrainees.map((train)=>{
      if(train!==trainee){  
        arr.push(train);
      }
    
    });   
    setInputTrainees(arr);
    setIsTraineesOpen(false);
    switch(stageNumber){
      case '1': coaching.stage1.trainees=arr;  break;
      case '2': coaching.stage2.trainees=arr; break;
      case '3': coaching.stage3.trainees=arr; break;
      case '4': coaching.stage4.trainees=arr; break;
      case '5': coaching.stage5.trainees=arr; break;
      case '6': coaching.stage6.trainees=arr; break;
      case '7': coaching.stage7.trainees=arr; break;
      case '8': coaching.stage8.trainees=arr; break;
      case '9': coaching.stage9.trainees=arr; break;
      case '10': coaching.stage10.trainees=arr; break;
      default: break;
      }
      updateDB();
   }
   

 

 
  return  (
    <>
      <tr>
        <th scope="col" className="px-8">
          השלב
        </th>
        <th scope="col" className="px-6 py-3">
          צ'ט
        </th>
        <th scope="col" className="px-8">
          סטטוס
        </th>
        <th scope="col" className="px-2">
          לוז
        </th>
        <th scope="col" className="">
          מבצע
        </th>
        <th scope="col" className="px-6">
          שלב קודם
        </th>
        <th scope="col" className="px-4">
          משך
        </th>
        <th scope="col" className="px-2">
          זמן מתוכנן
        </th>
      </tr> 
      
      <tr key="key_tr"  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 z-0">
      <td scope="row" className=" font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <span onClick={() => toggleTasks(stageNumber)} className='ml-2'>
          <FontAwesomeIcon icon={faArrowDown } size="xl" style={{color:'#000000'}}/>
        </span>
          
        <input 
               className='max-w-300 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
               readOnly={amIAdmin?false:true}
               type="text"
               value={inputName}
               onChange={(event)=>{
                 setInputName (event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.name = val;  break;
                case '2': coaching.stage2.name  = val; break;
                case '3': coaching.stage3.name  = val; break;
                case '4': coaching.stage4.name  = val; break;
                case '5':  coaching.stage5.name  = val; break;
                case '6': coaching.stage6.name  = val; break;
                case '7': coaching.stage7.name  = val; break;
                case '8': coaching.stage8.name  = val; break;
                case '9': coaching.stage9.name  = val; break;
                case '10': coaching.stage10.name  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />

      </td>



      <td className="px-6">
        <FontAwesomeIcon icon={faComment } size="xl" style={{color:'#FFD700'}} onClick={()=> {setChatPopup();} } /> 
        {isChatPopupOpen && (
        <div ref={popupChatRef} className=' bg-slate-500 bg-opacity-100  absolute h-[200px] w-[250px] right-0  z-20 text-white rounded-xl '>
          <p>{chatContents}</p>
       </div>
      )}
      </td>
      <td  className="px-6  relative" onClick={amIAdmin?setStatus:null} >
        <div  className='bg-white'>
          {(inputStatus==="חדש" || status) && <button className='bg-orange-400 px-8 py-2 rounded-lg my-1 '>חדש</button>}
          {(inputStatus==="בוצע" || status) && <button className='bg-green-400 px-8 py-2 rounded-lg my-1'>בוצע</button>}
          {(inputStatus==="סגור" || status) && <button className='bg-gray-400 px-8 py-2 rounded-lg my-1'>סגור</button>}
        </div>
          {isStatusOpen &&(<hr className='h-[5px]'/>)} 
          {isStatusOpen && (
            <div ref={popupStatusRef} className='absolute  bg-slate-500 top-[-10px] bg-opacity-100 z-10 rounded-xl flex flex-col justify-center'>
              <button className='bg-orange-400 px-8 py-2 rounded-lg my-1 mx-2' onClick={()=>{const val = "חדש";populateStatusInCoaching(val);}}>חדש</button>       
              <button className='bg-green-400 px-8 py-2 rounded-lg my-1 mx-2' onClick={()=>{const val = "בוצע";populateStatusInCoaching(val);}}>בוצע</button>      
              <button className='bg-gray-400 px-8 py-2 rounded-lg my-1 mx-2' onClick={()=>{const val = "סגור";populateStatusInCoaching(val);}  } >סגור</button>
            </div>
            )}
      </td>
      <td className="" onClick={setTimetable}>
        <div style={{ maxWidth: '100px' }}>
          <DatePickerRange  stageNumber={stageNumber} amIAdmin={amIAdmin} updateDB={updateDB}  startPeriod={inputStartPeriod}  endPeriod={inputEndPeriod} coach={coach}/>
        </div>
      </td>
      <td className="relative" >
        <FontAwesomeIcon icon={faUserCircle } size="2x" style={{color:'#008B8B'}} onClick={setTrainees} />
          {isTraineesOpen && (
          <div ref={popupTraineesRef} className='bg-slate-500 opacity-100 z-10 flex flex-col justify-center p-3  absolute rounded-xl'>
            {amIAdmin &&(
              <>
              <input type="text" 
                value={inputSearchTrainees}  
                onChange={(val) => manipulateSuggestedTraineeList(val.target.value)}
                onKeyDown={(event)=>{
                if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                }
              }} 
              placeholder='חיפוש מתאמנים' 
              className="border border-gray-300 m-1 px-2 py-2 rounded-md w-25"
              />
              <p className='my-1 mx-2 text-white'>המלצות:</p>
              <div >
                {listSuggestedTraineees.map((trainee,index)=>{
                  return <p key={index} className='text-white flex mb-2' onClick={(trainees)=>{ addTraineeToSelectedTrainees(trainee)}}>
                    <Image src={trainee.image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
                    {trainee.name}
                 </p>
                })} 
              </div>
              </>
            )}
     
            
         
     
            <p className='my-1 mx-2 text-white'>משתתפים:</p>
            <div >
              {inputTrainees.map((trainee,index)=>{   
               
                //we locate this trainee in listTrainees, in order to retreive his image + name
                let image;  let name;
                listTrainees.map((item)=>{ 
                    if(item.email===trainee){
                      image = item?.image;
                      name = item?.name;
                    }
                  });
                return <p key={index} className={`text-white flex mb-2 justify-between` } onClick={()=>manipulateSelectedTrainessList(index)}>
                  <Image src={image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
                  {name}
                  {amIAdmin && <span onClick={()=> removeTraineeFromSelectedTrainees(trainee)}>X</span>}
               </p>
              })} 
            </div>
          </div>
            )}
          </td>
          <td className="px-6">  
            <input
               readOnly={amIAdmin?false:true}
               className='max-w-100 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
               type="text"
               value={inputLastStage}
               onChange={(event)=>{
                 setInputLastStage(event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                  console.log("aaaaaaaaaaaaaaa");
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               switch(stageNumber){
                 case '1': coaching.stage1.lastStage  = val;  break;
                 case '2': coaching.stage2.lastStage  = val; break;
                 case '3': coaching.stage3.lastStage  = val; break;
                 case '4': coaching.stage4.lastStage  = val; break;
                 case '5':  coaching.stage5.lastStage  = val; break;
                 case '6': coaching.stage6.lastStage  = val; break;
                 case '7': coaching.stage7.lastStage  = val; break;
                 case '8': coaching.stage8.lastStage  = val; break;
                 case '9': coaching.stage9.lastStage  = val; break;
                 case '10': coaching.stage10.lastStage  = val; break;
                 default: break;
                }
                updateDB();
               }}  
             />
           </td>
           <td className="px-2">
           <input
              readOnly={amIAdmin?false:true}
               className='max-w-50 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
               type="text"
               style={{ maxWidth: '100px' }}
               value={inputDurationInDays}
               onChange={(event)=>{
                 setInputDurationInDays(event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.durationInDays = val;  break;
                case '2': coaching.stage2.durationInDays  = val; break;
                case '3': coaching.stage3.durationInDays  = val; break;
                case '4': coaching.stage4.durationInDays  = val; break;
                case '5':  coaching.stage5.durationInDays  = val; break;
                case '6': coaching.stage6.durationInDays  = val; break;
                case '7': coaching.stage7.durationInDays  = val; break;
                case '8': coaching.stage8.durationInDays  = val; break;
                case '9': coaching.stage9.durationInDays  = val; break;
                case '10': coaching.stage10.durationInDays  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />
           </td>
           <td >
             <input
               readOnly={amIAdmin?false:true}
               className='max-w-50 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
               style={{ maxWidth: '100px' }}
               type="text"
               value={inputPlannedTimeValue}
               onChange={(event)=>{
                 setInputPlannedTimeValue(event.target.value);
               }}
               onKeyDown={(event)=>{
                  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                  }
                }
               }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.plannedTimeInHours = val;  break;
                case '2': coaching.stage2.plannedTimeInHours = val; break;
                case '3': coaching.stage3.plannedTimeInHours = val; break;
                case '4': coaching.stage4.plannedTimeInHours = val; break;
                case '5':  coaching.stage5.plannedTimeInHours = val; break;
                case '6': coaching.stage6.plannedTimeInHours = val; break;
                case '7': coaching.stage7.plannedTimeInHours = val; break;
                case '8': coaching.stage8.plannedTimeInHours = val; break;
                case '9': coaching.stage9.plannedTimeInHours = val; break;
                case '10': coaching.stage10.plannedTimeInHours = val; break;
                default: break;
               }
               updateDB();
             }}  
             />
           </td>
         </tr> 
    </>
    
         );
        } 


export default Stage
