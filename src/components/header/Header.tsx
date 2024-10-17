import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link href="/" className={styles.headerLogo}>
          Headless Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
