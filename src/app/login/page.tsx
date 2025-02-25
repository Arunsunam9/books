// "use client";
// import { useState, FormEvent } from "react";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const router = useRouter();

//   const handleLogin = async (e: FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       localStorage.setItem("token", data.token);
//       router.push("/dashboard");
//     } else {
//       setError(data.error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <form
//         onSubmit={handleLogin}
//         className="p-6 bg-white shadow-lg rounded-lg"
//       >
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Login failed");
      }

      const data = await response.json();
      console.log(data);

      const { token, user } = data; // Extract token and role from the response
      console.log(user);

      // Store token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role); // Store the role

      // Redirect based on role
      if (user === "admin") {
        router.push("/admin");
      } else {
        router.push("/admin"); // Redirect normal users to the dashboard
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow-lg rounded-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && (
          <p className="text-red-500 mb-2">{error}</p> // Error message styling
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button
          type="submit"
          className="w-full p-2 rounded bg-blue-500 text-white"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500">
          Sign up
        </a>
      </p>
    </div>
  );
}
