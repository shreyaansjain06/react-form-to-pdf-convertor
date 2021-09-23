import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({ name: '' });
  let name, value;
  const handleInput = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = user;
    try {
      const res = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await res.json();
      console.log('succesfully registered');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form method="POST">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={user.valuevalue}
        onChange={handleInput}
      />

      <input type="submit" onClick={handleSubmit} />
    </form>
  );
};
export default Form;
