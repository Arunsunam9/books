// "use client";
// import { Search } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function Home() {

//   const [query, setQuery] = useState("");

//   return (
//     <nav className="bg-gray-900 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">
//           <a href="/" className="hover:text-gray-200">
//             Books&Stationery
//           </a>
//         </div>

//         <div className="relative flex-grow mx-4  justify-center items-center ">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search books & stationery..."
//             className="w-full    p-1 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>

//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <a href="/" className="hover:text-gray-200">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-200">
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href="/gallery" className="hover:text-gray-200">
//               Gallery
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="hover:text-gray-200">
//               Contact
//             </a>
//           </li>
//           <li>
//             <a
//               href="/login"
//               className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
//             >
//               Login
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// "use client";
// import { Search } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link"; // Import Next.js Link
// import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { useCart } from "@/app/context/cartcontext";

// export default function Home() {
//   const [query, setQuery] = useState("");

//   const Navbar: React.FC = () => {
//   const { cartCount } = useCart();

//   return (
//     <nav className="bg-gray-900 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl  font-serif">
//           <Link href="/" className="hover:text-gray-200">
//             Books&Stationery
//           </Link>
//         </div>

//         <div className="relative flex-grow mx-4 justify-center items-center">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search books & stationery..."
//             className="w-full p-1 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>

//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <Link href="/" className="hover:text-gray-200">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="hover:text-gray-200">
//               About Us
//             </Link>
//           </li>
//           {/* <li>
//             <Link href="/gallery" className="hover:text-gray-200">
//               Gallery
//             </Link>
//           </li> */}
//           <li>
//             <Link href="/contact" className="hover:text-gray-200">
//               Contact
//             </Link>
//           </li>
//           {/* Cart Icon */}
//           <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">MyShop</h1>

//         {/* Cart Icon */}
//         <div className="relative cursor-pointer">
//           <ShoppingCartIcon className="w-8 h-8 text-white" />
//           {cartCount > 0 && (
//             <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </div>
//       </div>
//           <li>
//             <Link
//               href="/login"
//               className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/signup"
//               className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
//             >
//               Sign up
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
// }

// "use client";
// import { Search, ShoppingCart } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import { useCart } from "@/app/context/cartcontext";
// // import CartPage from "@/app/cart/page";
// import CartPage from"@/components/cart";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const Navbar: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const { cartCount } = useCart(); // Ensure `useCart` is correctly imported

//   return (
//     <nav className="bg-gray-900 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-serif">
//           <Link href="/" className="hover:text-gray-200">
//             Books&Stationery
//           </Link>
//         </div>

//         {/* Search Bar */}
//         <div className="relative flex-grow mx-4">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search books & stationery..."
//             className="w-full p-2 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <Link href="/" className="hover:text-gray-200">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-gray-200">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-gray-200">
//               Contact
//             </Link>
//           </li>

//           {/* Cart Icon */}
//           <li className="relative cursor-pointer">
//             <Link href="/cart">
//               <ShoppingCart className="w-8 h-8 text-white" />
//             </Link>
//             {cartCount > 0 && (
//               <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </li>

//           {/* Auth Buttons */}
//           <li>
//             <Link
//               href="/login"
//               className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/signup"
//               className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
//             >
//               Sign up
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// {/* <Sheet>
//     {/* Cart Icon as Trigger */}
//     <SheetTrigger asChild>
//       <li className="relative cursor-pointer">
//         <ShoppingCart className="w-8 h-8 text-white" />
//         {cartCount > 0 && (
//           <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//             {cartCount}
//           </span>
//         )}
//       </li>
//     </SheetTrigger>

//     {/* Drawer Content */}
//     <SheetContent>
//       <SheetHeader>
//         <SheetTitle>Your Cart</SheetTitle>
//         <SheetDescription>
//           Here are the items in your cart.
//         </SheetDescription>
//       </SheetHeader>

//       {/* Example Cart Items (Replace with actual cart data) */}
//       <div className="mt-4">
//         <p>Item 1 - $10</p>
//         <p>Item 2 - $15</p>
//         <p>Item 3 - $20</p>
//       </div>

//       {/* Checkout Button */}
//       <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
//         Proceed to Checkout
//       </button>
//     </SheetContent>
//   </Sheet>  */}

"use client";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react"; // Import the cross icon

import Link from "next/link";
import { useCart } from "@/app/( main)/context/cartcontext";
import { Button } from "@/components/ui/button";
// import removeFromCart from "@/app/( main)/context/cartcontext";

import { usePathname } from "next/navigation";
// import CheckOut from "@/app/( main)/checkout/";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState("");
  const { cartItems, cartCount, removeFromCart } = useCart(); // Ensure `useCart` is properly used

  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  const deliveryCharge = 50; // Set delivery charge
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const finalPrice = totalPrice + (cartItems.length > 0 ? deliveryCharge : 0);

  // function removeFromCart(id: number): void {
  //  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // }
  //  const removeFromCart = (id: number) => {
  //    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  //  };
  // const { cartItems, removeFromCart } = useCart();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif">
          <Link href="/" className="hover:text-gray-200">
            Books&Stationery
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow mx-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books & stationery..."
            className="w-full p-2 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>

          {/* Cart Drawer */}
          <li>
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative">
                  <ShoppingCart className="w-8 h-8 text-white" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>
                    Here are the items in your cart.
                  </SheetDescription>
                </SheetHeader>

                {/* <div className="mt-4">
                 */}

                <div>
                  <div className="p-2 max-h-[500px] overflow-y-auto flex-grow ">
                    {cartItems.length === 0 ? (
                      <p>
                        Your cart is empty.{" "}
                        <Link href="/">Go back to shopping</Link>
                      </p>
                    ) : (
                      <ul>
                        {cartItems.map((item) => (
                          <li key={item.id} className=" border-b py-2">
                            <div className="flex justify-between">
                              <p>
                                {item.name} - Rs {item.price}
                              </p>

                              <div>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className=" text-black px-2 rounded hover:bg-red-600 "
                                >
                                  {/* &times;
                                   */}
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    </div>
                    {/* <div className="mt-4 p-4 border-t">
                    <p className="text-lg font-semibold">
                      Total Price: Rs {totalPrice}
                    </p>
                    <p className="text-md text-gray-600">
                      Delivery Charge: Rs{" "}
                      {cartItems.length > 0 ? deliveryCharge : 0}
                    </p>
                    <p className="text-xl font-bold mt-2">
                      Final Price: Rs {finalPrice}
                    </p>
                  </div> */}
                    <div className="mt-6 justify-around border-y-2 p-2 bg-white sticky bottom-0 w-full">
                      <div className="flex justify-between">
                        <p className="font-serif">Subtotal</p>
                        <p className="font-mono">Rs {totalPrice}</p>
                      </div>

                      <div className="flex justify-between text-md text-gray-600">
                        <p className="font-serif">Delivery Charge</p>
                        <p className="font-mono">
                          Rs {cartItems.length > 0 ? deliveryCharge : 0}
                        </p>
                      </div>

                      <div className="flex justify-between font-semibold border-t-2 mt-4">
                        <p className="font-serif text-lg">Final Price</p>
                        <p className="font-mono text-lg">Rs {finalPrice}</p>
                      </div>
                    </div>
                  
                </div>

                {/* Checkout Button */}
                {/* <div>
                  <Link href="/checkout">
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div> */}
                <SheetFooter>
                  <SheetClose asChild>
                    <Link href="/checkout">
                      <Button
                        type="submit"
                        className="bg-blue-700  font-semibold w-[335px] mt-4"
                      >
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </li>

          {/* Auth Buttons */}
          <li>
            <Link
              href="/login"
              className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



// "use client";
// import { Search, ShoppingCart } from "lucide-react";
// import { useState } from "react";
// import { X } from "lucide-react"; // Import the cross icon
// import Link from "next/link";
// import { useCart } from "@/app/( main)/context/cartcontext";
// import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetClose,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const Navbar: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu
//   const { cartItems, cartCount, removeFromCart } = useCart(); // Ensure `useCart` is properly used

//   const pathname = usePathname();

//   if (pathname.startsWith("/admin")) return null;

//   const deliveryCharge = 50; // Set delivery charge
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
//   const finalPrice = totalPrice + (cartItems.length > 0 ? deliveryCharge : 0);

//   return (
    


//   <nav className="bg-gray-900 text-white p-4 shadow-md">
//   <div className="container mx-auto flex items-center justify-between">
//     {/* Mobile Menu Toggle (Left side) */}
//     <button
//       className="sm:hidden p-2"
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//     >
//       {isMenuOpen ? (
//         <X className="w-6 h-6" />
//       ) : (
//         <div className="space-y-1.5">
//           <span className="block w-6 h-0.5 bg-white"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//           <span className="block w-4 h-0.5 bg-white"></span>
//         </div>
//       )}
//     </button>

//     {/* Logo (Centered on mobile) */}
//     <div className="text-2xl font-serif ">
//       <Link href="/" className="hover:text-gray-200 sm:ml-0 ml-4">
//         Books&Stationery
//       </Link>
//     </div>

//     {/* Cart Icon (Right side) */}
//     <div className="sm:hidden">
//       <Sheet>
//         <SheetTrigger asChild>
//           <button className="relative">
//             <ShoppingCart className="w-8 h-8 text-white" />
//             {cartCount > 0 && (
//               <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//         </SheetTrigger>
//       </Sheet>
//     </div>

//     {/* Desktop Navigation */}
//     <div className="hidden sm:flex items-center gap-6 flex-1 justify-end">
//       <div className="flex-grow max-w-xl mx-4">
//         <div className="relative">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search books & stationery..."
//             className="w-full p-2 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//       </div>

//       <ul className="flex space-x-6">
//         <li>
//           <Link href="/" className="hover:text-gray-200">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/about" className="hover:text-gray-200">
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className="hover:text-gray-200">
//             Contact
//           </Link>
//         </li>
//       </ul>

//       <div className="flex items-center gap-4">
//         <Sheet>
//           <SheetTrigger asChild>
//             <button className="relative">
//               <ShoppingCart className="w-8 h-8 text-white" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </SheetTrigger>
//         </Sheet>

//         <Link
//           href="/login"
//           className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
//         >
//           Login
//         </Link>
//         <Link
//           href="/signup"
//           className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-200"
//         >
//           Sign up
//         </Link>
//       </div>
//     </div>
//   </div>

//   {/* Mobile Search Bar (Outside navigation) */}
//   <div className="sm:hidden container mx-auto mt-4 px-4">
//     <div className="relative">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search books & stationery..."
//         className="w-full p-2 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//     </div>
//   </div>

//   {/* Mobile Menu */}
//   {isMenuOpen && (
//     <div className="sm:hidden bg-gray-800 p-4 absolute top-16 left-0 right-0 z-10">
//       <ul className="space-y-4">
//         <li>
//           <Link href="/" className="block py-2">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/about" className="block py-2">
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className="block py-2">
//             Contact
//           </Link>
//         </li>
//         <li className="pt-4 border-t border-gray-700">
//           <Link
//             href="/login"
//             className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg"
//           >
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/signup"
//             className="block w-full text-center bg-white text-blue-600 py-2 rounded-lg"
//           >
//             Sign Up
//           </Link>
//         </li>
//       </ul>
//     </div>
//   )}
// </nav>



//   );
// };

// export default Navbar;
