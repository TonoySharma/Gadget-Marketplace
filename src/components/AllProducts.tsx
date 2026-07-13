import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import FadeUp from "./FadeUp";
import ProductFilter from "./ProductFilter";

interface Product {
    _id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: string;
    brand: string;
    price: number;
    rating: number;
    location: string;
    imageUrl: string;
    createdAt: string;
    priority: "High" | "Medium" | "Low";
}

interface AllProductsProps {
    products: Product[];
    currentPage: number;
    totalPages: number;
}

const AllProducts = ({
    products,
    currentPage,
    totalPages,
}: AllProductsProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            {/* Search Product Filter */}
            <ProductFilter></ProductFilter>


            <FadeUp className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="rounded-xl border bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-blue-600 font-medium">
                                    {product.brand}
                                </span>

                                <span>⭐ {product.rating}</span>
                            </div>

                            <h2 className="text-lg font-bold line-clamp-2">
                                {product.title}
                            </h2>

                            <div className="flex justify-between mt-4">
                                <span className="font-bold text-green-600">
                                    ${product.price}
                                </span>

                                <span>{product.location}</span>
                            </div>

                            <div className="flex justify-between mt-3">
                                <span>{product.category}</span>

                                <span
                                    className={`px-2 py-1 rounded text-white ${product.priority === "High"
                                        ? "bg-red-500"
                                        : product.priority === "Medium"
                                            ? "bg-yellow-500"
                                            : "bg-green-500"
                                        }`}
                                >
                                    {product.priority}
                                </span>
                            </div>
                            <Link href={`/products/${product._id}`}>
                                <Button className="w-full mt-5 cursor-pointer
                             bg-black hover:bg-gray-800 text-white py-2 rounded transition">
                                    View Details
                                </Button>
                            </Link>


                        </div>
                    </div>
                ))}
            </FadeUp>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-10">
                <Link
                    href={`/browse-products?page=${currentPage - 1}`}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? "pointer-events-none opacity-50" : ""
                        }`}
                >
                    Prev
                </Link>

                {pages.map((page) => (
                    <Link
                        key={page}
                        href={`/browse-products?page=${page}`}
                        className={`px-4 py-2 rounded border ${currentPage === page
                            ? "bg-blue-600 text-white"
                            : ""
                            }`}
                    >
                        {page}
                    </Link>
                ))}

                <Link
                    href={`/browse-products?page=${currentPage + 1}`}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                        }`}
                >
                    Next
                </Link>
            </div>
        </div>
    );
};

export default AllProducts;