import React from 'react'
import water from '../assets/pizza-img/water.avif'
import pepsi from '../assets/pizza-img/pepsi.jpg'
import coffee from '../assets/pizza-img/coffe.avif'
import tea from '../assets/pizza-img/tea2.jpg'
import moxito from '../assets/pizza-img/moxito.jpg'
import icecub from '../assets/pizza-img/icecub.avif'
import Footer from '../components/layout/Footer'
const Drinks = () => {
  const drinks_li = [
    {
      id: 1,
      picture: tea,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 4,000'
    },
    {
      id: 2,
      picture: coffee,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 10,000'
    },
    {
      id: 3,
      picture: pepsi,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 7,000'
    },
    {
      id: 4,
      picture: icecub,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 10,000'
    },
    {
      id: 5,
      picture: moxito,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 15,000'
    },
    {
      id: 6,
      picture: pepsi,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 7,000'
    },
    {
      id: 7,
      picture: tea,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 3,000'
    },
    {
      id: 8,
      picture: water,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 5,000'
    },
    {
      id: 9,
      picture: moxito,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 15,000'
    },
    {
      id: 10,
      picture: pepsi,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 7,000'
    },
    {
      id: 11,
      picture: tea,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 3,000'
    },
    {
      id: 12,
      picture: water,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 5,000'
    },
  ]
  return (
    <div className='container'>
      <h1 className='text-[yellow] text-[32px] font-extrabold'>Drink</h1>

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] mt-[10px]'>
        {drinks_li.map(item => {
          return (
            <li className='w-full h-auto lg:w-[256px] lg:h-[468px]' key={item.id}>
              <button className='flex justify-between ml-auto'><i className="bi bi-heart active:text-red-600"></i></button>
              <img className=' h-auto lg:h-[200px]' src={item.picture} alt="" />
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
      <Footer />
    </div>
  )
}

export default Drinks