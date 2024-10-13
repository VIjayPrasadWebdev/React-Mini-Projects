export async function PostsApi() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  let res = await fetch(url);
  let data = res.json();
  return data;
}
