"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function MorphingText({
  words = ["Sphere.ai", "$SPH"],
  className,
  ...props
}: {
  words?: string[];
  className?: string;
  [key: string]: any;
}) {
  // 确保至少有两个单词
  const textArray = words.length >= 2 ? words : ["Sphere.ai", "$SPH"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "fadeOut" | "fadeIn">("idle");
  
  // 使用ref跟踪定时器
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // 动画持续时间
  const fadeOutDuration = 600; // 淡出时间
  const fadeInDuration = 600;  // 淡入时间
  const idleDuration = 2500;   // 静止时间

  // 清理所有定时器的函数
  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    // 动画循环函数
    const startAnimationCycle = () => {
      // 第一阶段：文本淡出并模糊
      setAnimationPhase("fadeOut");
      
      // 第二阶段：切换文本并淡入
      timerRef.current = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % textArray.length);
        setAnimationPhase("fadeIn");
        
        // 第三阶段：回到静止状态
        timerRef.current = setTimeout(() => {
          setAnimationPhase("idle");
          
          // 开始下一个循环
          timerRef.current = setTimeout(startAnimationCycle, idleDuration);
        }, fadeInDuration);
      }, fadeOutDuration);
    };
    
    // 启动第一个动画循环
    timerRef.current = setTimeout(startAnimationCycle, idleDuration);
    
    // 清理函数
    return () => {
      clearTimers();
    };
  }, [nextIndex, textArray.length]);
  
  // 根据动画阶段计算样式
  const currentTextStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    opacity: animationPhase === "fadeOut" ? 0 : 1,
    filter: `blur(${animationPhase === "fadeOut" ? 8 : 0}px)`,
    transform: animationPhase === "fadeOut" ? "translateY(-10px)" : "translateY(0)",
    transition: `opacity ${fadeOutDuration}ms ease-in-out, 
                filter ${fadeOutDuration}ms ease-in-out, 
                transform ${fadeOutDuration}ms ease-in-out`
  };

  return (
    <div className={cn("relative inline-block h-full", className)} {...props}>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <span style={currentTextStyle}>
          {textArray[currentIndex]}
        </span>
      </div>
    </div>
  );
}
