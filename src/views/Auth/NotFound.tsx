import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-4xl font-bold text-black">404</h1>
      <p className="mb-6 text-gray-600">
        The page you are looking for does not exist or is unavailable.
      </p>

      <Link
        to="/home"
        className="rounded-lg bg-orange-500 px-6 py-2 text-white transition hover:bg-orange-600"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound
