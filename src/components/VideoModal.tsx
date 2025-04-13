import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        <video 
          className="video-modal-player"
          src={videoSrc}
          controls
          autoPlay
        />
      </div>
    </div>
  );
};

export default VideoModal; 