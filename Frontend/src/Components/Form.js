import React from 'react';
const Form = () => {
  return (
    <form method="POST" action="/api/world">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
