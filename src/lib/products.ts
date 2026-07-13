export async function getProductById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data.data;
}