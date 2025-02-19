import React, { useState } from "react";
import { Share2, Video, Download } from "lucide-react";
import styles from "@/styles/LibraryCard.module.css";
import Image from "next/image";

interface LibraryCardProps {
  title?: string;
  channelName?: string;
  channelLogo?: string;
  videoCount?: number;
  onShare?: () => void;
  onClick?: () => void;
  onDownload?: () => void; // Added for notes
}

const LibraryCard: React.FC<LibraryCardProps> = ({
  title = "Course Title",
  channelName = "Channel Name",
  channelLogo,
  videoCount = 0,
  onShare,
  onClick = () => console.log("Card clicked"),
  onDownload,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={styles.card}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${styles.highlightBorder} ${
          isHovered ? styles.active : ""
        }`}
      />
      <h3 className={`${styles.title} ${isHovered ? styles.titleHovered : ""}`}>
        {title}
      </h3>

      {/* Channel Info */}
      <div className={styles.channelInfo}>
        <div
          className={`${styles.channelLogoContainer} ${
            isHovered ? styles.channelLogoContainerHovered : ""
          }`}
        >
          {channelLogo ? (
            <Image
              src={channelLogo}
              alt={channelName}
              className={styles.channelImage}
            />
          ) : (
            <span className={styles.channelInitials}>
              {getInitials(channelName)}
            </span>
          )}
        </div>
        <span
          className={`${styles.channelName} ${
            isHovered ? styles.channelNameHovered : ""
          }`}
        >
          {channelName}
        </span>
      </div>

      {/* Playlist / Notes Tag */}
      <div className={styles.playlistContainer}>
        <span
          className={`${styles.playlistTag} ${
            isHovered ? styles.playlistTagHovered : ""
          }`}
        >
          {onDownload ? "Notes" : "Playlist"}{" "}
          {/* Conditionally show "Notes" if onDownload exists */}
        </span>
      </div>

      {/* Video Count (Only for Playlists) */}
      {!onDownload && (
        <div
          className={`${styles.videoCountContainer} ${
            isHovered ? styles.videoCountContainerHovered : ""
          }`}
        >
          <Video
            size={18}
            className={`${styles.videoIcon} ${
              isHovered ? styles.videoIconHovered : ""
            }`}
          />
          <span className={styles.videoCountText}>{videoCount} videos</span>
        </div>
      )}

      {/* Share Button for Playlists / Download Button for Notes */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (onDownload) {
            onDownload();
          } else {
            onShare?.();
          }
        }}
        className={`${styles.shareButton} ${
          isHovered ? styles.shareButtonHovered : styles.shareButtonNotHovered
        }`}
      >
        {onDownload ? (
          <Download size={18} className={styles.shareIcon} />
        ) : (
          <Share2 size={18} className={styles.shareIcon} />
        )}
      </button>
    </div>
  );
};

export default LibraryCard;
