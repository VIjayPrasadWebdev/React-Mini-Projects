import LoadProductsapp from "@/Components/Loadproductsapp";
import React from "react";
import { LoadproductsApi } from "../utils/Loadproductsapi";

export default async function Loadproducts() {
  let loadproductsdata: any = await LoadproductsApi();
  // console.log(loadproductsdata);

  return <LoadProductsapp loadproductsdata={loadproductsdata} />;
}
