import styles from '../../styles/Layout.module.css'
import Footer from "./Footer";
import Navbar from './Navbar';
import ScrollInicator from './ScrollIndicator'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.layout}>
        <ScrollInicator />
        
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
