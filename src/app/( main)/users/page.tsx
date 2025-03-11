import React from 'react'


interface Data{
    id:number;
    username: string;
    name:string;
    email:string;
}

const UserNames = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{ cache: 'no-store'});
    const data : Data[] = await res.json();
  return (
    <div className="py-5 g-5">
      <h1 className="font font-bold ">User Names</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <button className="btn btn-primary">Primary</button>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <h2>{data.id}</h2>
            <h2>{data.username}</h2>
            <h2>{data.name}</h2>
            <h2>{data.email}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserNames;

// const UserId = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//   const data : Data = await res.json();
//   return (
//     <div>
//         <h1>user id: {data.id}</h1>
//         <h1>id : {data.id}</h1>
//         <h2>title: {data.name}</h2>
//         <h4>Body: {data.body}</h4>
    
//     </div>
//   )
// }

// export default UserNames ; UserId ;