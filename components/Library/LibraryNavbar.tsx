import React from 'react';
import styles from '@/styles/LibraryNavbar.module.css';

const LibraryNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h1 className={styles.title}>OSS Club Library</h1>
        {/* Search Bar */}
        {/* <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <Search className={styles.searchIcon} />
        </div> */}
      </div>
    </nav>
  );
};

export default LibraryNavbar;
