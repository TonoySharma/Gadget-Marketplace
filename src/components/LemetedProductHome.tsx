import Image from "next/image";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import FadeUp from "./FadeUp";
import Link from "next/link";

interface Product {
    _id: string;
    title: string;
    shortDescription: string;
    category: string;
    brand: string;
    price: number;
    rating: number;
    imageUrl: string;
}

async function getFeaturedProducts(): Promise<Product[]> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/featured-products`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch featured products");
    }

    const result = await res.json();

    return result.data;
}

const LimitedProductHome = async () => {
    const products = await getFeaturedProducts();

    return (
        <section className="max-w-7xl mx-auto py-12">
            <FadeUp className=" mb-10 flex flex-col sm:flex-row justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">Limited Time Offer</h2>
                    <p className="text-gray-500 mt-2">
                        Check out our limited time offers!
                    </p>
                </div>
                <div>
                    <Link href="/browse-products">
                        <p className="flex items-center hover:underline cursor-pointer gap-2 font-semibold">
                            All Products <FaArrowRight />
                        </p>
                    </Link>
                </div>
            </FadeUp>

            <FadeUp className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-4">
                            <p className="text-sm text-blue-600">{product.brand}</p>

                            <h3 className="font-bold text-lg mt-1 line-clamp-2">
                                {product.title}
                            </h3>


                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-xl text-green-600">
                                    ${product.price}
                                </span>

                                <span>⭐ {product.rating}</span>
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
        </section>
    );
};

export default LimitedProductHome;