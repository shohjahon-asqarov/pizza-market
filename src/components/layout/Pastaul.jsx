import React from 'react'
import CheesePizza from '../../assets/pizza-img/Cheese-pizza.png'
import MixPizza from '../../assets/pizza-img/mix-pizza-new.png'
import tomotoPizza from '../../assets/pizza-img/tomotos-pizza.png'
import mushroomPIzza from '../../assets/pizza-img/mushroom-pizza.png'

const Pastaul = () => {

    const pasta_li = [
        {
            id: 1,
            picture: CheesePizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 2,
            picture: MixPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,00'
        },
        {
            id: 3,
            picture: tomotoPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 4,
            picture: mushroomPIzza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 5,
            picture: CheesePizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 6,
            picture: MixPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },
        {
            id: 7,
            picture: tomotoPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 8,
            picture: mushroomPIzza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 9,
            picture: CheesePizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },
        {
            id: 10,
            picture: MixPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },
        {
            id: 11,
            picture: tomotoPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 12,
            picture: mushroomPIzza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 13,
            picture: CheesePizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },
        {
            id: 14,
            picture: MixPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,00'
        },
        {
            id: 15,
            picture: tomotoPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 16,
            picture: mushroomPIzza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },
        {
            id: 17,
            picture: CheesePizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 18,
            picture: MixPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },
        {
            id: 19,
            picture: tomotoPizza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 32,000'
        },
        {
            id: 20,
            picture: mushroomPIzza,
            title: 'With shrimps and truffles',
            desc: 'Homemade fettuccine pasta, cream sauce, shrimps, truffle oil, black pepper, parmesan.350 g',
            price: 'from 35,000'
        },


    ]

    return (
        <div className="container">
            <h1 className='text-[yellow] text-[32px] font-extrabold'>Pizza</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] mt-[10px]'>
                {pasta_li.map(item => {
                    return (
                        <li className=' w-full h-auto lg:w-[256px] lg:h-[468px]' key={item.id}>
                            <button className='flex justify-between ml-auto'><i className="bi bi-heart active:text-red-600"></i></button>
                            <img className='w-full' src={item.picture} alt="" />
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

export default Pastaul