import React, { useState } from 'react'
import FiboLogo from '../../assets/pizza-img/fibo-logo.png'
import circleBlack from '../../assets/pizza-img/circle-black.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const nav_links = [
        {
            id: 1,
            title: 'Pizza',
            to: 'pizza'
        },
        {
            id: 2,
            title: 'Pasta',
            to: 'pasta'
        },
        {
            id: 3,
            title: 'Soup',
            to: 'soup'
        },
        {
            id: 4,
            title: 'Salad',
            to: 'salad'

        },
        {
            id: 5,
            title: 'Drinks',
            to: 'drinks'
        },
        {
            id: 6,
            title: 'Dessert',
            to: 'desserts'
        },
        {
            id: 7,
            title: 'Promotions',
            to: 'promotos'
        },
        {
            id: 8,
            title: 'Combo',
            to: 'combo'
        },
        {
            id: 9,
            title: 'Contact',
            to: 'contact'
        },
    ]

    return (
        <header className='container'>
            <nav className=' flex justify-between xl:grid'>
                {/* <i class="bi bi-list"></i> */}
                <div className="flex items-center justify-between">
                    <div className='flex gap-[70px]'>
                        <Link to={'/'} className='flex items-center gap-2'>
                            <img src={FiboLogo} alt="fibo-logo" />
                        </Link>
                        <div className='hidden lg:flex xl:grid xl:items-center'>
                            <p className='font-semibold text-[17px] text-[black] '>Pasta delivery <span className='text-[yellow] ml-[5px]'>Моscow</span></p>
                            <div className='flex gap-[10px]'>
                                <img src={circleBlack} alt="circleblack" />
                                <p className='text-[13px] font-bold text-[bgray] flex items-center gap-[7px] '> Yandex food
                                    <span className=' bg-[#FF2E65] w-[4px] h-[4px] inline-block rounded-2xl  '></span>
                                    4.8  <i className="bi bi-star-fill text-[yellow]"></i></p>
                                <p className='text-[13px] font-bold text-[bright-grey] ml-[10px]'>Delivery time <span className=' bg-[#FF2E65] w-[4px] h-[4px] inline-block rounded-2xl '></span> from 31 m</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[30px] items-center'>
                        <button className='bg-[#F3F3F7] rounded-[28px] px-[50px] py-[15px] text-[#696F7A] font-bold text-[14px] hidden lg:block'>Request a call</button>
                        <h1 className='text-[yellow] font-bold text-[28px]  md:text-[22px] hidden  sm:block  uppercase'><a href="#">8 499 391-84-49</a></h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-[15px]'>
                    <div className='hidden xl:flex'>
                        <ul className='flex items-center gap-[30px] '>
                            {nav_links.map(items => {
                                return (
                                    <li key={items.id}>
                                        <Link className='font-semibold text-[15px] text-[#0E0C0D] active:text-[yellow]' to={items.to}>{items.title}</Link>
                                    </li>
                                )
                            })}
                            <li><a className='text-[#696F7A] text-[16px] font-bold' href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-[10px] '>
                        <button className='px-[60px] py-[20px]  rounded-2xl'><a className='text-[#686466] font-bold text-[17px]' href="">Favorites <i className="bi bi-heart active:text-red-600"></i></a></button>
                        <button className='bg-[yellow] px-[40px] py-[10px] rounded-2xl text-[#231F20] font-semibold text-[16px] flex items-center gap-[10px]'><b>Cart</b> <span className='w-[2px] h-[20px] inline-block bg-[#231F20] rounded-[5px]'></span><b>1</b></button>
                        <button className="text-3xl lg:hidden">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header