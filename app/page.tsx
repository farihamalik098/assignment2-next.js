
import Link from "next/link";
export default function Home() {
  return (
    <div className= "flex gap-40 bg-blue-600">
  <li> <Link href= "/">Home</Link>
    </li>
  <li> <Link href= "/about">About</Link></li>
  <li> <Link href= "/contact-us">contact us</Link></li>
  
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SxnPPWtI0YGaOyZIEbnAWk58u6ZFA7wW5g&s" alt="sorry" />
  </div>
);
}
