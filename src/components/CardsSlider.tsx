'use client';

import React, { useState, useEffect } from 'react';
import IonIcon from './IonIcon';

interface CardsSliderProps {
  children: React.ReactNode;
}

export default function CardsSlider({ children }: CardsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cards-slider">
      <div className="slider-controls">
        <button 
          className="slider-control prev" 
          aria-label="Previous card"
          onClick={goToPrevSlide}
        >
          <IonIcon name="chevron-back-outline" />
        </button>
        <button 
          className="slider-control next" 
          aria-label="Next card"
          onClick={goToNextSlide}
        >
          <IonIcon name="chevron-forward-outline" />
        </button>
      </div>
      
      <div className="cards-container">
        {React.Children.map(children, (child, index) => (
          <div 
            className={`modern-card ${index === currentSlide ? 'active' : 'hidden'}`}
            key={index}
            style={{ 
              display: index === currentSlide ? 'block' : 'none',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            {child}
          </div>
        ))}
      </div>
      
      <div className="slider-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
} 