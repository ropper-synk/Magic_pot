import ImageSlider from '../../components/ImageSlider';
import IonIcon from '../../components/IonIcon';
import Link from 'next/link';
import Image from 'next/image'

const sliderImages = [
  '/Back  (1).jpg',
  '/Back  (2).jpg',
  '/Back  (3).jpg',
  '/Back  (4).jpg',
  '/Back  (5).jpg',
];

export default function Company() {
  return (
    <div className="company-page">
      <div className="slider-container">
        <ImageSlider images={sliderImages} interval={6000} />
      </div>
      
      <div className="menu">
        <ul>
          <li className="link">
            <Link href="/" className="link-content">
              <span className="link-icon">
                <IonIcon name="home-outline" />
              </span>
              <span className="link-title">Home</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="company-content">
        <h1 className="company-title">Company : iFTX</h1>
        <div className="company-info">
          <div className="company-section">
            <h2 className="section-title">Founders</h2>
            <div className="founders-container">
              <div className="founder-profile">
                <Image 
                  src="/CEO.jpeg" 
                  alt="Founder 1" 
                  className="founder-image"
                  width={5000}
                  height={50}
                />
                <div className="founder-content">
                  <h3 className="founder-name">Mr.Sabar Shaikh</h3>
                  <p>
                  Mr. Sabar Shaikh is a graduate with a B.E. in Mechanical Engineering and possesses a strong technical 
                  background. In addition to his academic qualifications, he has earned certifications in Dietician Courses, FSSAI Food Safety Supervisor Training, and Culinary Arts, 
                  reflecting his diverse interests and dedication to promoting both technical and nutritional education.</p>
                </div>
              </div>

              <div className="founder-profile">
                <Image 
                  src="/CEO.jpeg" 
                  alt="Founder 2" 
                  className="founder-image"
                  width={200}
                  height={200}
                />
                <div className="founder-content">
                  <h3 className="founder-name">Mr.Sahil Shaikh</h3>
                  <p>
                  Mr. Sahil Shaikh is a graduate with a B.E. in Mechanical Engineering and possesses a 
                  strong technical background. In addition to his academic qualifications, he has earned certifications in
                   Food & Beverage Management, HACCP Certification, and Culinary Arts Certificate Courses,
                   showcasing his versatile skill set and commitment to excellence in both technical and food-related fields.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="company-section">
            <h2 className="section-title">Our Mission</h2>
            <p>
              To provide convenient, safe, and efficient self-heating food solutions 
              that enhance the way people enjoy hot meals anywhere, anytime. We strive 
              to make quality food preparation accessible to everyone.
            </p>
          </div>

          <div className="company-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info">
              <p>
                <IonIcon name="mail-outline" /> Email: shaikhsabar@gmail.com
              </p>
              <p>
                <IonIcon name="call-outline" /> Phone: +91 9881181400
              </p>
              <p>
                <IonIcon name="location-outline" /> Address: YCIS CII Workspace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 