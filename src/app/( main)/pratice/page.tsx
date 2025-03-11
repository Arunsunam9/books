// "use client";
// import React, { useState } from "react";

// const MyContact = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   // const valueChange=(value) => {
//   //     console.log(value)
//   // }

//   const handelsubmit =(e)=> {
//     e.preventDefault();
//     console.log(name, phone, email, message);
//   }
//   return (
//     <div className="bg-white flex justify-center mt-20   ">
//       <form className=" ">
//         <label htmlFor="name">Name:</label>
//         <br />
//         {/* <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/> */}
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <label htmlFor="phoneno">Phone No:</label>
//         <br />
//         <input
//           type="number"
//           id="phoneno"
//           name="phoneno"
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <br />
//         <label htmlFor="email">Email:</label>
//         <br />
//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label htmlFor="message">Message:</label>
//         <br />
//         <textarea
//           id="message"
//           name="message"
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <br />

//         <input
//           className="p-2 bg-blue-500 text-white rounded-lg"
//           type="submit"
//           value="Submit"
//           onClick={e=>handelsubmit(e)}
//         />
//       </form>
//     </div>
//   );
// };

// export default MyContact;

// "use client";

// import { useState  , useEffect } from "react";

// const MyComponent = () => {
//   const [name, setName] = useState("arun");
//   const [age, setAge] = useState("23");
//   const [count, setCount] = useState(0);

//   const ChangeName = () => {
//     setName("ankit");
//     setAge("25");
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     console.log("123456");
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));


//   },[count])

//   return (
//     <div>
//       <p>
//         {name} is {age}
//       </p>
//       <button onClick={ChangeName}>Change Name</button>
//       <br/>
//       <button onClick={ChangeName}>{count}</button>
//       {/* <button onClick={}>Change Name</button> */}
//     </div>
//   );
// };

// export default MyComponent;





