"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiBookOpen, FiDollarSign, FiFileText, FiImage, FiAlertCircle } from "react-icons/fi";

interface FormData {
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  priority: "low" | "medium" | "high";
  imageUrl?: string;
}

export default function ProductForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: 0,
    priority: "medium",
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);


  const IMGBB_API_KEY = "YOUR_IMGBB_API_KEY_HERE"; 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let finalImageUrl = "";

  
      if (imageFile) {
        const imgFormData = new FormData();
        imgFormData.append("image", imageFile);

        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: imgFormData,
        });

        const imgbbData = await imgbbResponse.json();

        if (imgbbData.success) {
          finalImageUrl = imgbbData.data.url; 
        } else {
          toast.error("Failed to upload image to ImgBB");
          setLoading(false);
          return;
        }
      }

   
      const productData = {
        ...formData,
        imageUrl: finalImageUrl || formData.imageUrl,
      };


      const response = await fetch("http://localhost:5000/api/add-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        toast.success("Product added successfully!");
   
        setFormData({
          title: "",
          shortDescription: "",
          fullDescription: "",
          price: 0,
          priority: "medium",
          imageUrl: "",
        });
        setImageFile(null); 
        
    
        const fileInput = document.getElementById('image-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

      } else {
        toast.error("Something went wrong on the backend!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
        <FiBookOpen className="text-blue-500" /> <span>Add New Product</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
          <div className="relative">
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full pl-3 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:border-zinc-700"
            />
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Short Description</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
              <FiFileText />
            </span>
            <input
              type="text"
              name="shortDescription"
              required
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Brief summary of the book"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:border-zinc-700"
            />
          </div>
        </div>

        {/* Full Description */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Description</label>
          <textarea
            name="fullDescription"
            required
            rows={4}
            value={formData.fullDescription}
            onChange={handleChange}
            placeholder="Detailed description of the ebook..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:border-zinc-700"
          />
        </div>

        {/* Price & Priority (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Price ($)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                <FiDollarSign />
              </span>
              <input
                type="number"
                name="price"
                min="0"
                required
                value={formData.price}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:border-zinc-700"
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Priority</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                <FiAlertCircle />
              </span>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 dark:border-zinc-700"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Updated Image Input (File Upload instead of URL input) */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Product Image <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
              <FiImage />
            </span>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full pl-10 pr-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:border-zinc-700 file:mr-4 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Uploading & Adding..." : "Submit product"}
        </button>
      </form>
    </div>
  );
}