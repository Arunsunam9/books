"use client"


import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import jwtDecode from "jwt-decode";


interface User {
  userId: string;
  email: string;
  name: string;
  role: string;
}




const Sidebar = () => {

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
//     const decoded: User = jwtDecode(token);
//     setUser(decoded);
//   }
// }, []);
      






  // const [showmenu, setShowmenu] = useState(false);
  return (
    <div className="w-full bg-gray-800 text-white h-screen p-4">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/photo/user.jpg" // Replace with actual image URL
          alt="profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
        <h2 className="text-lg font-semibold mt-2">{user?.name} </h2>
        {/* Large Username */}
      </div>

      <ul className="space-y-4">
        <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          Dashboard
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          Users
        </li>
        <li className="relative p-2 hover:bg-red-600 rounded-md cursor-pointer text-white group">
          Product
          <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-md w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              <Link
                href="http://localhost:3000/admin/product/addproduct"
                className="block w-full h-full"
              >
                Add Product
              </Link>
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              <Link
                href="http://localhost:3000/admin/product/viewproduct"
                className="block w-full h-full"
              >
                View Product
              </Link>
            </li>
          </ul>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          Reports
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          Teams
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          Settings
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          Help
        </li>
        <li className="p-2 hover:bg-red-600 rounded-md cursor-pointer text-red-400">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
