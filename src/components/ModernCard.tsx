'use client';

import React from 'react';
import IonIcon from './IonIcon';
import Image from 'next/image';

interface ModernCardProps {
  thumbnailSrc: string;
  thumbnailAlt: string;
  header: string;
  subhead: string;
  mediaSrc: string;
  mediaAlt: string;
  description: string;
  primaryButtonText: string;
  primaryButtonIcon: string;
  secondaryButtonText: string;
  secondaryButtonIcon: string;
}

export default function ModernCard({
  thumbnailSrc,
  thumbnailAlt,
  header,
  subhead,
  mediaSrc,
  mediaAlt,
  description,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
}: ModernCardProps) {
  return (
    <div className="modern-card">
      <h2 className="card-header">{header}</h2>
      <p className="card-subhead">{subhead}</p>
      <div className="thumbnail-container">
        <Image 
          src={thumbnailSrc} 
          alt={thumbnailAlt} 
          className="thumbnail-image"
          width={300}
          height={200}
        />
      </div>
      <div className="media-container">
        <Image 
          src={mediaSrc} 
          alt={mediaAlt} 
          className="media-image"
          width={600}
          height={400}
        />
      </div>
      <div className="card-content">
        <p className="card-description">{description}</p>
        <div className="card-actions">
          <button className="action-button primary">
            <span>{primaryButtonText}</span>
            <IonIcon name={primaryButtonIcon} />
          </button>
          <button className="action-button secondary">
            <span>{secondaryButtonText}</span>
            <IonIcon name={secondaryButtonIcon} />
          </button>
          <div className="action-icons">
            <button className="icon-button">
              <IonIcon name="heart-outline" />
            </button>
            <button className="icon-button">
              <IonIcon name="share-social-outline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 