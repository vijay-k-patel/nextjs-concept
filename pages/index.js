import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }

  return (
    <div>
      <h1>Hello Page</h1>
      <h3>
        <Link href={'/blog'}>
          Blog
        </Link>
      </h3>
      <h3>
        <Link href={'/product'}>
          Product
        </Link>
      </h3>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}
