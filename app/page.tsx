import Link from "next/link"

const Home = () => {
  return (
    <div className='h-[78vh] flex justify-center items-center flex-col'>
      <h1 className='font-black text-[40px] text-slate-600'>Welcome to Home Page</h1>
      <p className="text-slate-500 mt-[20px]">Click here to move to Blog page</p> 
      <Link className="py-[5px] bg-transparent border-[2px] border-slate-600 w-[140px] rounded-md text-center text-slate-600 font-semibold text-[22px] mt-[15px] hover:border-transparent hover:bg-slate-600 hover:text-white" href={"/blog"}>Click</Link>

    </div>
  )
}

export default Home