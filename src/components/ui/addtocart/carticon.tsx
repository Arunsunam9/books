// // components/ProductCard.tsx
// "use client";

// import React from "react";
// import { useCart } from "@/app/context/cartcontext";

// interface ProductProps {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="border p-4 rounded-lg shadow-lg bg-white">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-40 object-cover rounded-md"
//       />
//       <h2 className="text-lg font-semibold mt-2">{name}</h2>
//       <p className="text-gray-600">${price}</p>
//       <button
//         onClick={() => addToCart({ id, name, price, image })}
//         className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
