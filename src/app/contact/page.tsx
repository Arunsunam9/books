"use client";
import React, { useState } from "react";

const MyContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const valueChange=(value) => {
  //     console.log(value)
  // }

  // const handlesubmit = async (e: any) => {
  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(name, phone, email, message);
    if (!name || !phone || !email || !message) {
      alert("All fields are required!");
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, email, message }),
    });
    const data = await res.json();
    console.log(data.message);

    if (res.ok) {
      alert("Your message has been sent successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } else {
      alert("Error sending message");
    }
  };
  return (
    <div className="bg-white flex justify-center mt-20   ">
      <form className=" ">
        <label htmlFor="name">Name:</label>
        <br />
        {/* <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/> */}
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className=" border-2   border-black"
        />
        <br />
        <label htmlFor="phoneno">Phone No:</label>
        <br />
        <input
          type="number"
          id="phoneno"
          name="phoneno"
          onChange={(e) => setPhone(e.target.value)}
          className=" border-2   border-black"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" border-2   border-black"
        />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className=" border-2   border-black"
        />
        <br />

        <input
          className="p-2 bg-blue-500 text-white rounded-lg"
          type="submit"
          value="Submit"
          onClick={(e) => handlesubmit(e)}
        />
      </form>
    </div>
  );
};

export default MyContact;

// "use client";

// import React, { useState, useEffect } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Handle input change
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setSuccess("Message sent successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
//       } else {
//         setError(data.error || "Failed to send the message.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("An unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch contacts on load
//   const fetchContacts = async () => {
//     try {
//       const response = await fetch("/api/contact", {
//         method: "GET",
//       });

//       const data = await response.json();
//       if (data.success) {
//         setContacts(data.data || []);
//       } else {
//         setError("Failed to fetch contacts.");
//       }
//     } catch (err) {
//       console.error("Error fetching contacts:", err);
//       setError("An unexpected error occurred while fetching contacts.");
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

//       {/* Success and error messages */}
//       {success && (
//         <div className="p-2 bg-green-200 text-green-800 rounded">{success}</div>
//       )}
//       {error && (
//         <div className="p-2 bg-red-200 text-red-800 rounded">{error}</div>
//       )}

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Phone (Optional)</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           disabled={loading}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>

//       {/* Contact list */}
//       <div className="mt-8">
//         <h2 className="text-xl font-bold mb-4">Messages</h2>
//         {contacts.length > 0 ? (
//           <ul className="space-y-4">
//             {contacts.map((contact: any) => (
//               <li key={contact.id} className="p-4 border rounded shadow">
//                 <p className="font-bold">{contact.name}</p>
//                 <p>{contact.email}</p>
//                 <p>{contact.message}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No messages yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }
