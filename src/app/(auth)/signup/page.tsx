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
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   {error && (
    //     <p className="text-red-500 mb-2">{error}</p> // Error message styling
    //   )}
    //   <form onSubmit={handleSubmit} className="p-10 shadow-lg rounded-lg w-96">
    //     <h2 className="text-xl  font-serif mb-10">Sign Up</h2>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={formData.email}
    //       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    //       className="w-full p-2 border rounded mb-3"
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={formData.password}
    //       onChange={(e) =>
    //         setFormData({ ...formData, password: e.target.value })
    //       }
    //       className="w-full p-2 border rounded mb-10"
    //       required
    //     />
    //     <input
    //       type="text"
    //       placeholder="Name (optional)"
    //       value={formData.name}
    //       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    //     />
    //     <p className="text-center mt-4">
    //       <button type="submit">Sign Up</button>
    //     </p>
    //   </form>
    // </div>

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-10 shadow-lg rounded-lg w-96">
        <h2 className="text-xl font-serif mb-10">Create Your Account</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}{" "}
        {/* Error message styling */}
        <input
          type="text"
          placeholder="Name (optional)"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 border rounded mb-10"
          required
        />
        <button
          type="submit"
          className="w-full p-2 rounded bg-blue-500 text-white"
        >
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

