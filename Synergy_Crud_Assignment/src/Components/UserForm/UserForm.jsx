import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ id, onClose ,AddFormData}) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => setUser(response.data));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
        .then((response) => {
            AddFormData(response.data)
          onClose(); 
        });
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then((response) => {
            AddFormData(response.data); 
          onClose(); 
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone:</label>
        <input
          type="tel"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {id ? 'Update' : 'Create'} User
      </button>
    </form>
  );
};

export default UserForm;
