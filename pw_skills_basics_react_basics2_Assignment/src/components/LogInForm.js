import React from 'react';

const LogInForm = () => {
  return (
    <form>
      <label>Username:</label>
      <input type="text" name="username" />

      <label>Password:</label>
      <input type="password" name="password" />

      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInForm;
