import React from 'react'
import pasta from '../assets/pizza-img/pasta.webp'
import pasta2 from '../assets/pizza-img/pasta2.jpg'
import pasta3 from '../assets/pizza-img/pasta3.webp'
import Footer from '../components/layout/Footer'

const Pasta = () => {
  const pasta_li = [
    {
      id: 1,
      picture: pasta,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 27,000'
    },
    {
      id: 2,
      picture: pasta2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 24,000'
    },
    {
      id: 3,
      picture: pasta3,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 25,000'
    },
    {
      id: 4,
      picture: pasta,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 27,000'
    },
    {
      id: 5,
      picture: pasta2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 24,000'
    },
    {
      id: 6,
      picture: pasta3,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 25,000'
    },
    {
      id: 7,
      picture: pasta,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 27,000'
    },
    {
      id: 8,
      picture: pasta2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 28,000'
    },
    {
      id: 9,
      picture: pasta2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 24,000'
    },
    {
      id: 10,
      picture: pasta3,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 25,000'
    },
    {
      id: 11,
      picture: pasta,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 27,000'
    },
    {
      id: 12,
      picture: pasta2,
      title: 'With shrimps and truffles',
      desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
      price: 'from 28,000'
    },
  ]


  return (
    <div className='container'>
                  <h1 className='text-[yellow] text-[32px] font-extrabold'>Pasta</h1>
         <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] mt-[10px]'>
                {pasta_li.map(item => {
                    return (
                        <li className='w-full h-auto lg:w-[256px] lg:h-[468px]' key={item.id}>
                            <button className='flex justify-between ml-auto'><i className="bi bi-heart active:text-red-600"></i></button>
                            <img className='h-auto lg:h-[200px]' src={item.picture} alt="" />
                            <h3 className='text-[grey] text-[24px] font-extrabold'>{item.title}</h3>
                            <p className='text-[#686466] text-[13px] leading-[19px] font-medium'>{item.desc}</p>
                            <div className='flex justify-between items-center mt-[15px]'>
                                <h3 className='text-[#231F20] text-[20px] font-semibold '>{item.price}</h3>
                                <button className='px-[30px] py-[10px] bg-[#F7D22D] rounded-[8px] text-white hover:text-[grey] text-[14px] font-semibold'>Add to cart</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Footer/>
    </div>
  )
}

export default Pasta