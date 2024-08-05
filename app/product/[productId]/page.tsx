import { product } from '../../../utils/product'
import Container from '../../components/Container'
import ListRating from './ListRating'
import ProductDetails from './ProductDetails'

interface IParams {
  productId?: string
}

const Product = ({ params }: { params: IParams }) => {
  console.log('Params', params)
  
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product}/>
        <div className="flex flex-col mt-20 gap-4">
          <div>Add rating</div>
          <ListRating product={product}/>
        </div>
      </Container>
    </div>
  )
}

export default Product
