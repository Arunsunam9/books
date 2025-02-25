"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  userId: string;
  email: string;
  name: string;
  role: string;
}

export default function Admin() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.push("/login"); // Redirect to login if no token is found
    } else if (role !== "admin") {
      router.push("/"); // Redirect to user dashboard if role is not admin
    } else {
      // Decode JWT token to get user details
      const decodedToken = JSON.parse(atob(token.split(".")[1])) as {
        userId: string;
        email: string;
        name: string;
        role: string;
      };
      console.log(decodedToken); // Log the decoded token

      setUser(decodedToken); // Set user as decodedToken
      // console.log(setUser);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    localStorage.removeItem("role"); // Remove the role
    router.push("/"); // Redirect to login
  };

  return (
    <div className="text-yellow-100"> 
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
