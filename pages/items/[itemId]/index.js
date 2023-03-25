import { useRouter } from "next/router"

const ItemDetail = () => {
  const router = useRouter()
  const itemId = router.query.itemId
  return (
    <h1>Details about items {itemId}</h1>
  )
}

export default ItemDetail