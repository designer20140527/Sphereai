"use client";

import React, { useEffect, useRef, useState } from 'react';

const Integration = () => {
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
    <section ref={sectionRef} className="integration-container">
      <div className="integration-content">
        <div className={`integration-borders ${isVisible ? 'active' : ''}`}>
          <div className="integration-border-top"></div>
          
          <div className="integration-inner">
            <div className="discovery-flex">
              <div className="discovery-column discovery-column-left">
                <h2 className="discovery-title">Real-World Integration</h2>
              </div>
              
              <div className="discovery-column discovery-column-right">
                <div className="discovery-list">
                  <p>Where Web3 meets IRL.</p>
                  <p>Redeem $SPH for physical rewards like merch or event passes</p>
                  <p>Host hybrid meetups and Sphere-backed creator collabs</p>
                  <p>Global access with multi-language support</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={bottomBorderRef} className="integration-border-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Integration; 