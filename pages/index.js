import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <Link href="/images" as={process.env.BACKEND_URL + '/images'}>
        <a>Images</a>
      </Link>
    </div>
  )
}
