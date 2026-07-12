export async function getProductById(id: string) {
  const res = await fetch(
    `http://localhost:5000/api/products/${id}`,
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