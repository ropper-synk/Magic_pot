


"use client";

import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

export default function ImageSlider({ images, interval = 5000 }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slider-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {images.map((image, index) => (
        <div
          key={image}
          className="slider-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s ease-in-out', // Smooth fade transition
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0, // Ensure current image is on top
          }}
        />
      ))}
    </div>
  );
}














// "use client";

// import { useState, useEffect } from 'react';

// interface ImageSliderProps {
//   images: string[];
//   interval?: number;
// }

// export default function ImageSlider({ images, interval = 5000 }: ImageSliderProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [images.length, interval]);

//   return (
//     <div className="slider-container">
//       {images.map((image, index) => (
//         <div
//           key={image}
//           className="slider-image"
//           style={{
//             backgroundImage: `url('${image}')`,
//             opacity: index === currentImageIndex ? 1 : 0,
//             zIndex: index === currentImageIndex ? 1 : 0
//           }}
//         />
//       ))}
//     </div>
//   );
// } 