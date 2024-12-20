import Link from 'next/link'

const Header = () => {
    const menuList = [
        {
            id:1,
            title:'Home',
            path:'/'
        },
        {
            id:2,
            title:'Blog',
            path:'blog'
        },
    ]
  return (
    <div className='bg-slate-400 p-5 flex justify-center gap-[30px]'>
      {
        menuList.map(item => <Link className='font-bold text-white text-[25px]' key={item.id} href={item.path}>{item.title}</Link>)
      }
    </div>
  )
}

export default Header
