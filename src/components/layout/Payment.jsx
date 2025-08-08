import React from 'react'
import store from '../../assets/pizza-img/store-circle.png'
import train from '../../assets/pizza-img/train.png'
import computer from '../../assets/pizza-img/computer.png'
import deliveryTime from '../../assets/pizza-img/deliver-time.png'


const Payment = () => {
    const deliver_li = [
        {
            id: 1,
            img: store,
            title: 'Place the tray into the base skillet and secure int with the heat Reflective Lid.'
        },
        {
            id: 2,
            img: train,
            title: 'Place the tray into the base skillet and secure int with the heat Reflective Lid.'
        },
        {
            id: 3,
            img: computer,
            title: 'Place the tray into the base skillet and secure int with the heat Reflective Lid.'
        },
        {
            id: 4,
            img: deliveryTime,
            title: 'Place the tray into the base skillet and secure int with the heat Reflective Lid.'
        },
    ]
    return (
        <section className=" bg-[#E3ECF5] w-full ">
            <div className="container">
                <h1 className='text-[#F7D22D] text-[30px] font-extrabold text-center leading-30'>Payment and delivery</h1>
                <div>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-[10px] sm:gap-[60px] mt-[40px]'>
                        {deliver_li.map(item => {
                            return (
                                <li key={item.id} className='relative  w-[305px] h-[104px]  sm:w-full sm:h-auto  bg-white rounded-2xl'>
                                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-[77px] h-[77px] bg-white rounded-[50px] m-auto  mb-[10px]'>
                                        <img className='m-auto mt-[10px]' src={item.img} alt="" />
                                    </div>
                                    <p className='text-[#473E43] text-[14px] font-semibold mt-[40px] text-center'>{item.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* My map  */}
                <div className='m-auto flex justify-center mt-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31510.280315246557!2d69.23888519144107!3d41.32030336941056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1754062230275!5m2!1sen!2s" width="1100" height="322" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>

    )
}

export default Payment