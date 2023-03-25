import { useRouter } from "next/router"


const ReviewItem = () => {
  const router = useRouter()
  const{ itemId, reviewId} = router.query
  
  return (
    <h1>Review id {reviewId} for items {itemId}</h1>
  )
}

export default ReviewItem