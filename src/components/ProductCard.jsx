import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {
  return (
    <Link href={`/products/${product.slug}`} className="flex-none basis-1/6">
    <figure className="product-card flex flex-col gap-4 relative">
        <Image src={product.imageUrl} alt={product.title} height="200" className="object-cover w-full h-48"/>
        <figcaption>
            {product?.type == "new" && <span className="absolute top-1 right-1 bg-main-500 text-white py-1 px-2 z-10 rounded font-medium text-sm">New Arrival</span>}
            <h4 className="font-medium text-main-500 capitalize mb-4 truncate">{product.title}</h4>
            <div className="flex gap-3">
                {product.discounted_price && <span className="text-gray-400 line-through">{product?.discounted_price}</span>}
                <span className="font-semibold">{product.sale_price}</span>
            </div>
        </figcaption>
    </figure>
    </Link>
  )
}

export default ProductCard
