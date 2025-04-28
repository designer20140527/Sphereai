"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { MorphingText } from "@/components/magicui/morphing-text";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const morphTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 检测是否为移动端
    const checkMobile = () => {
      const mobile = window.innerWidth <= 640;
      setIsMobile(mobile);
      
      // 如果是移动端，处理MorphingText组件，减缓动画速度
      if (mobile && morphTextRef.current) {
        // 尝试找到动画相关节点
        const morphTextNode = morphTextRef.current;
        
        // 添加特定类名以便CSS能更精确地针对这个实例
        morphTextNode.classList.add('mobile-morphing-text');
      }
    };
    
    // 初始化检测
    checkMobile();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    
    if (window.scrollY > 10) {
      setIsScrolled(true);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <nav className="nav">
          <Link href="#home" className="nav-link">
            Home
          </Link>
          <Link href="#features" className="nav-link">
            Features
          </Link>
          <Link href="#tokenomics" className="nav-link">
            Tokenomics
          </Link>
          <Link href="#roadmap" className="nav-link">
            Roadmap
          </Link>
        </nav>
        
        <div className="logo-center">
          <Link href="/" className="logo-link">
            <div className="text-center w-[120px] h-[40px] flex items-center justify-center" ref={morphTextRef}>
              <MorphingText 
                words={isMobile ? ["Sphere.ai"] : ["Sphere.ai", "$SPH"]} 
                className="logo-text-animation"
                duration={1500}
                interval={3000}
                isMobile={isMobile}
              />
            </div>
          </Link>
        </div>
        
        <div className="header-buttons">
          <Link 
            href="https://t.me/Sphere_ai_Official" 
            target="_blank" 
            className="btn btn-outline btn-animated"
          >
            <span className="btn-text">Telegram</span>
          </Link>
          <Link 
            href="https://x.com/Sphere_ai_COIN" 
            target="_blank" 
            className="btn btn-white btn-animated"
          >
            <span className="btn-text">Twitter</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 