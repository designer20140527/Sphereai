"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Tokenomics = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const blocks = entry.target.querySelectorAll('.tokenomics-block');
          blocks.forEach(block => {
            (block as HTMLElement).style.opacity = '1';
          });
          
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="tokenomics-container" id="tokenomics">
      <div className="tokenomics-content">
        <h2 className="tokenomics-title">Tokenomics</h2>
        <p className="tokenomics-supply">Total Supply: 1,000,000,000 $SPH</p>

        <div className="tokenomics-image-container">
          <Image 
            src="/image-panel.png" 
            alt="Tokenomics Distribution" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className={`tokenomics-blocks ${isVisible ? 'active' : ''}`} style={{ opacity: 1 }}>
          <div className="tokenomics-block" style={{ opacity: 1 }}>
            <div className="tokenomics-block-inner">
              <h3 className="tokenomics-block-title">Token Utility</h3>
              <ul className="tokenomics-list">
                <li>Fan Engagement</li>
                <li>Creator Monetization</li>
                <li>Staking and Access</li>
                <li>Governance</li>
                <li>Real-World Utility</li>
              </ul>
            </div>
          </div>

          <div className="tokenomics-block" style={{ opacity: 1 }}>
            <div className="tokenomics-block-inner">
              <h3 className="tokenomics-block-title">Token Allocation</h3>
              <ul className="tokenomics-list">
                <li><strong>60%</strong> – Liquidity and Exchanges</li>
                <li><strong>15%</strong> – Community Incentives</li>
                <li><strong>10%</strong> – Developer and Ecosystem Fund</li>
                <li><strong>5%</strong> – Marketing and Strategic Partnerships</li>
                <li><strong>5%</strong> – Team and Advisors</li>
                <li><strong>5%</strong> – DAO Treasury</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 