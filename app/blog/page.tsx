"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ListType {
  name:string
  img:string
  text:string
  id:string | number
}

const page = () => {
  const [list,setList] = useState([])
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then(res => {
      setList(res.data.splice(4,21).map((item:any) => {
        const data:ListType = {
          name:item.title,
          img:item.images[0] ? item.images[0] : item.images[1],
          text:item.description,
          id:item.id
        }
        return data
      }))}) },[])
  return (
    <div className='h-[78vh] flex justify-center items-center overflow-y-auto p-[50px]' >
      <div className="flex flex-wrap h-[100%] justify-between gap-[30px]">
        {list?.map((item : ListType) => (
          <Link href={`/blog/${item.id}`} key={item.id} className="w-[400px] p-3 border-[2px] border-slate-500 h-[500px] rounded-md cursor-pointer">
            <img src={item.img} alt="img" className="w-full h-[60%] rounded-md"/>
            <h3 className="text-slate-700 text-[20px] font-bold line-clamp-1 my-[15px] text-center">{item.name}</h3>
            <p className="text-[16px] text-slate-400 line-clamp-3">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page
