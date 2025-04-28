"use client";

import React, { useEffect, useRef } from 'react';

const Roadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 动画观察器
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const phases = entry.target.querySelectorAll('.roadmap-phase');
            phases.forEach(phase => {
              (phase as HTMLElement).style.animationPlayState = 'running';
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      animationObserver.observe(sectionRef.current);
    }

    // 直接使用JavaScript实现sticky效果，确保跨浏览器兼容性
    const handleScroll = () => {
      const heading = document.querySelector('.roadmap-heading-wrapper') as HTMLElement;
      const container = document.querySelector('.roadmap-container') as HTMLElement;
      
      if (!heading || !container) return;
      
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      
      // 设置更短的sticky范围，使标题更早恢复滚动
      const stickyTop = 80; // 开始sticky的顶部位置
      const stickyHeight = container.offsetHeight * 0.7; // 只在容器60%的高度内保持sticky
      
      if (containerTop <= stickyTop && containerTop > -(stickyHeight)) {
        // 容器在可视区域内且未超过预设的sticky高度时保持固定
        heading.style.position = 'fixed';
        heading.style.top = `${stickyTop}px`;
        heading.style.width = 'calc(37.5% - 1.5rem)';
      } else if (containerTop > stickyTop) {
        // 容器还未到达顶部
        heading.style.position = 'absolute';
        heading.style.top = '0';
        heading.style.width = '100%';
      } else {
        // 容器已经超过预设的sticky高度，提前结束sticky效果
        heading.style.position = 'absolute';
        heading.style.top = `${stickyHeight}px`; // 设置为预定的高度，大幅提前结束sticky
        heading.style.width = '100%';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化时执行一次
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        animationObserver.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const phases = [
    {
      id: 1,
      title: 'Phase 1',
      subtitle: 'Platform Launch & Core Ecosystem',
      items: [
        'Launch Beta Version with AI-Powered Content Creation Tools',
        'Enable Creator Profiles, Fan Accounts, and Web3 Wallet Integration',
        'Introduce Sphere Points and Basic Engagement Rewards',
        'Open $SPH Token Trading and Liquidity Deployment',
      ],
    },
    {
      id: 2,
      title: 'Phase 2',
      subtitle: 'Creator Monetization & Fan Interaction',
      items: [
        'Enable Real-Time Gifting and Tipping with $SPH',
        'Launch Fan Level System and Loyalty Badges',
        'Host Co-Creation Challenges with Tokenized Rewards',
      ],
    },
    {
      id: 3,
      title: 'Phase 3',
      subtitle: 'Interoperability & Real-World Utility',
      items: [
        'Integrate $SPH with Real-World Merchandise and Event Access',
        'Enable Seamless Content Export Across Multiple Platforms',
        'Expand Multilingual Support and Regional Creator Hubs',
        'Deploy Creator Storefronts and Community Fundraising Tools',
      ],
    },
    {
      id: 4,
      title: 'Phase 4',
      subtitle: 'Governance & Decentralized Expansion',
      items: [
        'Launch DAO Governance System Powered by $SPH Staking',
        'Roll Out User Voting for Feature Proposals and Grant Allocations',
        'Expand Multi-Chain Compatibility and Third-Party Integrations',
        'Open API for Developers and Brand Partnerships',
      ],
    },
  ];

  return (
    <section id="roadmap" className="roadmap-container" ref={sectionRef}>
      <div className="roadmap-content">
        <div className="roadmap-cols">
          {/* 左侧标题 */}
          <div className="roadmap-col-left">
            <div className="roadmap-heading-wrapper">
              <h2 className="roadmap-heading">Roadmap</h2>
            </div>
          </div>
          
          {/* 右侧内容 */}
          <div className="roadmap-col-right">
            {phases.map((phase) => (
              <div key={phase.id} className="roadmap-phase">
                <div className="capsule-subtitle">{phase.title}</div>
                <h3 className="roadmap-phase-title">{phase.subtitle}</h3>
                <ul className="roadmap-list">
                  {phase.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 