
import Link from "next/link";
import Image from "next/image";

import {
    FaArrowLeft,
    FaStar,
    FaTag,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaShoppingCart,
} from "react-icons/fa";

import FadeUp from "@/components/FadeUp";
import { Button } from "@heroui/react";
import { getProductById } from "@/lib/products";


interface Props {
    params: Promise<{
        id: string;
    }>;
}


const ProductDetailsPage = async ({ params }: Props) => {

    const { id } = await params;

    const product = await getProductById(id);


    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-500">
                    Product Not Found!
                </h2>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">


            <FadeUp className="max-w-7xl mx-auto mb-6">

                <Link href="/all-products">

                    <button className="flex items-center gap-2 hover:text-blue-600">
                        <FaArrowLeft />
                        Back To Products
                    </button>

                </Link>

            </FadeUp>



            <FadeUp className="max-w-7xl mx-auto bg-white rounded-3xl shadow border p-6 md:p-10">


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">


                    {/* Image */}

                    <div className="lg:col-span-5">

                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">

                            <Image
                                src={product.imageUrl}
                                alt={product.title}
                                fill
                                className="object-cover"
                            />


                        </div>


                    </div>



                    {/* Details */}

                    <div className="lg:col-span-7 space-y-6">


                        <div className="flex flex-wrap gap-3">


                            <span className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg flex items-center gap-2">

                                <FaTag />

                                {product.category}

                            </span>



                            <span className="bg-yellow-50 text-yellow-600 px-3 py-2 rounded-lg flex items-center gap-2">

                                <FaStar />

                                {product.rating}

                            </span>



                            <span className="bg-green-50 text-green-600 px-3 py-2 rounded-lg">

                                Available

                            </span>


                        </div>




                        <h1 className="text-4xl font-black">

                            {product.title}

                        </h1>



                        <p className="text-gray-500 font-medium">

                            Brand:
                            <span className="text-blue-600 ml-2">
                                {product.brand}
                            </span>

                        </p>




                        <hr />




                        <div>

                            <h3 className="font-bold text-gray-400 uppercase text-sm">
                                Description
                            </h3>


                            <p className="text-gray-600 leading-7 mt-2">

                                {product.fullDescription}

                            </p>

                        </div>




                        <div className="bg-gray-50 rounded-2xl p-6 space-y-5">


                            <div className="flex items-center gap-2 text-gray-500">

                                <FaMapMarkerAlt />

                                {product.location}

                            </div>



                            <div className="flex items-center gap-2 text-gray-500">

                                <FaCalendarAlt />

                                {
                                    new Date(product.createdAt)
                                        .toLocaleDateString()
                                }

                            </div>



                            <h2 className="text-4xl font-black text-green-600">

                                ${product.price}

                            </h2>




                            <Button
                                className="
                w-full
                bg-black
                text-white
                py-4
                rounded-xl
                "
                            >

                                <FaShoppingCart />

                                Buy Now

                            </Button>



                        </div>


                    </div>



                </div>



            </FadeUp>


        </div>
    );
};


export default ProductDetailsPage;