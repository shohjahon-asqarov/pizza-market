import React from 'react'
import smallPizza from '../../assets/pizza-img/Pizza-small.png'

const NewItems = () => {
  const small_pizza = [
    {
      id: 1,
      picture: smallPizza,
      title: 'Carbonara',
      price: 'from 120 ₽'
    },
    {
      id: 2,
      picture: smallPizza,
      title: 'Carbonara',
      price: 'from 120 ₽'
    },
    {
      id: 3,
      picture: smallPizza,
      title: 'Carbonara',
      price: 'from 120 ₽'
    },
    {
      id: 4,
      picture: smallPizza,
      title: 'Carbonara',
      price: 'from 120 ₽'
    },
  ]
  return (
    <div className="container">
        <h1 className='text-[#231F20] text-[24px] font-semibold'>New items</h1>
        <div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[40px] gap-[20px]  '>
            {small_pizza.map(item => {
              return (
                <li key={item.id} className='flex justify-evenly lg:flex lg:items-center p-[20px] gap-[10px] bg-[#FFFFFF] w-full h-auto lg:w-[255px] lg:h-[99px] rounded-2xl shadow-md '>
                  <img className=' h-auto lg:w-[71px] lg:h-[71px]' src={item.picture} alt="pizza" />
                  <div>
                    <h3 className='text-[18px] font-semibold text-[black]'>{item.title}</h3>
                    <span className='text-[#F7D22D] text-[16px] font-extrabold'>{item.price}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}

export default NewItems