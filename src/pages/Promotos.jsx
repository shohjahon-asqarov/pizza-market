import React from 'react'
import Footer from '../components/layout/Footer'
import dessert from '../assets/pizza-img/desserts-aksiya.png'

const Promotos = () => {
    return (
        <div className='container'>
            <h1 className='text-[yellow] text-[32px] font-extrabold'>Promotions</h1>
            {/*Our promotions */}
            <div className='mt-[40px]'>
                <h1 className='text-center text-[44px] font-extrabold'>Our <span className='text-[#F7D22D]'>promotions</span></h1>
                <div className='flex gap-8 mt-[50px]'>
                    <img src={dessert} alt="" />
                    <div className='grid grid-cols-2 gap-5'>
                        <img src={dessert} alt="" />
                        <img src={dessert} alt="" />
                        <img src={dessert} alt="" />
                        <img src={dessert} alt="" />
                    </div>
                </div>
                <button className='px-[40px] py-[10px] rounded-2xl bg-[#F7D22D] text-white flex justify-center m-auto mt-[40px]'>All actions</button>
            </div>
            <Footer />
        </div>
    )
}

export default Promotos