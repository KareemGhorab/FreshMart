import { Product } from '@/types/models/product'
import ProductCard from '../../ui/card/card'

type TProps = {
	products: Product[]
}

export default function ProductsList({ products }: TProps) {
	return (
		<ul className='flex gap-5 '>
			{products.map((product) => (
				<ProductCard product={product} key={product.name} />
			))}
		</ul>
	)
}
