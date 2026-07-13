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


interface Props {
    searchParams: Promise<{
        page?: string;
        search?: string;
        category?: string;
        sort?: string;
        minPrice?: string;
        maxPrice?: string;
    }>;
}


async function getProducts({
    page,
    search,
    category,
    sort,
    minPrice,
    maxPrice,
}: {
    page: number;
    search: string;
    category: string;
    sort: string;
    minPrice: string;
    maxPrice: string;
}) {

    const url = new URL("http://localhost:5000/api/all-products");


    url.searchParams.set("page", String(page));
    url.searchParams.set("limit", "12");


    if (search) {
        url.searchParams.set("search", search);
    }


    if (category && category !== "All") {
        url.searchParams.set("category", category);
    }


    if (sort) {
        url.searchParams.set("sort", sort);
    }


    if (minPrice) {
        url.searchParams.set("minPrice", minPrice);
    }


    if (maxPrice) {
        url.searchParams.set("maxPrice", maxPrice);
    }



    const res = await fetch(url.toString(), {
        cache: "no-store",
    });
    console.log("API URL:", url.toString());

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }


    return res.json();

}



const ProductsPage = async ({searchParams}: Props) => {

    const params = await searchParams;
    console.log("PAGE PARAMS:", params);

    const currentPage =
        Number(params.page) || 1;



    const result = await getProducts({

        page: currentPage,

        search: params.search || "",

        category:
            params.category === "All"
                ? ""
                : params.category || "",

        sort: params.sort || "",

        minPrice: params.minPrice || "",

        maxPrice: params.maxPrice || "",

    });



    const products = result.data || [];

    const totalPages =
        result.pagination?.totalPages || 1;



    return (
        <section className="max-w-7xl mx-auto px-4 py-10">


            <FadeUp className="font-bold mb-10">

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