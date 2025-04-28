"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "What is Sphere.ai?",
      answer: "Sphere.ai is an AI-powered, Web3-native creator platform where creators can produce content, engage with fans, and monetize through real-time interaction and tokenized rewards using $SPH."
    },
    {
      id: 2,
      question: "What can creators do on Sphere.ai?",
      answer: "Creators can access AI tools to easily produce video, audio, and written content. They can engage directly with fans, receive $SPH tips and gifts, and unlock advanced features through staking."
    },
    {
      id: 3,
      question: "How can fans participate and earn?",
      answer: "Fans earn Sphere Points by interacting with content—watching, liking, sharing, commenting, or joining challenges. These points can be converted into $SPH, unlocking exclusive rewards and community status."
    },
    {
      id: 4,
      question: "What is $SPH used for?",
      answer: "$SPH is the core utility token for Sphere.ai. It can be used for tipping creators, participating in platform events, staking for access boosts, redeeming real-world rewards, and future DAO governance."
    },
    {
      id: 5,
      question: "What's the difference between Sphere Points and $SPH?",
      answer: "Sphere Points are off-chain points earned through engagement and used for in-platform actions. $SPH is an on-chain token with monetary and governance value."
    },
    {
      id: 6,
      question: "Do I need crypto experience to use Sphere.ai?",
      answer: "No. Sphere.ai is designed to be Web2-friendly. Users can earn and use points or tokens through simple interfaces. Wallet setup is optional, and Web3 features are introduced gradually."
    },
    {
      id: 7,
      question: "Can I trade or stake $SPH?",
      answer: "Yes. $SPH will be tradable on supported exchanges and can be staked on-platform to unlock fan or creator privileges, reward multipliers, and governance participation."
    },
    {
      id: 8,
      question: "Is Sphere.ai free to use?",
      answer: "Yes. The platform is free for creators and fans to join. Additional features and perks can be unlocked through engagement or $SPH usage, but no payment is required to get started."
    },
    {
      id: 9,
      question: "How is user privacy handled?",
      answer: "Sphere.ai uses minimal data collection with end-to-end encryption for key interactions. Decentralized identity (DID) features are planned to allow pseudonymous yet verified participation."
    },
    {
      id: 10,
      question: "When will Sphere.ai be live?",
      answer: "The beta launch is planned for Q2 2025, with core AI tools, $SPH token utility, and creator-fan engagement features available from day one. A full rollout will follow in subsequent roadmap phases."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-content">
        <div className="faq-top">
          <div className="faq-heading-wrapper">
            <h2 className="faq-heading">FAQ</h2>
          </div>
          
          <div className="faq-image-wrapper">
            <Image
              src="/image-faq.png"
              alt="Sphere.ai FAQ"
              width={550}
              height={450}
              className="faq-image"
            />
          </div>
        </div>
        
        <div className="faq-bottom">
          <div className="faq-accordion">
            {faqItems.map((item) => (
              <div 
                key={item.id} 
                className={`faq-item ${openItemId === item.id ? 'open' : ''}`}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="faq-number">({item.id < 10 ? '0' + item.id : item.id})</div>
                  <h3>{item.question}</h3>
                  <div className="faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq; 