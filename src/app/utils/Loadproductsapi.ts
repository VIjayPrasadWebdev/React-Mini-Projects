export async function LoadproductsApi() {
  let url = "https://fakestoreapi.com/products";
  let res = await fetch(url);
  let data = await res.json();
  return data;
}
