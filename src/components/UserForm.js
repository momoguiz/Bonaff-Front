import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user, onUpdate }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await axios.patch(`http://localhost:8000/api/users/${user.id}`, formData);
      onUpdate();
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          disabled={isUpdating}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isUpdating}
        />
      </div>
      <button type="submit" disabled={isUpdating}>
        Mettre à jour
      </button>
    </form>
  );
};

export default UserForm;
