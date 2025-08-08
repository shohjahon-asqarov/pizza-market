
const ProductCard = ({product}) => {
    return (
        <li>
            <button className='flex justify-between ml-auto'><i className="bi bi-heart active:text-red-600"></i></button>
            <img className='h-auto lg:h-[200px]' src={product.picture} alt="" />
            <h3 className='text-[grey] text-[24px] font-extrabold'>{product.title}</h3>
            <p className='text-[#686466] text-[13px] leading-[19px] font-medium'>{product.desc}</p>
            <div className='flex justify-between items-center mt-[15px]'>
                <h3 className='text-[#231F20] text-[20px] font-semibold '>{product.price}</h3>
                <button className='px-[30px] py-[10px] bg-[#F7D22D] rounded-[8px] text-white hover:text-[grey] text-[14px] font-semibold'>Add to cart</button>
            </div>
        </li>
    )
}

export default ProductCard
