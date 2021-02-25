import { Link } from 'react-router-dom'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>.404</h1>
      <div>
        The page you are trying to reach does not exist, or has been moved.
        <Link className="link" to="/">Go to homepage</Link>
      </div>
    </main>
  )
}
