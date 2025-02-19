import React, { useState } from "react";
import axios from "axios";
import { Share2, Video, Download, Loader } from "lucide-react";
import styles from "@/styles/LibraryCard.module.css";
import Image from "next/image";
import channelLogo from "@/public/Logo.png";


interface LibraryCardProps {
  title?: string;
  duration?: string;
  ShareLink?: string;
  DownloadLink?: string;
}

const LibraryCard: React.FC<LibraryCardProps> = ({
  title = "Course Title",
  duration = "0 min",
  ShareLink,
  DownloadLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyToClippboard = async () => {
    try {
      await navigator.clipboard.writeText(ShareLink || "");
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  const onShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: "Check out this awesome Video on OSS Club",
          url: ShareLink,
        });
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      copyToClippboard();
    }
  };

  const onDownload = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "/api/download",
        { DownloadLink },
        { responseType: "blob" }
      );

      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = DownloadLink?.split("/").pop() || "Download";
      document.body.appendChild(link);
      link.click();

      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={styles.card}
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
          <Image
            src={channelLogo}
            alt={"OSS Club"}
            className={styles.channelImage}
          />
        </div>
        <span
          className={`${styles.channelName} ${
            isHovered ? styles.channelNameHovered : ""
          }`}
        >
          By OSS Club
        </span>
      </div>

      {/* Playlist / Notes Tag */}
      <div className={styles.playlistContainer}>
        <span
          className={`${styles.playlistTag} ${
            isHovered ? styles.playlistTagHovered : ""
          }`}
        >
          {DownloadLink ? "Notes" : "Videos"}{" "}
        </span>
      </div>

      {!DownloadLink && (
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
          <span className={styles.videoCountText}>{duration}</span>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (DownloadLink) {
            onDownload();
          } else {
            onShare?.();
          }
        }}
        className={`${styles.shareButton} ${
          isHovered ? styles.shareButtonHovered : styles.shareButtonNotHovered
        }`}
      >
        {loading ? (
        <Loader size={18} className={`${styles.shareIcon} animate-spin`} /> // Show loading icon
      ) : DownloadLink ? (
        <Download size={18} className={styles.shareIcon} />
      ) : (
        <Share2 size={18} className={styles.shareIcon} />
      )}
      </button>
    </div>
  );
};

export default LibraryCard;
