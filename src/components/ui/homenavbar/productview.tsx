// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// const products = [
//   { id: 1, name: "Product 1", image: "/product1.jpg" },
//   { id: 2, name: "Product 2", image: "/product2.jpg" },
//   { id: 3, name: "Product 3", image: "/product3.jpg" },
//   { id: 4, name: "Product 4", image: "/product4.jpg" },
// ];

// export default function ProductCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="min-w-full flex justify-center items-center p-4"
//           >
//             <div className="bg-white shadow-lg rounded-lg p-4 w-72 text-center">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="mx-auto"
//               />
//               <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// const products = [
//   { id: 1, name: "Product 1", image: "/product1.jpg" },
//   { id: 2, name: "Product 2", image: "/product2.jpg" },
//   { id: 3, name: "Product 3", image: "/product3.jpg" },
//   { id: 4, name: "Product 4", image: "/product4.jpg" },
//   { id: 5, name: "Product 5", image: "/product5.jpg" },
//   { id: 6, name: "Product 6", image: "/product6.jpg" },
//   { id: 7, name: "Product 7", image: "/product7.jpg" },
//   { id: 8, name: "Product 8", image: "/product8.jpg" },
//   { id: 9, name: "Product 9", image: "/product9.jpg" },
//   { id: 10, name: "Product 10", image: "/product10.jpg" },
//   { id: 11, name: "Product 11", image: "/product11.jpg" },
//   { id: 12, name: "Product 12", image: "/product12.jpg" },
//   { id: 13, name: "Product 13", image: "/product13.jpg" },
// ];

// export default function ProductCarousel() {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleProducts = 6; // Show 4 products at a time

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 3000); // Slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleProducts = () => {
//     return products
//       .slice(currentIndex, currentIndex + visibleProducts)
//       .concat(
//         products.slice(
//           0,
//           Math.max(0, currentIndex + visibleProducts - products.length)
//         )
//       );
//   };

//   return (
//     <div className="relative w-full flex justify-center bg-gray-100 p-2">
//       <div className="grid grid-cols-6 gap-6">
//         {getVisibleProducts().map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-lg p-4 text-center"
//           >
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={250}
//               height={300}
//               className="mx-auto"
//             />
//             <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
// };

// export default function ProductCarousel() {
//   const [products, setProducts] = useState<Product[]>([]); // Initialize as empty array
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleProducts = 6; // Number of products visible at a time

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/product");
//         if (!res.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await res.json();
//         setProducts(data.products); // Assuming API returns { products: [...] }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Ensure products array is valid before checking its length, with try-catch
//   const getVisibleProducts = () => {
//     try {
//       if (!products || products.length === 0) return [];

//       return products
//         .slice(currentIndex, currentIndex + visibleProducts)
//         .concat(
//           products.slice(
//             0,
//             Math.max(0, currentIndex + visibleProducts - products.length)
//           )
//         );
//     } catch (error) {
//       console.error("Error in getVisibleProducts:", error);
//       return []; // Return an empty array if there's an error
//     }
//   };

//   return (
//     <div className="relative w-full flex justify-center bg-gray-100 p-2">
//       {products.length > 0 ? (
//         <div className="grid grid-cols-6 gap-6">
//           {getVisibleProducts().map((product) => (
//             <div
//               key={product.id} // Each product has a unique id
//               className="bg-white shadow-lg rounded-lg p-4 text-center"
//             >
//               <Image
//                 src={product.image} // Ensure API returns correct image URL
//                 alt={product.name}
//                 width={250}
//                 height={300}
//                 className="mx-auto"
//               />
//               <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-600">Loading products...</p>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import AddToCartButton from "@/components/ui/addtocart/addtocart";
// import { useCart } from "@/app/context/cartcontext";

// interface ProductProps {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// };

// export default function ProductCarousel() {
//   const [products, setProducts] = useState<Product[]>([]);

//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     try {
//   //       const res = await fetch("/api/product");
//   //       if (!res.ok) throw new Error("Failed to fetch products");
//   //       const data = await res.json();
//   //       console.log("Fetched products:", data);

//   //       setProducts(data.slice(0, 6)); // Only take the first 6 products
//   //     } catch (error) {
//   //       console.error("Error fetching products:", error);
//   //     }
//   //   };

//   //   fetchProducts();
//   // }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/product");
//         if (!res.ok) throw new Error("Failed to fetch products");

//         const data = await res.json();

//         // Since data itself is an array, use it directly
//         if (Array.isArray(data)) {
//           setProducts(data.slice(0, 6));
//         } else {
//           console.error("Invalid API response format:", data);
//           setProducts([]); // Prevent errors
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // const HomePage: React.FC = () => {
//   //   const [cartCount, setCartCount] = useState<number>(0);

//   //    const handleAddToCart = () => {
//   //      setCartCount(cartCount + 1);
//   //      alert("Item added to cart!");
//   //    };
//   //   }

//   const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
//     const { addToCart } = useCart();

//     return (
//       <div className="w-full flex justify-center bg-gray-100 p-4">
//         {products.length > 0 ? (
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white shadow-lg rounded-lg p-4 text-center"
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={250}
//                   height={300}
//                   className="mx-auto"
//                 />
//                 <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//                 <h5 className="mt-2 text-lg ">Rs {product.price} </h5>
//                 <button
//                   onClick={() => addToCart({ id, name, price, image })}
//                   className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Add to Cart
//                 </button>{" "}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">Loading products...</p>
//         )}
//       </div>
//     );
//   };
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useCart } from "@/app/context/cartcontext";

// // Define types for product and product card props
// interface ProductProps {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// };

// // ProductCard Component
// const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 text-center">
//       <Image
//         src={image}
//         alt={name}
//         width={250}
//         height={300}
//         className="mx-auto"
//       />
//       <h3 className="mt-2 text-lg font-semibold">{name}</h3>
//       <h5 className="mt-2 text-lg">Rs {price}</h5>
//       <button
//         onClick={() => addToCart({ id, name, price, image })}
//         className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// // Main ProductCarousel Component
// export default function ProductCarousel() {
//   const [products, setProducts] = useState<Product[]>([]);

//   // Fetch products from the API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/product");
//         if (!res.ok) throw new Error("Failed to fetch products");

//         const data = await res.json();

//         // Ensure that the response is an array
//         if (Array.isArray(data)) {
//           setProducts(data.slice(0, 6)); // Limit to the first 6 products
//         } else {
//           console.error("Invalid API response format:", data);
//           setProducts([]); // Set an empty array if response is invalid
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="w-full flex justify-center bg-gray-100 p-4">
//       {products.length > 0 ? (
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               id={product.id}
//               name={product.name}
//               price={product.price}
//               image={product.image}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-600">Loading products...</p>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/app/( main)/context/cartcontext";

// Define a single Product type that can be reused across components
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

// ProductCard Component
const ProductCard: React.FC<Product> = ({ id, name, price, image }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <Image
        src={image}
        alt={name}
        width={250}
        height={300}
        className="mx-auto"
      />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <h5 className="mt-2 text-lg">Rs {price}</h5>
      <button
        onClick={() => addToCart({ id, name, price, image })}
        className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

// Main ProductCarousel Component
export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        // Ensure that the response is an array
        if (Array.isArray(data)) {
          setProducts(data.slice(0, 12)); // Limit to the first 6 products
        } else {
          console.error("Invalid API response format:", data);
          setProducts([]); // Set an empty array if response is invalid
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // In case of error, empty the products array
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading products...</p>
      )}
    </div>
  );
}
