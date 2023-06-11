import {useState,useEffect} from 'react'

const chat = ({coach,amIAdmin,updateDB}) => {
    
  // useStates///////////////////////////////////////////////////////////////////////
  const [inputMessage, setInputMessage] = useState("");
  const [chatContents, setChatContents] = useState([]);
  const [newMessageSaved, setNewMessageSaved] = useState(false);
  //useEffects///////////////////////////////////////////////////////////////////////
  useEffect(()=>{
    setNewMessageSaved(false);
   setChatContents(coach.chat);
  }, [newMessageSaved]);


  ////functions////////////////////////////////////////////////////////////////////
  const handleMessageChange = (val)=>{
    setInputMessage(val);
  }
  
  const handleSendButtonClicked = ()=>{    
      let arr = chatContents;
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();
      const newMessage = {
        isAdmin: amIAdmin,
        message:inputMessage,
        date:formattedDate,
        time:formattedTime
      }
      arr.push(newMessage);
      coach.chat = arr;
      updateDB();
      setNewMessageSaved(true);
  }

  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div   style={{ backgroundImage: 'url("/assets/images/chat.jpg")' }} className='flex flex-col overflow-y-auto border-4 border-gray-500 border-dashed  absolute h-[400px] w-[300px]  md:h-[400px] md:w-[500px] right-5 md:right-[0px] z-20 text-white rounded-xl '>
    <div className="flex-grow">
       {
         chatContents.map((m)=>{
           return m.isAdmin===true ? 
            <div className="ml-5 mr-5 mb-5">
              <p className=" bg-gray-100  rounded-md text-black p-2"> <b>מדריך:</b> {m.message}  <span className='text-xs'>{m.date} {m.time}</span></p> 
            </div>
           :
            <div className="mx-10 mb-5">
              <p className="bg-green-200 rounded-md text-black p-2">
                <b>חניך:</b> {m.message}  <span className='text-xs'>{m.date} {m.time}</span>
              </p>
            </div>
            
            
})
      }
    </div>

    
    <div className=" mt-auto mb-2 mx-3  bg-gray-200  flex h-10 ">
      <input
       type="text"
       maxLength={100}
       value={inputMessage}
       onChange={(event) => handleMessageChange(event.target.value)}
       placeholder="כתבו כאן..."
       className="bg-white  text-gray-800 p-2 rounded-lg flex-grow outline-none "
      />
      <button
       onClick={handleSendButtonClicked}
       className="bg-blue-500 text-white  rounded-lg p-2 "
      >
       שליחה
      </button>
   </div>
 </div>
  )
}

export default chat
