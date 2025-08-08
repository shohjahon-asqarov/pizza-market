import React, { useRef } from 'react'
import yellowGirl from '../assets/pizza-img/yellow-girl.png'
import blackGirl from '../assets/pizza-img/black-gril.png'
import NewItems from '../components/layout/NewItems'
import Pastaul from '../components/layout/Pastaul'
import Payment from '../components/layout/Payment'
import Footer from '../components/layout/Footer'
const Home = () => {
  // Scrool-img 
  const img_nav = [
    {
      id: 1,
      picture: yellowGirl
    },
    {
      id: 2,
      picture: blackGirl
    },
    {
      id: 3,
      picture: yellowGirl
    },
    {
      id: 4,
      picture: blackGirl
    },
    {
      id: 5,
      picture: yellowGirl
    },
  ]
  const imageContainerRef = useRef(null)
  const imageWidth = 300; // 1 ta rasmning eni (px)

  const scrollLeft = () => {
    imageContainerRef.current.scrollBy({ left: -imageWidth, behavior: 'smooth' })
  }

  const scrollRight = () => {
    imageContainerRef.current.scrollBy({ left: imageWidth, behavior: 'smooth' })
  }
  return (
    <div className="container">
      <div className='flex items-center relative'>
        <button onClick={scrollLeft} className=' p-[10px] bg-[yellow]  hover:bg-amber-300 rounded-[50px] inline-block '><i className="bi bi-chevron-left flex justify-center "></i></button>
        <div ref={imageContainerRef} className='flex overflow-x-scroll no-scrollbar space-x-4 px-16 scroll-smooth snap-x snap-mandatory' >
          {img_nav.map((img, idx) => (
            <img
              key={idx}
              src={img.picture}
              alt="girl"
              className="h-auto snap-center shrink-0 rounded-lg"
            />
          ))}
        </div>
        <button onClick={scrollRight} className='p-[10px] bg-[yellow] hover:bg-amber-300 rounded-[50px] inline-block '><i className="bi bi-chevron-right flex justify-center "></i></button>
      </div>
      <NewItems />
      <Pastaul />
      <Payment />
      <Footer />
    </div>




  )
}

export default Home