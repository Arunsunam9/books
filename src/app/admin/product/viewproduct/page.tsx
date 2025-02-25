"use client";

import React, { useState, useEffect } from "react";

const ViewProduct = () => {
  const [products, setProducts] = useState<
    { id: string; name: string; price: number }[]
  >([]);
  const [editProduct, setEditProduct] = useState<{
    id: string;
    name: string;
    price: number;
  } | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data: { id: string; name: string; price: number }[] =
          await res.json();
        setProducts(data); // ✅ No more error
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // Handle Edit Product - Open Modal
  const handleEdit = (product: { id: string; name: string; price: number }) => {
    setEditProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
  };

  // Handle Update Product
  const handleUpdate = async () => {
    if (!name || !price || !editProduct) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await fetch(`/api/product/${editProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price: parseFloat(price) }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.message);
        return;
      }

      alert("Product updated successfully!");
      setProducts(
        products.map((p) =>
          p.id === editProduct.id ? { ...p, name, price: parseFloat(price) } : p
        )
      );
      setEditProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle Delete Product
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await fetch(`/api/product/${id}`, { method: "DELETE" });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.message);
        return;
      }

      alert("Product deleted successfully!");
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              {/* <th className="border border-gray-300 px-4 py-2">ID</th> */}
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              (product: { id: string; name: string; price: number }) => (
                <tr key={product.id} className="border-t border-gray-300">
                  {/* <td className="border border-gray-300 px-4 py-2">
                    {product.id}
                  </td> */}
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rs. {product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-blue-400 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-400 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
      {/* Edit Product Modal */}
      {editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <label className="block mb-2">Product Name:</label>
            <input
              type="text"
              className="border px-3 py-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="block mt-4 mb-2">Price:</label>
            <input
              type="number"
              className="border px-3 py-2 w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Save ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;

// "use client";

// import React, { useState, useEffect } from "react";

// const ViewProduct = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("/api/product");
//       if (!res.ok) throw new Error("Failed to fetch products");

//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Handle Delete Product
//   const handleDelete = async (id: number) => {
//     if (!window.confirm("Are you sure you want to delete this product?"))
//       return;

//     try {
//       const res = await fetch(`/api/product/${id}`, { method: "DELETE" });

//       if (!res.ok) {
//         const errorData = await res.json();
//         alert("Error: " + errorData.message);
//         return;
//       }

//       alert("Product deleted successfully!");
//       setProducts(products.filter((product) => product.id !== id)); // Remove from UI
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-4">
//       <h2 className="text-xl font-bold mb-4">Product List</h2>

//       {products.length === 0 ? (
//         <p>No products found</p>
//       ) : (
//         <table className="border-collapse border border-gray-300 w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">Product Name</th>
//               <th className="border border-gray-300 px-4 py-2">Price</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(
//               (product: { id: number; name: string; price: number }) => (
//                 <tr key={product.id} className="border-t border-gray-300">
//                   <td className="border border-gray-300 px-4 py-2">
//                     {product.name}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     Rs. {product.price}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleDelete(product.id)}
//                     >
//                       Delete ❌
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewProduct;

// "use client";

// import React, { useState, useEffect } from "react";

// const ViewProduct = () => {
// const [products, setProducts] = useState<
//   { id: number; name: string; price: number }[]
// >([]);
//   const [editProduct, setEditProduct] = useState<{
//     id: number;
//     name: string;
//     price: number;
//   } | null>(null);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("/api/product");
//       if (!res.ok) throw new Error("Failed to fetch products");

//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Handle Delete Product
//   const handleDelete = async (id: number) => {
//     if (!window.confirm("Are you sure you want to delete this product?"))
//       return;

//     try {
//       const res = await fetch(`/api/product/${id}`, { method: "DELETE" });

//       if (!res.ok) {
//         const errorData = await res.json();
//         alert("Error: " + errorData.message);
//         return;
//       }

//       alert("Product deleted successfully!");
//       setProducts(products.filter((product) => product.id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Handle Edit Product - Open Modal
//   const handleEdit = (product: { id: number; name: string; price: number }) => {
//     setEditProduct(product);
//     setName(product.name);
//     setPrice(product.price.toString());
//   };

//   // Handle Update Product
//   const handleUpdate = async () => {
//     if (!name || !price || !editProduct) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const res = await fetch(`/api/product/${editProduct.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, price: parseFloat(price) }),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         alert("Error: " + errorData.message);
//         return;
//       }

//       alert("Product updated successfully!");
//       setProducts(
//         products.map((p) =>
//           p.id === editProduct.id ? { ...p, name, price: parseFloat(price) } : p
//         )
//       );
//       setEditProduct(null);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-4">
//       <h2 className="text-xl font-bold mb-4">Product List</h2>

//       {products.length === 0 ? (
//         <p>No products found</p>
//       ) : (
//         <table className="border-collapse border border-gray-300 w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">Product Name</th>
//               <th className="border border-gray-300 px-4 py-2">Price</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(
//               (product: { id: number; name: string; price: number }) => (
//                 <tr key={product.id} className="border-t border-gray-300">
//                   <td className="border border-gray-300 px-4 py-2">
//                     {product.name}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     Rs. {product.price}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                       onClick={() => handleEdit(product)}
//                     >
//                       Edit ✏️
//                     </button>
//                     <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleDelete(product.id)}
//                     >
//                       Delete ❌
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       )}

//       {/* Edit Product Modal */}
//       {editProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//             <label className="block mb-2">Product Name:</label>
//             <input
//               type="text"
//               className="border px-3 py-2 w-full"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <label className="block mt-4 mb-2">Price:</label>
//             <input
//               type="number"
//               className="border px-3 py-2 w-full"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />

//             <div className="mt-4 flex justify-end">
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
//                 onClick={() => setEditProduct(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//                 onClick={handleUpdate}
//               >
//                 Save ✅
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewProduct;
