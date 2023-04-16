import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetail() {
  const router = useRouter()
  const productid = router.query.productid
  return (
    <div>Product {productid}</div>
  )
}
