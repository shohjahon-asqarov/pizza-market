import ProductCard from '../components/ui/ProductCard'
import { pasta_li } from '../assets/data'

const Pasta = () => {

  return (
    <div className='container'>
      <h1 className='text-[yellow] text-[32px] font-extrabold'>Pasta</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] mt-[10px]'>
        {pasta_li.map(item => {
          return (
            <ProductCard key={item.id} product={item} />
          )
        })}
      </ul>
    </div>
  )
}

export default Pasta