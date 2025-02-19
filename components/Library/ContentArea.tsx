import React from "react";
import styles from "@/styles/Library.module.css";
import LibraryCard from "@/ui/LibraryCard";

interface ContentAreaProps {
  activeTab: string;
}

interface LibraryCardProps {
  title?: string;
  channelName?: string;
  channelLogo?: string;
  videoCount?: number;
  onShare?: () => void;
  onClick?: () => void;
  onDownload?: () => void; // Added for notes only
}

const playlistData: LibraryCardProps[] = [
  {
    title: "Git and Github",
    channelName: "OSS Club",
    channelLogo: "",
    videoCount: 23,
    onShare: () => console.log("Shared Git and Github"),
    onClick: () => console.log("Clicked Git and Github"),
  },
  {
    title: "JavaScript Basics",
    channelName: "Code Academy",
    channelLogo: "",
    videoCount: 15,
    onShare: () => console.log("Shared JavaScript Basics"),
    onClick: () => console.log("Clicked JavaScript Basics"),
  },
  {
    title: "React Notes",
    channelName: "OSS Club",
    channelLogo: "",
    videoCount: 10,
    onShare: () => console.log("Shared React Notes"),
    onClick: () => console.log("Clicked React Notes"),
  },
  {
    title: "Next.js Advanced",
    channelName: "Web Notes",
    channelLogo: "",
    videoCount: 7,
    onShare: () => console.log("Shared Next.js Advanced"),
    onClick: () => console.log("Clicked Next.js Advanced"),
  },
  {
    title: "Node.js Backend",
    channelName: "Backend Mastery",
    channelLogo: "",
    videoCount: 9,
    onShare: () => console.log("Shared Node.js Backend"),
    onClick: () => console.log("Clicked Node.js Backend"),
  },
];

const notesData: LibraryCardProps[] = [
  {
    title: "React Notes",
    channelName: "OSS Club",
    channelLogo: "",
    videoCount: 10,
    onDownload: () => console.log("Downloaded React Notes"),
  },
  {
    title: "TypeScript Guide",
    channelName: "Dev Notes",
    channelLogo: "",
    videoCount: 8,
    onDownload: () => console.log("Downloaded TypeScript Guide"),
  },
  {
    title: "Python for Data Science",
    channelName: "AI Notes",
    channelLogo: "",
    videoCount: 12,
    onDownload: () => console.log("Downloaded Python for Data Science"),
  },
  {
    title: "Next.js Advanced",
    channelName: "Web Notes",
    channelLogo: "",
    videoCount: 7,
    onDownload: () => console.log("Downloaded Next.js Advanced"),
  },
  {
    title: "Node.js Backend",
    channelName: "Backend Mastery",
    channelLogo: "",
    videoCount: 9,
    onDownload: () => console.log("Downloaded Node.js Backend"),
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
