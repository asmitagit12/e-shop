'use client'
import Link from 'next/link'
import { formatPrice } from '../../utils/FormatPrice'
import { CartProductType } from '../product/[productId]/ProductDetails'
import { truncateText } from '../../utils/TruncateText'
import Image from 'next/image'
import SetQuantity from '../components/products/SetQuantity'

interface ItemContentProps {
  item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  return (
    <div
      className='
        grid
        grid-cols-5 text-xs md:text-sm gap-4 border-t-2 border-gray-200 py-4 items-center'
    >
      <div className='col-span-2 justify-self-start flex gap-2 md:gap-4'>
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className='object-contain'
            />
          </div>
        </Link>
        <div className='flex flex-col justify-between'>
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className='w-72'>
            <button onClick={() => {}} className='text-gray-500 underline'>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity cartCounter={true} cartProduct={item} handleQtyIncrease={()=>{}} handleQtyDecrease={()=>{}}/>
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  )
}

export default ItemContent
