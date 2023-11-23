import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


function UpdateStudent() {
    const[Name,setName]=useState('')
    const[Class,setClass]=useState('')
    const[Board,setBoard]=useState('')
    const[School,setSchool]=useState('')
    const[Pre_Class_Score,setPre_Class_Score]=useState('')
    const[Subject,setSubject]=useState('')
    const[Timings,setTimings]=useState('')
    const[Parent_number,setParent_number]=useState('')
    const[Guardian_Name,setGuardian_Name]=useState('')
    const{id}=useParams();
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8090/update/'+id,{Name,Class,Board,School,Pre_Class_Score,Subject,Timings,Parent_number,Guardian_Name})
        .then(res=>{
            console.log(res);
            navigate('./');

        }).catch(err=>console.log(err));
    }
    
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
            <h2>UPDATE STUDENT</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text"placeholder="Enter Name"className="form-control"
                onChange={e=>setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Class</label>
                <input type="text"placeholder="Enter Class"className="form-control"
                  onChange={e=>setClass(e.target.value)}
                  />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Board</label>
                <input type="text"placeholder="Enter Board"className="form-control"
                  onChange={e=>setBoard(e.target.value)}
                  />
            </div>
            <div className='mb-2'>
                <label htmlFor="">School</label>
                <input type="text"placeholder="Enter School"className="form-control"
                onChange={e=>setSchool(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Pre_Class_Score</label>
                <input type="number"placeholder="Enter Pre_Class_Score"className="form-control"
                onChange={e=>setPre_Class_Score(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Subject</label>
                <input type="text"placeholder="Enter Subject"className="form-control"
                onChange={e=>setSubject(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Timings</label>
                <input type="time"placeholder="Enter Timings"className="form-control"

                onChange={e=>setTimings(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Parent_number</label>
                <input type="number"placeholder="Enter Parent_number"className="form-control"
                onChange={e=>setParent_number(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Guardian_Name</label>
                <input type="text"placeholder="Enter Guardian_Name"className="form-control"
                onChange={e=>setGuardian_Name(e.target.value)}
                />
            </div>
            <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent
