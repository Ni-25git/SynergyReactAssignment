import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList/UserList';
import UserForm from './Components/UserForm/UserForm';
import UserDetail from './Components/UserDetails/UserDetails';


const App = () => {
  return (
   
      <div>
        <h1>User Management Application</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserForm />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
  
  );
};

export default App;
