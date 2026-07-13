"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FiEye, FiTrash2, FiSearch, FiPackage, FiSliders, FiAlertCircle } from "react-icons/fi";


interface Product {
  _id: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  priority: "Low" | "Medium" | "High";
  location: string;
  imageUrl?: string;
  shortDescription: string;
}

export default function ManageItemsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          toast.error("Failed to load products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts((prev) => prev.filter((item) => item._id !== id));
        toast.success("Product deleted successfully!");
      } else {
        toast.error("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("An error occurred while deleting.");
    }
  };


  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });


  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];


  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "High": return "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border-rose-200";
      case "Medium": return "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-200";
      default: return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-200";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 md:p-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-6">
        
   
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <FiPackage className="text-blue-500" /> Inventory Management
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Review, inspect, or remove items from your current listing.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-center sm:text-right">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 block">Total Live Items</span>
            <span className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{filteredProducts.length}</span>
          </div>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Search by title, brand, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-zinc-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:border-zinc-800"
            />
          </div>
          
          <div className="relative min-w-[160px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 pointer-events-none">
              <FiSliders />
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-zinc-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:border-zinc-800 cursor-pointer appearance-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

  
        {loading ? (
          <div className="text-center py-20 text-zinc-500">Loading your stock...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 border rounded-2xl p-12 text-center space-y-3 dark:border-zinc-800">
            <FiAlertCircle className="w-12 h-12 text-zinc-300 mx-auto" />
            <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300">No items found</h3>
            <p className="text-sm text-zinc-400">Try adjusting your search keywords or active filters.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
     
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                    <th className="px-6 py-4">Product Info</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Priority</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
                  {filteredProducts.map((product) => (
                    <tr 
                      key={product._id} 
                      className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/30 transition duration-150 group"
                    >
           
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.imageUrl || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=80&h=80&q=80"}
                            alt={product.title}
                            className="w-10 h-10 rounded-lg object-cover bg-zinc-100 border dark:border-zinc-700 shrink-0"
                          />
                          <div className="max-w-[200px] truncate">
                            <p className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                              {product.title}
                            </p>
                            <p className="text-xs text-zinc-400">{product.brand}</p>
                          </div>
                        </div>
                      </td>

                
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                          {product.category}
                        </span>
                      </td>

            
                      <td className="px-6 py-4 font-mono font-bold text-zinc-700 dark:text-zinc-300">
                        ${product.price.toLocaleString()}
                      </td>

                  
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 text-xs font-medium border rounded-md ${getPriorityStyle(product.priority)}`}>
                          {product.priority}
                        </span>
                      </td>

             
                      <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                        {product.location}
                      </td>

                  
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {/* View Button */}
                          <a 
                            href={`/items/view/${product._id}`}
                            className="p-1.5 rounded-lg text-zinc-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors cursor-pointer"
                            title="View Details"
                          >
                            <FiEye className="w-4 h-4" />
                          </a>

                          {/* Delete Button */}
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                            title="Delete Item"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}