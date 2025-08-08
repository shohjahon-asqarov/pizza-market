import React from 'react'
import FiboLogo from '../../assets/pizza-img/fibo-logo.png'
import call from '../../assets/pizza-img/call.png'
import mes from '../../assets/pizza-img/S.png'
import energy from '../../assets/pizza-img/energy.png'
import telegram from '../../assets/pizza-img/telegram.png'
import facebook from '../../assets/pizza-img/facebook.png'
import week from '../../assets/pizza-img/W.png'
import footerLogo from '../../assets/pizza-img/foote-logo.png'
import visa from '../../assets/pizza-img/visa.png'
import pLogo from '../../assets/pizza-img/p.png'
import doublecircle from '../../assets/pizza-img/double-circle.png'
const Footer = () => {
    return (
        <footer className='mt-[90px]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 '>
                    <div>
                        <img src={FiboLogo} alt="" />
                        <div className='flex gap-[30px] mt-[30px]'>
                            <p className='text-[black] text-[16px] font-bold'>Caloric content and composition</p>
                            <p  className='text-[black] text-[16px] font-bold'>Legal information</p>
                        </div>
                        <p className='mt-[20px] mb-[20px] text-[black] text-[16px] font-bold'>We are on social networks</p>
                        <div>
                            <ul className='grid grid-cols-3 gap-[20px]font-semibold text-[grey] text-[16px]'>
                                <li className='grid gap-[10px] '>
                                    <a  href="#">YouTube</a>
                                    <a href="#">Instagram</a>
                                </li>
                                <li className='grid gap-[10px]'>
                                    <a href="#">Facebook</a>
                                    <a href="#">Contact</a>
                                </li>
                                <li className='grid gap-[10px]'>
                                    <a href="#">Moscow, Prospect </a>
                                    <a href="#">Vernadskogo 86V</a>
                                </li>
                            </ul>
                        </div>
                        <div className='grid grid-cols-1 gap-[30px] lg:flex lg:justify-between lg:items-center mt-[20px]'>
                            <p className='text-[14px] text-[grey] font-semibold text'>YaBao All rights reserved © 2021</p>
                            <ul className='grid grid-cols-3 mb-[20px] lg:flex lg:gap-[30px]'>
                                <li>
                                    <a href=""><img src={visa} alt="" /></a>
                                </li>
                                <li>
                                    <a href=""><img src={pLogo} alt="" /></a>
                                </li>
                                <li>
                                    <a href=""><img src={doublecircle} alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-[14px] font-semibold txet-[black ] uppercase'>Any questions left? We are always in touch:</h2>
                        <div>
                            <ul className='grid grid-cols-6  lg:grid lg:grid-cols-4 lg:w-[455px] lg:h-[120px] lg:items-center mt-[10px] '>
                                <li>
                                    <button className=' border-[2px] border-[#E3ECF5] rounded-[13px] w-[60px] lg:w-[101px] h-[52px] flex justify-center items-center'><a href="#"><img src={call} alt="" /></a></button>
                                </li>
                                <li>
                                    <button className=' border-[2px] border-[#E3ECF5] rounded-[13px] w-[60px] lg:w-[101px] h-[52px] flex justify-center items-center'><a href="#"><img src={mes} alt="" /></a></button>
                                </li>
                                <li>
                                    <button className=' border-[2px] border-[#E3ECF5] rounded-[13px] w-[60px] lg:w-[101px] h-[52px] flex justify-center items-center'><a href="#"><img src={energy} alt="" /></a></button>
                                </li>
                                <li>
                                    <button className=' border-[2px] border-[#E3ECF5] rounded-[13px] w-[60px] lg:w-[101px] h-[52px] flex justify-center items-center'><a href="#"><img src={telegram} alt="" /></a></button>
                                </li>
                                <li>
                                    <button className=' border-[2px] border-[#E3ECF5] rounded-[13px] w-[60px] lg:w-[101px] h-[52px] flex justify-center items-center'><a href="#"><img src={facebook} alt="" /></a></button>
                                </li>
                                <li>
                                    <button className=' border-[2px] border-[#E3ECF5] rounded-[13px] w-[60px] lg:w-[101px] h-[52px] flex justify-center items-center'><a href="#"><img src={week} alt="" /></a></button>
                                </li>
                                <li className='col-span-6 mt-[20px] lg:col-span-2 lg:mt-[5px]'>
                                    <button className=' border-[2px] border-[#E3ECF5] w-full rounded-[13px] h-[52px] flex justify-center items-center'><a className='font-bold text-[13px] text-[#0E0C0D]' href="#">write to us</a></button>
                                </li> 
                            </ul>
                            <div className='hidden lg:grid  mt-[30px]'>
                                <div className='ml-[50px] lg:flex lg:justify-between'>
                                    <h1 className='text-[yellow] font-bold text-[28px] mt-[20px] uppercase'><a href="#">8 499 391-84-49</a></h1> <br />
                                    <button className='bg-[#F3F3F7] rounded-[28px] px-[50px] py-[15px] text-[#696F7A] font-bold text-[14px]'>Request a call</button>
                                </div>
                                <img className='mt-[100px]' src={footerLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer