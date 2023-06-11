import {useState} from 'react'

const chat = () => {
    
  // useStates///////////////////////////////////////////////////////////////////////
  const [inputMessage, setInputMessage] = useState("");
  
  /////////////////////////////////////////////////////////////////////////



  ////functions////////////////////////////////////////////////////////////////////
  const handleMessageChange = (val)=>{
    setInputMessage(val);
  }

  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div   style={{ backgroundImage: 'url("/assets/images/chat.jpg")' }} className='flex flex-col  bg-slate-500 bg-opacity-100  border-4 border-gray-500 border-dashed  absolute h-[400px] w-[300px]  md:h-[400px] md:w-[500px] right-5 md:right-[0px] z-20 text-white rounded-xl '>
    <div className="flex-grow">
       <p>aaaaaaaaaaaaaaaaaa</p>
    </div>

    
    <div className=" mt-auto mb-2  bg-gray-200  flex h-10 ">
      <input
       type="text"
       value={inputMessage}
       onChange={(event) => handleMessageChange(event.target.value)}
       placeholder="כתבו כאן..."
       className="bg-white  text-gray-800 p-2 rounded-lg flex-grow outline-none "
      />
      <button
       //onClick={handleSendMessage}
       className="bg-blue-500 text-white  rounded-lg p-2 "
      >
       שליחה
      </button>
   </div>
 </div>
  )
}

export default chat
