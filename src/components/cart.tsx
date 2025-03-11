// import { useCart } from "@/app/context/cartcontext"; // Adjust path
// import Link from "next/link";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetDescription,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";



// const CartPage = () => {
//   const { cartItems } = useCart(); // Assuming useCart provides cart data

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>
//           Your cart is empty. <Link href="/">Go back to shopping</Link>
//         </p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 <p>
//                   {item.name} - Rs {item.price}
//                 </p>
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



// import { useCart } from "@/app/context/cartcontext"; // Adjust path
// import { Search, ShoppingCart } from "lucide-react";

// import Link from "next/link";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";


// // const CartPage = () => {


//   const { cartCount } = useCart(); // Ensure `useCart` is correctly imported




//  <Sheet>
//    {/* Cart Icon as Trigger */}
//    <SheetTrigger asChild>
//      <li className="relative cursor-pointer">
//        <ShoppingCart className="w-8 h-8 text-white" />
//        {cartCount > 0 && (
//          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//            {cartCount}
//          </span>
//        )}
//      </li>
//    </SheetTrigger>

//    {/* Drawer Content */}
//    <SheetContent>
//      <SheetHeader>
//        <SheetTitle>Your Cart</SheetTitle>
//        <SheetDescription>Here are the items in your cart.</SheetDescription>
//      </SheetHeader>

//      {/* Example Cart Items (Replace with actual cart data) */}
//      <div className="mt-4">
//        <p>Item 1 - $10</p>
//        <p>Item 2 - $15</p>
//        <p>Item 3 - $20</p>
//      </div>

//      {/* Checkout Button */}
//      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
//        Proceed to Checkout
//      </button>
//    </SheetContent>
//  </Sheet>;















// import { useCart } from "@/app/context/cartcontext"; // Adjust path
// import Link from "next/link";
// import { Search, ShoppingCart } from "lucide-react";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";



// const CartPage = () => {
//   const { cartItems } = useCart(); // Assuming useCart provides cart data


//     const { cartCount } = useCart(); // Ensure `useCart` is correctly imported


//   return (


//      <Sheet>
//    {/* Cart Icon as Trigger */}
//    {/* <SheetTrigger asChild>
//      <li className="relative cursor-pointer">
//        <ShoppingCart className="w-8 h-8 text-white" />
//        {cartCount > 0 && (
//          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//            {cartCount}
//          </span>
//        )}
//      </li>
//    </SheetTrigger> */}

//    {/* Drawer Content */}
//    <SheetContent>
//      <SheetHeader>
//        <SheetTitle>Your Cart</SheetTitle>
//        <SheetDescription>Here are the items in your cart.</SheetDescription>
//      </SheetHeader>

//      {/* Example Cart Items (Replace with actual cart data) */}
//      <div className="mt-4">
//            <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>
//           Your cart is empty. <Link href="/">Go back to shopping</Link>
//         </p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 <p>
//                   {item.name} - Rs {item.price}
//                 </p>
//                 {/* Add any other cart item details */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
//      </div>

//      {/* Checkout Button */}
//      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
//        Proceed to Checkout
//      </button>
//    </SheetContent>
//  </Sheet>


    
//   );
// };

// export default  CartPage;











// "use client";

// import { useCart } from "@/app/context/cartcontext"; // Adjust path
// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";

// const CartPage = () => {
//   const { cartItems, cartCount } = useCart(); // Single useCart call

//   return (
//     <Sheet>
//       {/* Drawer Content */}
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Your Cart</SheetTitle>
//           <SheetDescription>Here are the items in your cart.</SheetDescription>
//         </SheetHeader>

//         <div className="mt-4">
//           <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//             {cartItems.length === 0 ? (
//               <p>
//                 Your cart is empty. <Link href="/">Go back to shopping</Link>
//               </p>
//             ) : (
//               <ul>
//                 {cartItems.map((item) => (
//                   <li key={item.id}>
//                     <p>
//                       {item.name} - Rs {item.price}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Checkout Button */}
//         <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
//           Proceed to Checkout
//         </button>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default CartPage;
