import React from 'react';
import IonIcon from './IonIcon';
import Image from 'next/image';

interface ReadyToEatBadgeProps {
  icon: string;
  text: string;
  subText: string;
  image?: string;
}

const ReadyToEatBadge: React.FC<ReadyToEatBadgeProps> = ({ icon, text, subText, image }) => {
  return (
    <div className="rte-badge-container">
      <div className="rte-badge">
        {image ? (
          <Image
            src={`/${image}`}
            alt={text}
            width={120}
            height={120}
            className="rte-badge-image"
          />
        ) : (
          <div className="badge-content">
            <IonIcon name={icon} />
            <span className="badge-text">{text}</span>
            <span className="badge-dot"></span>
          </div>
        )}
      </div>
      <span className="rte-text">{subText}</span>
    </div>
  );
};

export default ReadyToEatBadge; 