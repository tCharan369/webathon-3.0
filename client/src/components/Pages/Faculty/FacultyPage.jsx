import React, { useEffect, useState, useContext } from "react";
import { useUser } from "@clerk/clerk-react";
import { allUsersContextObj } from "../../../contexts/AllUsersContext";

function FacultyPage() {
  const { user } = useUser();
  const [dbUser, setDbUser] = useState(null);
  const [error, setError] = useState(null);
  const { setCurrentUser } = useContext(allUsersContextObj);

  const fetchUserFromDB = async () => {
    try {
      const clerkId = user?.id;
      if (!clerkId) throw new Error("User not signed in.");

      const res = await fetch(
        `http://localhost:1986/studentUser/user/${clerkId}`
      );

      if (!res.ok) throw new Error("Failed to fetch user from DB");

      const data = await res.json();
      setDbUser(data);
      setCurrentUser(data); // optional
    } catch (err) {
      console.error("Failed to fetch user info:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) fetchUserFromDB();
  }, [user]);

  if (error) return <div className="text-danger">Error: {error}</div>;
  if (!dbUser) return <div>Loading faculty dashboard...</div>;

  return (
    <div className="container mt-5">
      <h2>👨‍🏫 Faculty Dashboard</h2>
      <p>Welcome, {dbUser.fullName}!</p>
      <img
        src={dbUser.profileImage}
        alt="Profile"
        className="rounded-circle"
        width="100"
        height="100"
      />
      <p>Email: {dbUser.email}</p>
      <p>Role: {dbUser.role}</p>
      {/* Add faculty-specific content here */}
    </div>
  );
}

export default FacultyPage;
