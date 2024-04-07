import React from 'react'
import Link from 'next/link'
import shopCategory from '../constant/index'
const Category = () => {
  return (
    
    <div>
<div className='md:hidden'>
<button disabled={true} className='text-[12px] text-[#BFC8CD]'>
    HOME | 
</button>
<button className='text-[12px] px-2 font-[400]'>
    SHOP
</button>
</div>
<div className='hidden md:block '>
    <ul className=' flex justify-center pr-40'>
        {shopCategory?.map((item, index) => (
    // Map over shopCategory array
    <li key={index} className='text-[13px] px-2 font-[700]'>
<Link href={item}>
    {item}
</Link>
   
    </li>
  ))}
        
       
    </ul>
</div>

    </div>

  )
}

export default Category