"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start loading progress immediately
    setAnimationComplete(true);
    
    // Start loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, #2196f3 0%, #1e88e5 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    }}>
      {/* Logo Image - Centered */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        flex: 1,
        textAlign: "center"
      }}>
        <Image 
          src="/Camous.png" 
          alt="Camous" 
          width={200} 
          height={200} 
          priority
          style={{ marginBottom: "20px" }}
        />
        
        <p style={{
          fontSize: "18px",
          opacity: 0.9,
          color: "#fff",
          fontFamily: "var(--font-cera), ui-sans-serif, system-ui",
          margin: 0
        }}>
          Campus Marketplace
        </p>
      </div>

      {/* Loading Progress - Bottom (always reserved space) */}
      <div style={{
        width: "300px",
        textAlign: "center",
        paddingBottom: "60px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}>
        {animationComplete && (
          <>
            <div style={{
              width: "100%",
              height: "6px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "3px",
              overflow: "hidden",
              marginBottom: "16px"
            }}>
              <div style={{
                width: `${progress}%`,
                height: "100%",
                background: "#fff",
                borderRadius: "3px",
                transition: "width 0.3s ease"
              }} />
            </div>
            
            <p style={{
              fontSize: "14px",
              opacity: 0.8,
              margin: 0,
              color: "#fff",
              fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
            }}>
              {Math.round(progress)}%
            </p>
          </>
        )}
      </div>
    </div>
  );
}
