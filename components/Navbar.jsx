import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" width="32" height="32" alt="" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>PEDIDOS LIGUE!</div>
          <div className={styles.text}>85 98594-5788</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>COLEÇÕES</li>
          <li className={styles.listItem}>NOVIDADES</li>
          <li className={styles.listItem}>FEMININO</li>
          <li className={styles.listItem} style={{fontFamily: 'Great Vibes', fontSize: "25px", fontWeight: 'bold'}}>Krist Outfit</li>
          <li className={styles.listItem}>MARCULINO</li>
          <li className={styles.listItem}>ACESSÓRIOS</li>
          <li className={styles.listItem}>OUTLET</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>5</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
