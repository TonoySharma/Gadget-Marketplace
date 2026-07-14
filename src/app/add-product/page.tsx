import ProductForm from "@/components/ProductForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add New Product",
    description: "Merchant dashboard to list new premium gadgets and electronics to the My Gadget Hub inventory.",
};

const AddProductPage = () => {
    return (
        <div>
            <ProductForm></ProductForm>
        </div>
    );
};

export default AddProductPage;