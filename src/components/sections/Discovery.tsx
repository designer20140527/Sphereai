"use client";

import React, { useEffect, useRef, useState } from 'react';

const Discovery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bottomBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 当下边框进入视口时才触发动画
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // 当10%的元素可见时触发
      }
    );

    if (bottomBorderRef.current) {
      observer.observe(bottomBorderRef.current);
    }

    return () => {
      if (bottomBorderRef.current) {
        observer.unobserve(bottomBorderRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="discovery-container">
      <div className="discovery-content">
        <div className={`discovery-borders ${isVisible ? 'active' : ''}`}>
          <div className="discovery-border-top"></div>
          
          <div className="discovery-inner">
            <div className="discovery-flex">
              <div className="discovery-column discovery-column-left">
                <h2 className="discovery-title">AI Discovery Engine</h2>
              </div>
              
              <div className="discovery-column discovery-column-right">
                <div className="discovery-list">
                  <p>Personalized content, AI-matched to your vibe</p>
                  <p>Smart recommendations based on interests and interaction</p>
                  <p>Boosted visibility for rising creators and viral moments</p>
                  <p>Challenge and trend surfacing powered by fan participation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={bottomBorderRef} className="discovery-border-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Discovery; 