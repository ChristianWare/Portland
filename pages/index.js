import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar />
    <Hero />
    </div>
  )
}
