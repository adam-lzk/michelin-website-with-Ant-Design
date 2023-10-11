import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <h1>404. Go <Link to="/">home</Link></h1>
  )
}

export { NotFoundPage }
