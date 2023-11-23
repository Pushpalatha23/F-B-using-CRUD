import React from 'react'

import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';


const App = () => {
  return (
    <BrowserRouter>
    <Navigate/>
    <Routes>
          <Route path="/" element={<CreateStudent/>} />
          <Route path="/update" element={<UpdateStudent/>} />
          <Route path="/get" element={<Student/>} />
          {/* <Route path="/Create" element={<CreateStudent/>} />
          <Route path="/Update/:id" element={<UpdateStudent/>}/> */}
             
    </Routes>
    </BrowserRouter>
  );
};
export default App;
