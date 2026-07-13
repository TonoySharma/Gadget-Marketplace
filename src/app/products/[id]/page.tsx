import Link from "next/link";
import Image from "next/image";

import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaCalendarAlt,
} from "react-icons/fa";

import FadeUp from "@/components/FadeUp";
import { Button, Chip } from "@heroui/react";
import { getProductById } from "@/lib/products";
import BuyNowButton from "@/components/BuyNowButton";

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
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 gap-4">
                    <h2 className="text-3xl font-black text-gray-400 tracking-tight animate-pulse">
                        Product Not Found!
                    </h2>
                    <Link href="/browse-products">
                        <Button >
                            Back to Shop
                        </Button>
                    </Link>
                </div>
            );
        }

        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-12 px-4 sm:px-6 lg:px-8">

                {/* Navigation Header */}
                <FadeUp className="max-w-7xl mx-auto mb-8">
                    <Link href="/browse-products" className="inline-block group">
                        <button className="flex items-center gap-2.5 text-sm font-semibold text-gray-600 hover:text-black transition-all duration-300 bg-white shadow-sm border border-gray-100 px-5 py-2.5 rounded-full cursor-pointer">
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back To Products
                        </button>
                    </Link>
                </FadeUp>

                {/* Main Content Card */}
                <FadeUp className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 p-6 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Image Area */}
                        <div className="lg:col-span-5 sticky top-8">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border border-gray-100 bg-gray-50">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.title}
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Subtle Floating Tag */}
                                <div className="absolute top-4 left-4 z-10">
                                    <Chip className="text-blue-600 font-medium capitalize shadow-md px-3">
                                        In Stock
                                    </Chip>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details Area */}
                        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
                            <div className="space-y-6">

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2.5 items-center">
                                    <Chip

                                        className="bg-blue-50/80 text-blue-600 border border-blue-100 font-semibold px-3 py-2 text-sm"
                                    >
                                        {product.category}
                                    </Chip>
                                    <Chip

                                        className="bg-amber-50/80 text-amber-700 border border-amber-100 font-bold px-3 py-2 text-sm"
                                    >
                                        {product.rating} / 5.0
                                    </Chip>
                                </div>

                                {/* Product Title & Brand */}
                                <div className="space-y-2">
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-none">
                                        {product.title}
                                    </h1>
                                    <p className="text-base font-semibold text-gray-400 uppercase tracking-wider">
                                        Brand: <span className="text-blue-600 ml-1 hover:underline cursor-pointer">{product.brand}</span>
                                    </p>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Description */}
                                <div className="space-y-3">
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400">
                                        Product Overview
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base font-normal">
                                        {product.fullDescription}
                                    </p>
                                </div>

                                {/* Metadata Info Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    <div className="flex items-center gap-3 text-gray-600 bg-gray-50/60 border border-dashed border-gray-200 rounded-2xl p-4 transition-all hover:bg-gray-50">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-blue-500">
                                            <FaMapMarkerAlt size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium">Location</p>
                                            <p className="text-sm font-semibold text-gray-800">{product.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600 bg-gray-50/60 border border-dashed border-gray-200 rounded-2xl p-4 transition-all hover:bg-gray-50">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-green-500">
                                            <FaCalendarAlt size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium">Released On</p>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {new Date(product.createdAt).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Price & Action Segment */}
                            <div className="bg-gradient-to-r from-gray-900 to-zinc-800 rounded p-6 md:p-8 shadow-xl text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-6">
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Total Price</p>
                                    <h2 className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">
                                        ${product.price}
                                    </h2>
                                </div>

                             <BuyNowButton product={product}></BuyNowButton>
                            </div>

                        </div>
                    </div>
                </FadeUp>
            </div>
        );
    };

    export default ProductDetailsPage;