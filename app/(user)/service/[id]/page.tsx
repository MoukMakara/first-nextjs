import CardProductDetail from "@/components/card/CardProductDetail";
import React from "react";
type PropsParams = {
  params: {
    id: number;
  };
  searchParams: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}/${id}`); 
  // const res = await fetch(`${ENDPOINT}/${id}`, {cache: "no-store"});  // revalidation cache
  const data = await res.json();
  console.log("data 1: ", data);
  return data;
};
export default async function page(props: PropsParams) {
  const data = await getData(props.params.id);
  console.log("data 2: ", data);
  // console.log(props);
  return (
    <div className="h-screen grid place-content-center">
      <CardProductDetail
        title={data.title}
        description={data.description}
        price={data.price}
        image={data.image}
        rating={data.rating}
      />
    </div>
  );
}
