import React from 'react'
import axios from'axios'
import {useEffect,data,useState,i}from 'react'
import {Link} from 'react-router-dom';


function Student() {
    const[Student,setStudent]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8090')
        .then(res=>setStudent(res,data))
        .catch(err=>console.log(err));

    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded'>
            <Link to="/Create" className='btn btn success'>Add+</Link>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Board</th>
                    <th>School</th>
                    <th>Pre_Class_Score</th>
                    <th>Subject</th>
                    <th>Timings</th>
                    <th>Parent_number</th>
                    <th>Guardian_Name</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        Student.map((data,i)>(
                            <tr key={i}>
                                <td>{data.Name}</td>
                                <td>{data.Class}</td>
                                <td>{data.Board}</td>
                                <td>{data.School}</td>
                                <td>{data.Pre_Class_Score}</td>
                                <td>{data.Subject}</td>
                                <td>{data.Timings}</td>
                                <td>{data.Parent_number}</td>
                                <td>{data.Guardian_Name}</td>
                                <td>
                                    <Link to ={`update/${data.ID}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-Danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default Student
