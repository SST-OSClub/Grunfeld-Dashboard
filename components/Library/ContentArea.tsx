import React, {useEffect, useState} from "react";
import styles from "@/styles/ContentArea.module.css";
import LibraryCard from "@/ui/LibraryCard";
import { supabase } from "@/lib/supabaseClient";


interface ContentAreaProps {
  activeTab: string;
}

interface LibraryCardProps {
  title?: string;
  duration?: string;
  ShareLink?: string;
  DownloadLink?: string;
}


const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const [tab, setTab] = useState(activeTab);
  const [LibraryCardData, setLibraryData] = useState<LibraryCardProps[]>([]);

  useEffect(() => {
    async function fetchLibraryData() {
      const { data, error } = await supabase
        .from("library")
        .select("*");

      if (error) {
        console.error("Error fetching library data:", error);
      } else {
        setLibraryData(data);
        console.log(data)
      }
    }
    fetchLibraryData();
  }, []);

  useEffect(() => {
    setTab(activeTab);
  }, [activeTab]);
  const renderContent = () => {
    switch (activeTab) {
      case "video":
        return (
          <div className={styles.contentContainer}>
            <h2 className={styles.contentHeading}>Playlists</h2>
            <div className={styles.cardContainer}>
              {LibraryCardData.map((playlist, index) => (
                <LibraryCard key={index} {...playlist} tab={tab}/>
              ))}
            </div>
          </div>
        );
      case "notes":
        return (
          <div className={styles.contentContainer}>
            <h2 className={styles.contentHeading}>Notes</h2>
            <div className={styles.cardContainer}>
              {LibraryCardData.map((note, index) => (
                <LibraryCard key={index} {...note} tab={tab}/>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <main className={styles.mainContent}>{renderContent()}</main>;
};

export default ContentArea;
