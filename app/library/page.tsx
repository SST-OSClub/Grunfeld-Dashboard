'use client';

import React, { useState } from 'react';
import LibraryNavbar from '@/components/Library/LibraryNavbar';
import Tabs from '@/components/Library/Tabs';
import ContentArea from '@/components/Library/ContentArea';
import styles from '@/styles/Library.module.css';

const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('playlist');

  return (
    <div className={styles.outerContainer}>
      <LibraryNavbar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ContentArea activeTab={activeTab} />
    </div>
  );
};

export default LibraryPage;
