// "use client";
// import { useState, FormEvent } from "react";
// import { useRouter } from "next/navigation";

// export default function Signup() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const router = useRouter();

//   const handleSignup = async (e: FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("/api/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     if (res.ok) {
//       setMessage("Signup successful! Redirecting...");
//       setTimeout(() => router.push("/login"), 2000);
//     } else {
//       setMessage("User already exists!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <form
//         onSubmit={handleSignup}
//         className="p-6 bg-white shadow-lg rounded-lg"
//       >
//         <h2 className="text-2xl font-bold mb-4">Signup</h2>
//         {message && <p className="text-green-500">{message}</p>}
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
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Signup failed");
      }

      const { token } = await response.json();
      localStorage.setItem("token", token);
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Name (optional)"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

