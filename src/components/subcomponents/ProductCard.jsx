import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <figure className="product-card flex flex-col gap-4 relative shadow rounded-2xl">
      <Image
        src={product.imageUrl}
        alt={product.title}
        height={200}
        width={300}
        className="object-cover w-full h-48"
      />
      <figcaption className="p-3">
        {product?.type == "new" && (
          <span className="absolute top-1 right-1 bg-main-500 text-white py-1 px-2 z-10 rounded font-medium text-sm">
            New Arrival
          </span>
        )}
        <Link href={`/products/${product.slug}`}>
          <h4 className="font-medium text-main-500 capitalize mb-4 truncate">
            {product.title}
          </h4>
        </Link>
        <div className="flex justify-between items-center">
          {product.discounted_price && (
            <span className="text-gray-400 line-through">
              {product?.discounted_price}
            </span>
          )}
          <span className="font-semibold">&#36;{product.sale_price}</span>
        </div>
        <div className="product-card-actions hidden absolute bottom-0 text-sm right-0 left-0 p-3 justify-between bg-main rounded-b-3xl text-white">
          <Link href="/cart" className="inline-flex gap-2 hover:text-secondary">
            <span className="bi bi-bag"></span> Add to cart
          </Link>
          <div className="flex items-center gap-3">
            <span className="bi bi-heart cursor-pointer hover:text-secondary"></span>
            <span className="bi bi-plus-square cursor-pointer hover:text-secondary"></span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
