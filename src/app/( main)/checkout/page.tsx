"use client";

import React from "react";
import { useCart } from "@/app/( main)/context/cartcontext";
import Navbar from "@/components/ui/homenavbar/homebar";
import { MapPin } from "lucide-react";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShippingForm from "@/components/ui/galleryui/shippingform";






const CheckOut = () => {
  const { cartItems, cartCount } = useCart(); // Ensure `useCart` is properly used

  const deliveryCharge = 50; // Set delivery charge
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const finalPrice = totalPrice + (cartItems.length > 0 ? deliveryCharge : 0);

  return (
    // <div className="flex border-spacing-1 w-[1500px] h-[695px] mx-auto gap-1  ">
    //   <div className=" checkout basis-2/3 border-2 mt-1">
    //     <h1> </h1>
    //     <div>
    //       <Link href="/checkout">
    //         <Button type="submit" className="bg-blue-700  font-semibold">
    //           Proceed to Checkout
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="shoppingcart basis-1/2 border-2 mt-1 ">
    //     <h1 className="text-3xl font-semibold m-4 ml-10">Shopping cart</h1>

    //     <div className=" p-2">
    //       {cartItems.length === 0 ? (
    //         <p>
    //           Your cart is empty. <Link href="/">Go back to shopping</Link>
    //         </p>
    //       ) : (
    //         <ul>
    //           {cartItems.map((item) => (
    //             <li
    //               key={item.id}
    //               className="flex justify-between items-center border-t-2 py-2 "
    //             >
    //               <p className="text-lg font-serif">{item.name}</p>
    //               <p className="text-lg font-mono">Rs {item.price}</p>
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </div>

    //     <div className="mt-6 justify-around border-y-2 p-2    ">
    //       <div className="flex justify-between">
    //         <p className="font-serif">Subtotal </p>
    //         <p className="font-mono">Rs {totalPrice}</p>
    //       </div>

    //       <div className="flex justify-between text-md text-gray-600  ">
    //         <p className="font-serif">Delivery Charge</p>
    //         <p className="font-mono">
    //           Rs {cartItems.length > 0 ? deliveryCharge : 0}
    //         </p>
    //       </div>

    //       <div className="flex justify-between font-semibold border-t-2 mt-4">
    //         <p className="font-serif text-lg">Final Price</p>
    //         <p className="font-mono text-lg ">Rs {finalPrice}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex w-[1500px] h-[695px] mx-auto gap-1 mt-1 ">
      {/* Left Section (Checkout Button) */}
      <div className="checkout w-1/2 p-6 border-2   ">
        <h1 className="font-semibold text-xl">Checkout Section</h1>
        <div className="mt-2">
          <input
            type="email"
            placeholder="Email"
            // onChange={(e) =>
            //   setFormData({ ...formData, email: e.target.value })
            // }
            className="w-full p-2 border-2 rounded mb-3 border-gray-300 "
            required
          />
        
        </div>

        <Dialog>
          <DialogTrigger>
            <div className="h-48 w-[698px] mb-4  border-2 border-dashed border-gray-400  flex flex-col justify-center items-center ">
              <MapPin className="w-8 h-10 text-blue-400 c" />
              <h2 className="text-gray-400">Click to add shipping address</h2>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription>
                <div>
                  <ShippingForm />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* <div className="h-48 border-2 border-dashed border-gray-400  flex flex-col justify-center items-center ">
          <MapPin className="w-8 h-10 text-blue-400 c" />
          <h2 className="text-gray-400">Click to add shipping address</h2>
        </div> */}

        <div className="h-20 border-2 mt-4 border-gray-300 flex gap-2 flex- justify-center items-center">
          <h2>
            <CirclePlus className="w-8 h-10 text-gray-400" />
          </h2>
          <h2 className="text-gray-400 text-lg mt-1  ">
            Select payment method
          </h2>
        </div>

        <div className="mt-4">
          <Link href="/checkout">
            <Button type="submit" className="bg-blue-600 font-semibold w-full ">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section (Shopping Cart & Grand Total) */}
      <div className="shoppingcart basis-1/2  p-6 flex flex-col border-2">
        <h1 className="text-2xl font-semibold m-4 ml-10">Shopping Cart</h1>

        {/* Book List */}
        <div className="p-2 max-h-[500px] overflow-y-auto flex-grow ">
          {cartItems.length === 0 ? (
            <p>
              Your cart is empty. <Link href="/">Go back to shopping</Link>
            </p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-t-2 py-2"
                >
                  <p className="text-sm font-serif">{item.name}</p>
                  <p className="text-sm font-mono">Rs {item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Fixed Grand Total Section */}
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
    </div>
  );
};

export default CheckOut;
