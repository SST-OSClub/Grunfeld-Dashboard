import React from 'react';
import styles from '@/styles/Library.module.css';

export type Tab = {
  id: string;
  label: string;
};

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs: Tab[] = [
    { id: 'playlist', label: 'Playlist' },
    { id: 'notes', label: 'Notes' },
  ];

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.tabButton} ${
              activeTab === tab.id
                ? styles.tabButtonActive
                : styles.tabButtonInactive
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className={styles.activeIndicator} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
