import React from 'react';
import image1 from '../assets/2678259_183.jpg';
import image2 from '../assets/10917697_19119935.jpg';
import image3 from '../assets/1127071_1544.jpg';
import image4 from '../assets/3438008_61350.jpg';
import image5 from '../assets/9550722_221.jpg';
import image6 from '../assets/4.png';
import image7 from '../assets/1165145_1582.jpg';
import image8 from '../assets/1.png';
import image9 from '../assets/1153883_OR7V861.jpg';
import image10 from '../assets/6574535_3346004.jpg';
import image11 from '../assets/1385922_OYHIU70.jpg';
import image12 from '../assets/1256796_OUGNKR0.jpg';
import image13 from '../assets/8668886_3934921.jpg';
import image14 from '../assets/16253072_tp13-ni-06d-namecard.jpg';
import image15 from '../assets/6630278_8.jpg';

const styles = {
  section1: { textAlign: 'center', backgroundColor: '#fff', padding: '50px 0' },
  section: { padding: '50px 0' },
  sheet: { margin: '0 auto', maxWidth: '1140px' },
  heading: { 
    fontFamily: 'Montserrat, sans-serif', 
    fontSize: '3em', 
    fontWeight: 'bold',
    marginBottom: '0.5em' 
  },
  subheading: { 
    fontFamily: 'Montserrat, sans-serif', 
    fontSize: '1em' 
  },
  gallery: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', 
    gap: '10px',
  },
  galleryItem: { 
    position: 'relative', 
    overflow: 'hidden',
    width: '100%',
    height: '250px',
    transition: 'transform 0.3s ease-in-out' 
  },
  galleryItemHover: {
    transform: 'scale(1.1)'
  },
  backImage: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' 
  },
 
};

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  console.log('Images array:', images);

  const handlePageUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section style={styles.section1}>
        <div style={styles.sheet}>
          <div className="u-clearfix u-sheet u-sheet-1">
            <h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1" style={styles.heading}>Our Gallery</h2>
            <p className="u-custom-font u-font-montserrat u-text u-text-2" style={styles.subheading}>Some text</p>
          </div>
        </div>
      </section>
      <section style={styles.section}>
        <div style={styles.sheet}>
          <div style={styles.gallery}>
            {images.map((src, index) => (
              <div 
                style={styles.galleryItem} 
                key={index}
                onMouseEnter={(e) => e.currentTarget.style.transform = styles.galleryItemHover.transform}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={src} alt={`Gallery Image ${index + 1}`} style={styles.backImage} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div 
        style={styles.pageUpButton} 
        onClick={handlePageUpClick}
      >
        ↑
      </div>
    </div>
  );
};

export default Gallery;
