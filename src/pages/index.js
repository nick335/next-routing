import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  function handleOrder(){
    console.log('handle orders')
    router.push('products')
    //router.replace('prodcuts') to give the same behaviour as the replace props
  
  }
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  )
}
