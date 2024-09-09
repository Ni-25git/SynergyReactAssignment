import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../UserForm/UserForm';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); 
  const [selectedUserId, setSelectedUserId] = useState(null); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  const handleEdit = (id) => {
    setSelectedUserId(id);
    setShowModal(true);
  };

  if (loading) return <div className="text-center">Loading...</div>;

  const addFormdata = (formData) => {
    console.log("Add Form",formData)
    setUsers([...users,formData])
  }
   console.log("usersData",users)
  return (
    <div className="container mx-auto mt-10">
      <button 
        onClick={() => {
          setSelectedUserId(null); 
          setShowModal(true);
        }} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Create User
      </button>

      
      <ul className="mt-4">
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center p-4 border-b">
            <div>
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            <div>
              <button 
                onClick={() => handleEdit(user.id)} 
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
                Edit
              </button>
              <button 
                onClick={() => handleDelete(user.id)} 
                className="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedUserId ? 'Edit User' : 'Create New User'}</h2>
            
           
            <UserForm id={selectedUserId} onClose={() => setShowModal(false)}  AddFormData={addFormdata} />
            
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
