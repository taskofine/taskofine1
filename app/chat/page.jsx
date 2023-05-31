'use client'
import React,{useState,useEffect} from 'react';
import coaching  from '../../utils/skeletonCoaching';
import { useRouter } from "next/router";


const ChatPage = () => {

  
  const isSkeletonUpdated = localStorage.getItem("isSkeletonUpdated");
  const chat = JSON.parse(localStorage.getItem("chat"));
  const [chatContents, setChatContents] = useState([]);
 
  
  useEffect(()=>{
    //setChatContents(chat);
    lior();

  },[]);


const lior = ()=>{
  const { query } = useRouter();
}



  return (
    <div>ChatPage</div>
  )
}

export default ChatPage
