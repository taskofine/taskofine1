'use client'
import {useState, useEffect,useRef} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Chat from './chat';


const Task = ({stageNumber, amIAdmin,index, updateDB, indexRenderedTasks, setIndexRenderedTasks, isSkeletonUpdated, listTrainees, coach, inputTraineesSpecific}) => {
  const popupTraineesRef = useRef(null);
  const popupStatusRef = useRef(null);
  const popupChatRef = useRef(null);

  const [inputTraineesSpecificTask, setInputTraineesSpecificTasks] = useState([]); 

  let name='';
  let status='';
  let trainees = [];
  let connectBoard='';
  let files=[];
  const router = useRouter();
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const setChatPopup = () =>{
    setIsChatPopupOpen(!isChatPopupOpen);
  }
  const [isTaskStatusOpen, setIsTaskStatusOpen] = useState(false);
  const setTaskStatus = () => {
  
    setIsTaskStatusOpen(!isTaskStatusOpen);
  }
  
  const [inputConnectBoard, setInputConnectBoard] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputEndDate, setInputEndDate] = useState(new Date());
  //const [inputTrainees, setInputTrainees] = useState("");
  const [listSuggestedTraineees, setListSuggestedTrainees] = useState([]);
  const [listSelectedTraineees, setListSelectedTrainees] = useState([]);
  const [inputSearchTrainees, setInputSearchTrainees] = useState("");
  const [inputFiles, setInputFiles] = useState([]);
  const [isFileOpen, setIsFileOpen]  = useState(false);
  const setFile = () =>{
    setIsFileOpen(!isFileOpen);
  }
  const [isTraineesOpen, setIsTraineesOpen] = useState(false);
  const setTrainees =  () =>  {
    setIsTraineesOpen(!isTraineesOpen);
  }
  const [chatContents, setChatContents] =  useState([]);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const updateIsSuccessAlertOpen = (val)=>{
   setIsSuccessAlertOpen(!isSuccessAlertOpen);  
  }

 

  useEffect(()=>{    
    if(!(indexRenderedTasks.includes(index))){
    
      //updating indexRenderedTasks to hold also this index
      setListSuggestedTrainees(listTrainees);
      let arr = indexRenderedTasks;
      arr.push(index);
      setIndexRenderedTasks(arr);
      setChatContents(coaching.chat);
      setInputTraineesSpecificTasks(inputTraineesSpecific);
      switch(stageNumber){
        case '1': 
          setInputName(coach.stage1.tasks[index].name);
          setInputStatus(coach.stage1.tasks[index].status);
          setInputConnectBoard(coach.stage1.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage1.tasks[index].endTime));
         // updateInputTrainees(11,coach.stage1.tasks[index].trainees);
          setInputFiles(coach.stage1.tasks[index].files);
          break;
        case '2': 
          setInputName(coach.stage2.tasks[index].name);
          setInputStatus(coach.stage2.tasks[index].status);
          setInputConnectBoard(coach.stage2.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage2.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage2.tasks[index].trainees);
          setInputFiles(coach.stage2.tasks[index].files);
          break;
        case '3': 
          setInputName(coach.stage3.tasks[index].name);
          setInputStatus(coach.stage3.tasks[index].status);
          setInputConnectBoard(coach.stage3.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage3.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage3.tasks[index].trainees);
          setInputFiles(coach.stage3.tasks[index].files);
          break;
        case '4': 
          setInputName(coach.stage4.tasks[index].name);
          setInputStatus(coach.stage4.tasks[index].status);
          setInputConnectBoard(coach.stage4.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage4.tasks[index].endTime));
         // updateInputTrainees(stageNumber,coach.stage4.tasks[index].trainees);
          setInputFiles(coach.stage4.tasks[index].files);
          break;
        case '5': 
          setInputName(coach.stage5.tasks[index].name);
          setInputStatus(coach.stage5.tasks[index].status);
          setInputConnectBoard(coach.stage5.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage5.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage5.tasks[index].trainees);
          setInputFiles(coach.stage5.tasks[index].files);
          break; 
        case '6': 
          setInputName(coach.stage6.tasks[index].name);
          setInputStatus(coach.stage6.tasks[index].status);
          setInputConnectBoard(coach.stage6.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage6.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage6.tasks[index].trainees);
          setInputFiles(coach.stage6.tasks[index].files);
          break;
        case '7': 
          setInputName(coach.stage7.tasks[index].name);
          setInputStatus(coach.stage7.tasks[index].status);
          setInputConnectBoard(coach.stage7.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage7.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage7.tasks[index].trainees);
          setInputFiles(coach.stage7.tasks[index].files);
          break;
        case '8': 
          setInputName(coach.stage8.tasks[index].name);
          setInputStatus(coach.stage8.tasks[index].status);
          setInputConnectBoard(coach.stage8.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage8.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage8.tasks[index].trainees);
          setInputFiles(coach.stage8.tasks[index].files);
          break;
        case '9': 
          setInputName(coach.stage9.tasks[index].name);
          setInputStatus(coach.stage9.tasks[index].status);
          setInputConnectBoard(coach.stage9.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage9.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage9.tasks[index].trainees);
          setInputFiles(coach.stage9.tasks[index].files);
          break; 
        case '10': 
          setInputName(coach.stage10.tasks[index].name);
          setInputStatus(coach.stage10.tasks[index].status);
          setInputConnectBoard(coach.stage10.tasks[index].connectBoard);
          setInputEndDate(new Date(coach.stage10.tasks[index].endTime));
          //updateInputTrainees(stageNumber,coach.stage10.tasks[index].trainees);
          setInputFiles(coach.stage10.tasks[index].files);
          break;                
        default: break;  
      } 
    }
  }, [isSkeletonUpdated]);






useEffect(()=>{  
   //event listeners
   const handleClickOutside = (event) => {   
    if (popupTraineesRef.current && !popupTraineesRef.current.contains(event.target)) {
      setTrainees();
    }
    else  if (popupStatusRef.current && !popupStatusRef.current.contains(event.target)) {
      setTaskStatus();
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








  const handleEndDateChange = (date) => {
    
     setInputEndDate(date);

    switch(stageNumber){
      case '1': coaching.stage1.tasks[index].endTime = date; break;
      case '2': coaching.stage2.tasks[index].endTime = date; break;
      case '3': coaching.stage3.tasks[index].endTime = date; break;
      case '4': coaching.stage4.tasks[index].endTime = date; break;
      case '5': coaching.stage5.tasks[index].endTime = date; break;
      case '6': coaching.stage6.tasks[index].endTime = date;  break;
      case '7': coaching.stage7.tasks[index].endTime = date;  break;
      case '8': coaching.stage8.tasks[index].endTime = date;  break;
      case '9': coaching.stage9.tasks[index].endTime = date;  break;
      case '10': coaching.stage10.tasks[index].endTime = date;  break;
      default: break;
     }
     updateDB();
  };

  

  const populateStatusInCoaching = (val) => {
    setInputStatus(val);
    setIsTaskStatusOpen(false);
    switch(stageNumber){
    case '1': coaching.stage1.tasks[index].status=val;  break;
    case '2': coaching.stage2.tasks[index].status=val; break;
    case '3': coaching.stage3.tasks[index].status=val; break;
    case '4': coaching.stage4.tasks[index].status=val; break;
    case '5': coaching.stage5.tasks[index].status=val; break;
    case '6': coaching.stage6.tasks[index].status=val; break;
    case '7': coaching.stage7.tasks[index].status=val; break;
    case '8': coaching.stage8.tasks[index].status=val; break;
    case '9': coaching.stage9.tasks[index].status=val; break;
    case '10': coaching.stage10.tasks[index].status=val; break;
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
      let arr = inputTraineesSpecificTask;
      !arr.includes(trainee?.email) &&  arr.push(trainee?.email);
   
     setInputTraineesSpecificTasks(arr); 
     setIsTraineesOpen(false); 
     switch(stageNumber){
       case '1': coaching.stage1.tasks[index].trainees=arr;  break;
       case '2': coaching.stage2.tasks[index].trainees=arr; break;
       case '3': coaching.stage3.tasks[index].trainees=arr; break;
       case '4': coaching.stage4.tasks[index].trainees=arr; break;
       case '5': coaching.stage5.tasks[index].trainees=arr; break;
       case '6': coaching.stage6.tasks[index].trainees=arr; break;
       case '7': coaching.stage7.tasks[index].trainees=arr; break;
       case '8': coaching.stage8.tasks[index].trainees=arr; break;
       case '9': coaching.stage9.tasks[index].trainees=arr; break;
       case '10': coaching.stage10.tasks[index].trainees=arr; break;
       default: break;
       }
       updateDB();
    }
 
 
 


 
    const removeTraineeFromSelectedTrainees = (trainee) => {
    
     //trainee is the email of the trainee we wish to remove
     //we use here inputTrainees that holds the selected trainees
     let arr = [];
 
     inputTraineesSpecificTask.map((train)=>{
       if(train!==trainee){  
         arr.push(train);
       }
     
     });   
    
     setInputTraineesSpecificTasks(arr);
     setIsTraineesOpen(false);
     switch(stageNumber){
       case '1': coaching.stage1.tasks[index].trainees=arr;  break;
       case '2': coaching.stage2.tasks[index].trainees=arr; break;
       case '3': coaching.stage3.tasks[index].trainees=arr; break;
       case '4': coaching.stage4.tasks[index].trainees=arr; break;
       case '5': coaching.stage5.tasks[index].trainees=arr; break;
       case '6': coaching.stage6.tasks[index].trainees=arr; break;
       case '7': coaching.stage7.tasks[index].trainees=arr; break;
       case '8': coaching.stage8.tasks[index].trainees=arr; break;
       case '9': coaching.stage9.tasks[index].trainees=arr; break;
       case '10': coaching.stage10.tasks[index].trainees=arr; break;
       default: break;
       }
       updateDB();
    }


  return(
    <div className=''>
      {isSuccessAlertOpen && <div className='absolute w-full h-[50px] bg-green-500 rounded-lg text-center font-bold text-xl'>השינוי שהכנסת נקלט</div>}   
     <tr>
     <th scope="col" className="px-10 py-3">
        קבצים
      </th>
      <th scope="col" className="px-0 py-3">
        המשימה
      </th>
      <th scope="col" className="px-6 py-3">
        צ'ט
      </th>
      <th scope="col" className="px-6 py-3">
        סטטוס המשימה
      </th>
      <th scope="col" className="px-2 py-3">
        מועד הגשה
      </th>
      <th scope="col" className="px-0 py-3">
        מבצע המשימה
      </th>
      
      <th scope="col" className="px-6 py-3">
       יצירת קשר
      </th>
    </tr>

    <tr  className="">
      
    <td>  
      <div className="mx-10 flex gap-1">
      {
       inputFiles.map((file)=>{  
         return( 
            <button key={file._id}  onClick={() => window.open("/assets/files/" + file, "_blank")}>
              <FontAwesomeIcon   icon={faFileCode }  size="2x" style={{color:'#DC143C'}} />
            </button> 
         )
       }) 
      }
      </div> 
    </td>


    <td scope="row" className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      
    <input
      readOnly={amIAdmin?false:true}
      className='max-w-100 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
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
            case '1': coaching.stage1.tasks[index].name = val;  break;
            case '2': coaching.stage2.tasks[index].name  = val; break;
            case '3': coaching.stage3.tasks[index].name  = val; break;
            case '4': coaching.stage4.tasks[index].name  = val; break;
            case '5':  coaching.stage5.tasks[index].name  = val; break;
            case '6': coaching.stage6.tasks[index].name  = val; break;
            case '7': coaching.stage7.tasks[index].name  = val; break;
            case '8': coaching.stage8.tasks[index].name  = val; break;
            case '9': coaching.stage9.tasks[index].name  = val; break;
            case '10': coaching.stage10.tasks[index].name  = val; break;
            default: break;
            }
            updateDB();
            if(amIAdmin){
              setIsSuccessAlertOpen(true);
              setTimeout(()=>setIsSuccessAlertOpen(false),2000);
             }
            
            }}  
          /> 
    </td>
    <td className="py-4 px-6 relative">
      <FontAwesomeIcon icon={faComment } size="xl" style={{color:'#FFD700'}} onClick={()=> {setChatPopup();} }/>
      {isChatPopupOpen && (
      <Chat coach={coach} amIAdmin={amIAdmin} updateDB={updateDB}/>
      )}
    </td>
    <td className="px-4 py-4 relative" >
      <div onClick={setTaskStatus} className='' >   
        <div className='bg-white flex flex-wrap static w-40'>
          {(inputStatus==="משימה חדשה" || status) && <button className='bg-orange-400 w-40 text-center mt-2 p-2 rounded-md'>משימה חדשה</button>}
          {(inputStatus==="משימה בוצעה" || status) && <button className='bg-green-400 w-40 text-center mt-2 p-2 rounded-md'>משימה בוצעה</button>}
          {(inputStatus==="משימה בבדיקה" || status) && <button className='bg-yellow-400 w-40 text-center mt-2 p-2 rounded-md'>משימה בבדיקה</button>}
          {(inputStatus==="משימה לעריכה" || status) && <button className='bg-red-400 w-40 text-center mt-2 p-2 rounded-md'>משימה לעריכה</button>}
          {(inputStatus==="משימה נערכה" || status) && <button className='bg-pink-400 w-40 text-center mt-2 p-2 rounded-md'>משימה נערכה</button>}
          {(inputStatus==="אלחי תציל אותי" || status) && <button className='bg-orange-600 w-40 text-center mt-2 p-2 rounded-md'>אלחי תציל אותי</button>}
          {(inputStatus==="הושלם בהצלחה" || status) && <button className='bg-purple-600 w-40 text-center mt-2 p-2 rounded-md'>הושלם בהצלחה</button>}
          {(inputStatus==="איחור בהגשה" || status) && <button className='bg-black w-40 text-center mt-2 p-2 rounded-md'>איחור בהגשה</button>}
        </div>
      </div> 
      {isTaskStatusOpen && (
        <div ref={popupStatusRef} className='absolute bg-slate-500 top-[-10px] bg-opacity-100 z-10 rounded-xl'>
          <p className='bg-orange-400 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "משימה חדשה"; populateStatusInCoaching(val);}} >משימה חדשה</p>
          <p className='bg-green-400 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "משימה בוצעה";  populateStatusInCoaching(val);}} >משימה בוצעה</p>
          <p className='bg-yellow-400 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "משימה בבדיקה";  populateStatusInCoaching(val);}} >משימה בבדיקה</p>
          <p className='bg-red-400 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "משימה לעריכה"  ;populateStatusInCoaching(val);}} >משימה לעריכה</p>
          <p className='bg-pink-400 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "משימה נערכה"  ;populateStatusInCoaching(val);}} >משימה נערכה</p>
          <p className='bg-orange-600 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "אלחי תציל אותי";  populateStatusInCoaching(val);}} >אלחי תציל אותי</p>
          <p className='bg-purple-600 w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "הושלם בהצלחה";   populateStatusInCoaching(val);}} >הושלם בהצלחה</p>
          <p className='bg-black text-white w-40 text-center m-2 p-2 rounded-md' onClick={()=>{const val = "איחור בהגשה"  ;populateStatusInCoaching(val);}} >איחור בהגשה</p>
        </div>
      )}
    </td>
    <td className="">
      <div className="px-2" style={{ maxWidth: '100px' }}>
        <DatePicker disabled={amIAdmin?false:true}  className='flex' dateFormat="dd/MM/yyyy" selected={new Date(inputEndDate)}  onChange={(date) => handleEndDateChange(date)}  minDate={new Date()} />
      </div>  
    </td>
    <td className="text-center relative">
      <div style={{ maxWidth: '100px' }}>
        <FontAwesomeIcon icon={faUserCircle }  size="3x" style={{color:'#008B8B'}}  onClick={setTrainees} />
      </div>  
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
          
          <p className='my-1 mx-16 text-white'>משתתפים:</p>
          <div>
              {inputTraineesSpecificTask.map((trainee,index)=>{   
                //we locate this trainee in listTrainees, in order to retreive his image + name
                let image;  let name;
                listTrainees.map((item)=>{ 
                    if(item.email===trainee){
                      image = item?.image;
                      name = item?.name;
                    }
                  });
                return <p key={index} className='text-white flex mb-2 justify-between' onClick={()=>manipulateSelectedTrainessList(index)}>
                  <Image src={image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
                  {name}
                  {amIAdmin &&
                  <span style={{ cursor: 'pointer' }} onClick={()=> removeTraineeFromSelectedTrainees(trainee)}>X</span>}
               </p>
              })} 
            </div>  
         </div>    
         
           
            )}
    </td>
    



    <td>
   
      <div  className="px-6">
      
       <input
        style={{ minWidth: '200px' }}
        className='py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
        type="text"
        maxLength={100}
        value={inputConnectBoard}
        onChange={(event)=>{
          setInputConnectBoard (event.target.value);
          
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
            case '1': coaching.stage1.tasks[index].connectBoard = val;  break;
            case '2': coaching.stage2.tasks[index].connectBoard  = val; break;
            case '3': coaching.stage3.tasks[index].connectBoard  = val; break;
            case '4': coaching.stage4.tasks[index].connectBoard  = val; break;
            case '5':  coaching.stage5.tasks[index].connectBoard  = val; break;
            case '6': coaching.stage6.tasks[index].connectBoard  = val; break;
            case '7': coaching.stage7.tasks[index].connectBoard  = val; break;
            case '8': coaching.stage8.tasks[index].connectBoard  = val; break;
            case '9': coaching.stage9.tasks[index].connectBoard  = val; break;
            case '10': coaching.stage10.tasks[index].connectBoard  = val; break;
            default: break;
            }
               updateDB();
               setIsSuccessAlertOpen(true);
               setTimeout(()=>setIsSuccessAlertOpen(false),2000);
             }}  
             />
        </div>     
    </td>






  </tr>
  </div>
  );
}

export default Task