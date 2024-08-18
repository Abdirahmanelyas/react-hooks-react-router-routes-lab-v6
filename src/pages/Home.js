import React, { useState, useEffect } from "react"; // Import React and useEffect
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const userList = users.map((user) => {
    return <UserCard key={user.id} user={user} />;
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
}

export default Home;