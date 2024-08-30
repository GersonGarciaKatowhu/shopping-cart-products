import { useState } from 'react';
import './DefaultToImg.css';

function DefaultToImg({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    setHasError(true);
    e.currentTarget.src = '/defaultImg.jpg';
    e.currentTarget.alt = 'Imagen de respaldo';
  };

  return (
    <div className="image-container">
      {hasError ? (
        <div className="fallback-placeholder">Imagen no disponible</div>
      ) : (
        <img
          className="default-img"
          src={src}
          alt={alt}
          onError={handleError}
        />
      )}
    </div>
  );
}

export default DefaultToImg;
