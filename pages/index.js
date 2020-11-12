import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <br/>
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <br/>
      <Link href="/images" as={process.env.BACKEND_URL + '/images'}>
        <a>Images</a>
      </Link>
      <br/>
      <Link href="/album" as={process.env.BACKEND_URL + '/album'}>
        <a>Album</a>
      </Link>
    </div>
  )
}
