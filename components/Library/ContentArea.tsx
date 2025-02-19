import React from "react";
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

const playlistData: LibraryCardProps[] = [
  {
    title: "Git and Github",
    duration: "23 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "JavaScript Basics",
    duration: "15 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "React Notes",
    duration: "10 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Next.js Advanced",
    duration: "7 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Node.js Backend",
    duration: "9 min",
    ShareLink: "https://example.com/share/git-and-github-playlist",
  },
];

const notesData: LibraryCardProps[] = [
  {
    title: "React Notes",
    duration: "10 min",
    DownloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "TypeScript Guide",
    duration:"8 min",
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Python for Data Science",
    duration: "12 min",
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Next.js Advanced",
    duration:"7 min",
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
  {
    title: "Node.js Backend",
    duration: "9 min",
    DownloadLink: "https://example.com/share/git-and-github-playlist",
  },
];

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "playlist":
        return (
          <div className={styles.contentContainer}>
            <h2 className={styles.contentHeading}>Playlists</h2>
            <div className={styles.cardContainer}>
              {playlistData.map((playlist, index) => (
                <LibraryCard key={index} {...playlist} />
              ))}
            </div>
          </div>
        );
      case "notes":
        return (
          <div className={styles.contentContainer}>
            <h2 className={styles.contentHeading}>Notes</h2>
            <div className={styles.cardContainer}>
              {notesData.map((note, index) => (
                <LibraryCard key={index} {...note} />
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
