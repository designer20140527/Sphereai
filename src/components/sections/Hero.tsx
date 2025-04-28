import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      {/* 视频背景 */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* 黑色遮罩 */}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-row">
          <h1 className="hero-title">
            Create with AI.
          </h1>
          <div className="hero-logo">
            <Image
              src="/logo-white.png"
              alt="Sphere.ai Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        <div className="hero-text-row">
          <div className="hero-arrow bounce">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="hero-subtitle">
            Connect with Fans. Earn with $SPH.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero; 