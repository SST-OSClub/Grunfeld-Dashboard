import React, {useEffect, useState} from "react";
import styles from "@/styles/ContentArea.module.css";
import LibraryCard from "@/ui/LibraryCard";


interface ContentAreaProps {
  activeTab: string;
}

interface LibraryCardProps {
  title?: string;
  duration?: string;
  ShareLink?: string;
  DownloadLink?: string;
}

const LibraryCardData: LibraryCardProps[] = [
  {
    title: "Git and Github",
    duration: "23 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
    DownloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "JavaScript Basics",
    duration: "15 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
    DownloadLink: undefined,
  },
  {
    title: "React Notes",
    duration: "10 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
    DownloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Next.js Advanced",
    duration: "7 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Node.js Backend",
    duration: "9 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "TypeScript Guide",
    duration: "8 min",
    ShareLink: undefined,
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Python for Data Science",
    duration: "12 min",
    ShareLink: undefined,
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  }
];


const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const [tab, setTab] = useState(activeTab);

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
