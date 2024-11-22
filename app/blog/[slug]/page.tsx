"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface DataType {
  name: string;
  img: string;
  text: string;
  category: string;
  price: string;
}

export default function SingleBlog() {
  const { slug } = useParams();
  const [data, setData] =   useState<DataType | null>(null);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://api.escuelajs.co/api/v1/products/${slug}`)
        .then((res) => {
          setData({
            name: res.data.title,
            img: res.data.images[0],
            text: res.data.description,
            category: res.data.category.name,
            price: res.data.price,
          });
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[78vh] overflow-y-auto p-5">
      <div className="flex w-[80%] mx-auto gap-[50px]">
        <img src={data.img} alt={data.name} className="w-[45%]" />
        <div className="flex flex-col justify-between">
          <h2 className="text-[50px] text-center mb-[25px] text-slate-700">{data.name}</h2>
            <p className="text-[20px] text-slate-400 text-justify">{data.text}</p>
            <div className="flex justify-between">
              <p className="text-[30px] text-slate-700">Category: {data.category}</p>
              <p className="text-[30px] text-slate-700">Price: ${data.price}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
