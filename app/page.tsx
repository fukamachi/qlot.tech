import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Qlot" width="281px" height="112px" />
      </div>
      <div className={styles.description}>Common Lisp library manager</div>
      <div className={styles.installation}>
        <code>
          curl -L https://qlot.tech/installer | bash
        </code>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/fukamachi/qlot#readme">Docs</a>
      </div>
      <div className={styles.bg_license}>
        <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">Photo licensed under CC BY-NC-SA 2.0 Deed</a>
      </div>
    </main>
  )
}
