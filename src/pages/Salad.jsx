import React from 'react'
import salad from '../assets/pizza-img/salad.avif'
import salad2 from '../assets/pizza-img/fruitsalad.jpg'
import salad3 from '../assets/pizza-img/salad3.jpg'

const Salad = () => {
  const salad_li = [
    {
      id: 1,
      picture: salad,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 16,000'
    },
    {
      id: 2,
      picture: salad2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 17,000'
    },
    {
      id: 3,
      picture: salad3,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 19,000'
    },
    {
      id: 4,
      picture: salad,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 16,000'
    },
    {
      id: 5,
      picture: salad2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 19,000'
    },
    {
      id: 6,
      picture: salad3,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 17,000'
    },
    {
      id: 7,
      picture: salad,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 16,000'
    },
    {
      id: 8,
      picture: salad2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 19,000'
    },
    {
      id: 9,
      picture: salad2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 19,000'
    },
    {
      id: 10,
      picture: salad3,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 17,000'
    },
    {
      id: 11,
      picture: salad,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 16,000'
    },
    {
      id: 12,
      picture: salad2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 19,000'
    },
  ]
  return (
    <div className='container'>
      <h1 className='text-[yellow] text-[32px] font-extrabold'>Salad</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] mt-[10px]'>
        {salad_li.map(item => {
          return (
            <li className='w-full h-auto lg:w-[256px] lg:h-[468px]' key={item.id}>
              <button className='flex justify-between ml-auto'><i className="bi bi-heart active:text-red-600"></i></button>
              <img className='h-auto lg:h-[200px]' src={item.picture} alt="" />
              <h3 className='text-[grey] text-[24px] font-extrabold'>{item.title}</h3>
              <p className='text-[#686466] text-[13px] leading-[19px] font-medium'>{item.desc}</p>
              <div className='flex gap-[10px] items-center mt-[15px]'>
                <h3 className='text-[#231F20] text-[20px] font-semibold '>{item.price}</h3>
                <button className='px-[30px] py-[10px] bg-[#F7D22D] rounded-[8px] text-white hover:text-[grey] text-[14px] font-semibold'>Add to cart</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Salad