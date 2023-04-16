import { useRouter } from "next/router";


export default function Review(){
  const router = useRouter()
  const { productid, reviewId } = router.query

  return(
    <h1>
      Review {reviewId} for product {productid}
    </h1>
  )
}