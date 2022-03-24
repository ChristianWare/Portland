import styles from '../../styles/Layout.module.css'
import Footer from "./Footer";
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.layout}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
