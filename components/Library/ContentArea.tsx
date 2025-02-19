import React from 'react';
import styles from '@/styles/Library.module.css';

interface ContentAreaProps {
  activeTab: string;
  
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'playlist':
        return (
          <div className={styles.contentContainer}>
            <h2 className={styles.contentHeading}>Playlists</h2>
            <p className={styles.contentParagraph}>Display playlists here</p>
          </div>
        );
      case 'notes':
        return (
          <div className={styles.contentContainer}>
            <h2 className={styles.contentHeading}>Notes</h2>
            <p className={styles.contentParagraph}>Display notes here</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <main className={styles.mainContent}>{renderContent()}</main>;
};

export default ContentArea;
