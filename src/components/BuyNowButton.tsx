"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


interface Product {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
}


interface Props {
    product: Product;
}


const BuyNowButton = ({ product }: Props) => {

    const [loading, setLoading] = useState(false);


    const handleBuy = async () => {

        setLoading(true);


        console.log("Buying Product:", product);


        // এখানে payment API call করবে
        // await fetch("/api/payment", {
        //    method:"POST",
        //    body: JSON.stringify(product)
        // })


        await new Promise((resolve) => 
            setTimeout(resolve, 2000)
        );


        setLoading(false);


        // console.log("Purchase started");

    };


    return (
        <Button
            size="lg"
            onPress={handleBuy}
            isDisabled={loading}
        
            className="
                w-full sm:w-auto
                px-8 py-7
                text-base
                font-bold
                bg-emerald-500
                hover:bg-emerald-400
                text-white
                rounded
            "
        >
            {
                loading 
                ? "Processing..." 
                : "Buy Now"
            }
        </Button>
    );
};


export default BuyNowButton;