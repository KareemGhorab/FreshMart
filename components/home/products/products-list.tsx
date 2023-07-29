import { Product } from '@/types/product'
import ProductCard from './product-card'

type Props = {
	products: Product[]
}

export default function ProductsList({ products }: Props) {
	return (
		<ul className='flex gap-5 '>
			{products.map((product) => (
				<ProductCard product={product} key={product.name} />
			))}
		</ul>
	)
}
