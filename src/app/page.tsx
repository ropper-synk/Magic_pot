import React from 'react';
import IonIcon from '../components/IonIcon';
import ImageSlider from '../components/ImageSlider';
import ReadyToEatBadge from '../components/ReadyToEatBadge';
import Link from 'next/link';
import Image from 'next/image';

const sliderImages = [
  '/Back  (1).jpg',
  '/Back  (2).jpg',
  '/Back  (3).jpg',
  '/Back  (4).jpg',
  '/Back  (5).jpg',
];

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <ImageSlider images={sliderImages} interval={6000} />
        <div className="hero-content">
          <h1 className="hero-title">Maggic Pot</h1>
          <p className="hero-description">
            Experience the future of cooking with our revolutionary self-heating technology.
            Enjoy hot, delicious meals anywhere, anytime!
          </p>
          <Link href="#features" className="hero-cta">
            Discover More
          </Link>
        </div>
      </div>

      <nav className="menu">
        <ul>
          <li className="link">
            <Link href="/" className="link-content">
              <span className="link-icon">
                <IonIcon name="home-outline" />
              </span>
              <span className="link-title">Home</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/about" className="link-content">
              <span className="link-icon">
                <IonIcon name="information-circle-outline" />
              </span>
              <span className="link-title">About Us</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/products" className="link-content">
              <span className="link-icon">
                <IonIcon name="cube-outline" />
              </span>
              <span className="link-title">Products</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/owner" className="link-content">
              <span className="link-icon">
                <IonIcon name="business-outline" />
              </span>
              <span className="link-title">Company</span>
            </Link>
          </li>
         
          <li className="link">
            <Link href="/videos" className="link-content">
              <span className="link-icon">
                <IonIcon name="videocam-outline" />
              </span>
              <span className="link-title">Videos</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/payment" className="link-content">
              <span className="link-icon">
                <IonIcon name="cart-outline" />
              </span>
              <span className="link-title">Buy Now</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="title-container">
        <div className="title-with-icon">
          <h1 className="magic-title">Maggic Pot</h1>
          <div className="soup-icon">
            <div className="bowl">
              <div className="spoon"></div>
              <div className="steam"></div>
              <div className="steam"></div>
              <div className="steam"></div>
            </div>
          </div>
        </div>
        <p className="welcome-text">
          Welcome to the future of cooking – introducing the game-changing Magic Pot! 
          The ultimate way to enjoy hot, ready-to-eat meals in minutes, wherever you are. 
          Say goodbye to complicated cooking and hello to effortless, energetic meals 
          that are as quick as they are delicious!
        </p>
        <div className="tech-cards-grid">
          <div className="tech-card">
            <div className="tech-icon">
              <IonIcon name="thermometer-outline" />
            </div>
            <h2 className="tech-title">Self-Heating Technology</h2>
            <p className="tech-description">
              Magic Pack heats up to 
              <span className="temperature-highlight">80°C</span> for perfect cooking, 
              while staying safe under 
              <span className="temperature-highlight">130°C</span>
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <IonIcon name="flash-outline" />
            </div>
            <h2 className="tech-title">Power Independent</h2>
            <p className="tech-description">
              <span className="temperature-highlight">No external power needed</span> – 
              <span className="temperature-highlight">Doesn't rely on electricity or gas</span>
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <IonIcon name="shield-checkmark-outline" />
            </div>
            <h2 className="tech-title">User-friendly</h2>
            <p className="tech-description">
              <span className="temperature-highlight">Easy to operate</span> – 
              <span className="temperature-highlight">even for beginners</span>
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <IonIcon name="time-outline" />
            </div>
            <h2 className="tech-title">Time-saving</h2>
            <p className="tech-description">
              <span className="temperature-highlight">Heats up quickly</span> – 
              <span className="temperature-highlight">can cook food faster in some cases</span>
            </p>
          </div>
        </div>
      </div>

      <div className="badge-section">
        <div className="badge-content">
          <h2 className="badge-section-title">Food Types</h2>
          <div className="badges-grid">
            <ReadyToEatBadge 
              icon="timer-outline" 
              text="Egg" 
              subText="Egg"
              image="Egg.jpg"
            />
            <ReadyToEatBadge 
              icon="flame-outline" 
              text="Noodle" 
              subText="Noodle"
              image="Noodle.jpg"
            />
            <ReadyToEatBadge 
              icon="restaurant-outline" 
              text="Biryani" 
              subText="Biryani"
              image="Biryani.jpg"
            />
            <ReadyToEatBadge 
              icon="shield-checkmark-outline" 
              text="Poohe" 
              subText="Poohe"
              image="Poohe.jpg"
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Maggic Pot</h3>
            <p className="footer-text">
              Revolutionizing the way people enjoy hot meals on the go. Our self-heating technology 
              brings convenience and innovation to your daily life, making it possible to enjoy 
              warm, delicious food anywhere, anytime.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <IonIcon name="logo-facebook" />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <IonIcon name="logo-twitter" />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <IonIcon name="logo-instagram" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <IonIcon name="logo-linkedin" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link href="#" className="footer-link">How It Works</Link>
              <Link href="#" className="footer-link">Safety Information</Link>
              <Link href="#" className="footer-link">Product Guide</Link>
              <Link href="#" className="footer-link">FAQs</Link>
              <Link href="#" className="footer-link">Contact Support</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-links">
              <a href="mailto:info@magicpot.com" className="footer-link">
                <IonIcon name="mail-outline" /> shaikhsabar@gmail.com
              </a>
              <a href="tel:+919881181400" className="footer-link">
                <IonIcon name="call-outline" /> +91 9881181400
              </a>
              <a href="#" className="footer-link">
                <IonIcon name="location-outline" /> YCIS CII Workspace
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            © 2024 Magic Pot. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </>
  );
}
