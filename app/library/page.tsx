'use client';

import React, { useState } from 'react';
import LibraryNavbar from '@/components/Library/LibraryNavbar';
import Tabs from '@/components/Library/Tabs';
import ContentArea from '@/components/Library/ContentArea';

const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('video');

  return (
    <div style={{background: "#0a0a0a", height: 'auto', minHeight: '100vh'}}>
      <LibraryNavbar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ContentArea activeTab={activeTab} />
    </div>
  );
};

export default LibraryPage; 
