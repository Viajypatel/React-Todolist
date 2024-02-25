"use client";
import { useState } from "react"
export default function Home() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [array,setArray]=useState([]);
  
  const submitHand = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
     alert("plese fill input box");
      return;
    }
      setArray([...array, { id: Date.now(), title, desc }]);
      setTitle("");
      setDesc("");
    }
   

  const Delete =(id)=>{
      let rray= array.filter((ele)=>{
        return(
              ele.id!==id
        )
      })
      setArray(rray);
  }

  let tempArr="No task available";
  if(array.length>0){
    tempArr=array.map((ele)=>{
      return(
        
        <div key={ele.id}  className="flex justify-between mb-2">
        <li>{ele.title}</li>
        <li>{ele.desc}</li>
         <button onClick={()=>{Delete(ele.id)}}className="bg-red-700 rounded-lg p-2 text-white">Delete</button>
        </div>

      )
    })
  }
  return (
    <>
    <div className="h-[5rem] w-full bg-black ">
    <h1 className="text-white opacity-80 text-center pt-4 font-bold text-5xl">TO-DO-LIST</h1>
    </div>
    <div className="">
     <form onSubmit={submitHand} >
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title" className="border-2 border-zinc-800 mx-6 mt-6 h-8"/>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter description" className="border-2 border-zinc-800 mx-2 mt-6 h-8"/>
      <button  className="p-2 h-[2.2rem] caret-red-100 rounded-md bg-green-700 text-sm text-white font-semibold mx-2">Add Task</button>
      <div className="text-white w-full bg-slate-700 mt-4 ">
      <ul className="m-2">{tempArr}</ul>
      </div>
      {array.length>0&&<button onClick={() => setArray([])} className="bg-red-700 p-2 pr-2 rounded-sm text-center text-white font-semibold opacity-80">DeleteAll</button>}
     </form>
     </div>
   </>
  );
  }

