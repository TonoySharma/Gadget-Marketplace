import AllProducts from "@/components/AllProducts";
import FadeUp from "@/components/FadeUp";

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

interface ProductsResponse {
    data: Product[];
    pagination: {
        page: number;
        totalPages: number;
        totalProducts: number;
        limit: number;
    };
}

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

async function getProducts(page: number) {
    const res = await fetch(
        `http://localhost:5000/api/all-products?page=${page}&limit=12`,
        {
            cache: "no-store",
        }
    );


    return res.json();
}



const ProductsPage = async ({ searchParams }: Props) => {
    const { page } = await searchParams;

    const currentPage = Number(page) || 1;

    const result = await getProducts(currentPage);
    // console.log(result, 'result');
    const products = result.data;
    const totalPages = result.pagination.totalPages;



    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <FadeUp className=" font-bold mb-10">
                <h1 className="text-4xl font-bold mb-2">
                    All Products
                </h1>
                <p className="text-gray-500">
                    Discover our wide range of products at competitive prices.
                </p>
            </FadeUp>

            <AllProducts
                products={products}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </section>
    );
};

export default ProductsPage;