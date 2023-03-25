import Link from "next/link"


const ProductList = ({productId = 10}) => {
  return (
    <div>
      <h3>
        <Link href={'/'}>Home</Link>
      </h3>
      <h1>Product Page</h1>
      <h3>
        <Link href={'/product/1'}>
          Product 1
        </Link>
      </h3>
      <h3>
        <Link href={'/product/replcae'} replace>
          Product replcae
        </Link>
      </h3>
      <h3>
        <Link href={`/product/${productId}`}>
          Product {productId}
        </Link>
      </h3>
    </div>
  )
}

export default ProductList