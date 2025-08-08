import React from 'react'
import Footer from '../components/layout/Footer'

const Contact = () => {
  return (
    <>
      {/* My Uzbekistan map */}
      <div className="container">
      <h1 className='text-[yellow] text-[32px] font-extrabold'>Contact us</h1>

        <iframe className='w-full rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6142445.185802148!2d59.322815455457814!3d41.260092333724934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2s!4v1754112720727!5m2!1sen!2s" width="1160" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className='mt-[40px]'>
          <h1 className='text-[yellow] font-bold text-[38px] uppercase'><a href="#">8 499 391-84-49</a></h1>
          <p className='text-[24px] font-bold text-[#0E0C0D]'>st. Prospect Vernadskogo 86V <br />
            <span className='text-[15px]'>Delivery and pickup 10:00 — 23:00</span></p>
        </div>

      </div>
      <Footer />
    </>

  )
}

export default Contact