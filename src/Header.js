import React from "react";

export default function Header({
  counter,
  isLogged,
  handleLogin,
  handleLogout,
}) {
  return (
    <header>
      <div> {counter} </div>
      {isLogged ? (
        <>
          <strong> Hello </strong>
          <button onClick={handleLogout}> logout </button>
        </>
      ) : (
        <button onClick={handleLogin}> login </button>
      )}
    </header>
  );
}