"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Welcome = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  
  // 确保在移动设备上也能运行动画
  useEffect(() => {
    const trackElement = trackRef.current;
    if (trackElement) {
      // 检测是否是移动设备
      const isMobile = window.innerWidth <= 1024;
      if (isMobile) {
        // 确保动画正常运行
        trackElement.style.animationPlayState = 'running';
      }
    }
  }, []);

  return (
    <section className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-heading-container">
          <h2 className="welcome-heading">
            Welcome to<br />
            <span>Sphere.ai</span>
          </h2>
        </div>
        
        <div className="marquee-outer-container">
          <div className="marquee-container">
            <div className="marquee-track" ref={trackRef}>
              {/* 第一组图片 */}
              <div className="marquee-item small-gap">
                <div className="image-wrapper">
                  <Image src="/image-1.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item large-gap">
                <div className="image-wrapper">
                  <Image src="/image-2.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item small-gap">
                <div className="image-wrapper">
                  <Image src="/image-3.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item large-gap">
                <div className="image-wrapper">
                  <Image src="/image-4.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item small-gap">
                <div className="image-wrapper">
                  <Image src="/image-5.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item large-gap">
                <div className="image-wrapper">
                  <Image src="/image-6.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              
              {/* 复制一组用于无缝滚动 */}
              <div className="marquee-item small-gap">
                <div className="image-wrapper">
                  <Image src="/image-1.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item large-gap">
                <div className="image-wrapper">
                  <Image src="/image-2.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item small-gap">
                <div className="image-wrapper">
                  <Image src="/image-3.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item large-gap">
                <div className="image-wrapper">
                  <Image src="/image-4.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item small-gap">
                <div className="image-wrapper">
                  <Image src="/image-5.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
              <div className="marquee-item large-gap">
                <div className="image-wrapper">
                  <Image src="/image-6.png" alt="Creator" width={400} height={400} className="marquee-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="welcome-text-container">
          <div className="welcome-text">
            <p>
              The next-gen AI-powered creator platform where you can create, collaborate, and earn seamlessly. 
              Sphere.ai transforms the way creators interact with fans—turning every like, gift, and remix into tangible value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome; 