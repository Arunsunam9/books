// // import { useCart } from "@/app/context/cartcontext";
// // import Link from "next/link";



// // const CartPage = () => {
// //   const { cartItems, removeFromCart } = useCart();

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-semibold">Your Cart</h1>

// //       {cartItems.length === 0 ? (
// //         <p className="text-center text-gray-600">Your cart is empty.</p>
// //       ) : (
// //         <div className="mt-4 space-y-4">
// //           {cartItems.map((item) => (
// //             <div
// //               key={item.id}
// //               className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg"
// //             >
// //               <div className="flex items-center">
// //                 <img
// //                   src={item.image}
// //                   alt={item.name}
// //                   className="w-20 h-20 object-cover"
// //                 />
// //                 <div className="ml-4">
// //                   <h3 className="text-lg font-semibold">{item.name}</h3>
// //                   <p>Rs {item.price}</p>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => removeFromCart(item.id)}
// //                 className="text-red-600 hover:text-red-800"
// //               >
// //                 Remove
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CartPage;

// "use client"


// // app/cart/page.tsx
// import { useCart } from "@/app/context/cartcontext"; // Adjust path
// import Link from "next/link";

// const CartPage = () => {
//   const { cartItems } = useCart(); // Assuming useCart provides cart data

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty. <Link href="/">Go back to shopping</Link></p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map(item => (
//               <li key={item.id}>
//                 <p>{item.name} - Rs {item.price}</p>
//                 {/* Add any other cart item details */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

