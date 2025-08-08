import number from '../assets/pizza-img/1.png'
import pastaPizza from '../assets/pizza-img/Pata-pizza-ul.png'
import pattern from '../assets/pizza-img/pattern.png'
import pastaSlays from '../assets/pizza-img/pizza-slays.png'
import slays from '../assets/pizza-img/slays.png'
import whiteimg from '../assets/pizza-img/white-pasta-pizza.png'




const Combo = () => {
  const stock_li = [
    {
      id: 1,
      img: pastaPizza,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 2,
      img: number,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 3,
      img: pattern,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 4,
      img: pastaSlays,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 5,
      img: slays,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 6,
      img: whiteimg,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 7,
      img: pastaPizza,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 8,
      img: number,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 9,
      img: pattern,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 10,
      img: pastaSlays,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 11,
      img: slays,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
    {
      id: 12,
      img: whiteimg,
      title: 'We give away cyber prizes',
      desc: 'What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookies "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.'
    },
  ]
  return (
    <>
      <div div className="container" >
        <h1 className='text-[yellow] text-[32px] font-extrabold mb-[10px]'>Stock</h1>
        <div>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ga-[10px]'>
            {stock_li.map(item => {
              return (
                <li key={item.id} className=' w-full h-auto lg:w-[370px] lg:h-[381px] rounded-[20px] shadow-md bg-[#FFFFFF] p-3 hover:scale-110 transition-all duration-300'>
                  <img src={item.img} alt="" />
                  <h2 className='text-[#0E0C0D] text-[20px] font-bold mt-3'>{item.title}</h2>
                  <p className='text-[#797979] text-[13px] font-medium mt-2'>{item.desc}</p>
                  <button className='bg-[#F7D22D] px-[80px] py-[13px] rounded-2xl text-[#231F20] active:text-[white] font-semibold text-[16px] flex items-center gap-[10px] mt-3'>Watch</button>
                </li>
              )
            })}

          </ul>
        </div>
      </div >
    </>



  )
}

export default Combo