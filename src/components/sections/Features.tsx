"use client";

import { useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 当部分进入视窗时，启动动画
            const featureItems = entry.target.querySelectorAll('.feature-item');
            featureItems.forEach(item => {
              (item as HTMLElement).style.animationPlayState = 'running';
            });
          }
        });
      },
      { threshold: 0.2 } // 当20%的部分可见时触发
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

  return (
    <section className="features-container" id="features" ref={sectionRef}>
      <div className="features-content">
        <div className="features-row">
          <div className="features-left">
            <div className="capsule-subtitle">For Creators</div>
            <h2 className="section-title">
              AI Tools to Unlock Your Creative Flow
            </h2>
            <p className="section-text">
              No code. No editing stress. Just ideas and execution.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <h3>AI-Powered Content Studio</h3>
                <p>Video, music, posts—generate and polish your content in one place using our AI suite.</p>
              </div>
              <div className="feature-item">
                <h3>Smart Video & Audio Editing</h3>
                <p>Auto-cut, transition, subtitle, and soundtrack—all done in seconds.</p>
              </div>
              <div className="feature-item">
                <h3>Prompt-to-Content Generation</h3>
                <p>Feed your ideas, get entire video scripts, podcast episodes, or meme drafts powered by LLMs.</p>
              </div>
              <div className="feature-item">
                <h3>Tokenized Fanbase</h3>
                <p>Reward fans, unlock exclusive content, and grow your community through Sphere's built-in fan engagement system.</p>
              </div>
            </div>
          </div>
          <div className="features-right"></div>
        </div>

        <div className="features-row">
          <div className="features-left"></div>
          <div className="features-right">
            <div className="capsule-subtitle">For Fans</div>
            <h2 className="section-title">
              Be More Than a Viewer
            </h2>
            <p className="section-text">
              Engage. Earn. Influence.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <h3>Send Live Gifts & Tips with $SPH</h3>
                <p>Support creators instantly and unlock VIP access.</p>
              </div>
              <div className="feature-item">
                <h3>Earn Sphere Points</h3>
                <p>Watch, like, share—every action earns rewards. Convert to perks, merch, or $SPH.</p>
              </div>
              <div className="feature-item">
                <h3>Join Challenges & Collaborations</h3>
                <p>Remix content, vote on campaigns, win tokens.</p>
              </div>
              <div className="feature-item">
                <h3>Level Up as a Superfan</h3>
                <p>Gain badges, fan tier perks, and exclusive behind-the-scenes content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 