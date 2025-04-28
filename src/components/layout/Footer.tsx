import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          {/* 左侧：Logo + 网页名 */}
          <div className="footer-logo-section">
            <div className="footer-logo-container">
              <Link href="/" className="footer-logo-link">
                <div className="footer-logo">
                  <Image
                    src="/logo-white.png"
                    alt="Sphere.ai Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="footer-logo-text">Sphere.ai</span>
              </Link>
              
              {/* 社交图标 */}
              <div className="footer-social-icons">
                <Link href="https://t.me/sphereai" target="_blank" className="footer-icon-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12C0 18.627 5.374 24 12 24C18.626 24 24 18.627 24 12C24 5.373 18.626 0 12 0ZM17.562 8.161L15.621 17.068C15.475 17.715 15.059 17.885 14.521 17.574L11.598 15.394L10.195 16.7399C10.037 16.898 9.904 17.031 9.599 17.031L9.814 14.051L15.316 9.132C15.554 8.922 15.264 8.807 14.95 9.018L8.063 13.297L5.165 12.429C4.534 12.24 4.52 11.777 5.303 11.476L16.725 7.125C17.246 6.954 17.713 7.311 17.562 8.161Z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com/sphereai" target="_blank" className="footer-icon-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9824 9.61788L8.41736 3H3.15942L10.0867 13.0074L3.15942 21H4.71306L10.7867 14.0113L15.5826 21H20.8406L13.6819 10.6218H13.6823ZM11.5607 13.0956L10.9096 12.1489L5.0315 4.20569H7.55126L12.2485 10.566L12.8996 11.5127L19.0759 19.8943H16.5562L11.5607 13.0956Z" />
                  </svg>
                </Link>
                <Link href="https://www.dextools.io/" target="_blank" className="footer-icon-link">
                  <Image src="/dextools.svg" alt="Dextools" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
                </Link>
                <Link href="https://dexscreener.com/" target="_blank" className="footer-icon-link">
                  <Image src="/dexscreener.svg" alt="Dex Screener" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* 右侧：社交媒体链接 - 列排布，无图标 */}
          <div className="footer-social">
            <div className="footer-social-title">Contact Us</div>
            <div className="footer-social-links">
              <Link href="https://t.me/Sphere_ai_Official" target="_blank" className="footer-social-link">
                Telegram
              </Link>
              <Link href="https://x.com/Sphere_ai_COIN" target="_blank" className="footer-social-link">
                Twitter
              </Link>
              <Link href="https://www.dextools.io/" target="_blank" className="footer-social-link">
                Dextools
              </Link>
              <Link href="https://dexscreener.com/" target="_blank" className="footer-social-link">
                Dex Screener
              </Link>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Sphere.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 