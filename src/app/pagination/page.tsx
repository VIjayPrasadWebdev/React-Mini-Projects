import Pagination from "@/Components/Pagination";
import React from "react";
import { PostsApi } from "../utils/Paginationapi";
export default async function pagination() {
  let data = await PostsApi();
  // console.log(data);

  return <Pagination data={data} />;
}
