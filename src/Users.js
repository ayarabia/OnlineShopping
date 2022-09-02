import React, { useState } from "react";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  return (
    <section className="users">
      <button onClick={getUsers} disabled={loading}>
        {" "}
        {!loading ? "Get Users" : "Loading ..."}{" "}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </section>
  );
}