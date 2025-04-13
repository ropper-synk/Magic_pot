'use client';

import React, { useState } from 'react';
import IonIcon from './IonIcon';
import Image from 'next/image';
import VideoModal from './VideoModal';

interface ModernCardProps {
  mediaSrc: string | string[];
  mediaAlt: string | string[];
  header: string;
  subhead: string;
  description: string;
  primaryButtonText: string;
  primaryButtonIcon: string;
  secondaryButtonText: string;
  secondaryButtonIcon: string;
}

const ModernCard: React.FC<ModernCardProps> = ({
  mediaSrc,
  mediaAlt,
  header,
  subhead,
  description,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const mediaSources = Array.isArray(mediaSrc) ? mediaSrc : [mediaSrc];
  const mediaAlts = Array.isArray(mediaAlt) ? mediaAlt : [mediaAlt];

  const handleWatchDemo = () => {
    setIsVideoOpen(true);
  };

  return (
    <>
      <div className="modern-card">
        <div className="card-media">
          {mediaSources.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={mediaAlts[index]}
              className="media-image"
              style={{ zIndex: index === 0 ? 2 : 1 }}
            />
          ))}
        </div>
        <div className="card-content">
          <h2 className="card-header">{header}</h2>
          <p className="card-subhead">{subhead}</p>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-actions">
          <button className="action-button primary">
            <IonIcon name={primaryButtonIcon} />
            {primaryButtonText}
          </button>
          <button className="action-button secondary" onClick={handleWatchDemo}>
            <IonIcon name={secondaryButtonIcon} />
            {secondaryButtonText}
          </button>
        </div>
      </div>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/vedio.mp4"
      />
    </>
  );
};

export default ModernCard; 