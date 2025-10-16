"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
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
      zIndex: 9998
    }}>
      <div style={{
        textAlign: "center",
        color: "#fff",
        width: "300px"
      }}>
        <h2 style={{
          fontSize: "32px",
          fontWeight: 700,
          margin: "0 0 32px 0",
          fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
        }}>
          Loading...
        </h2>
        
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
          fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
        }}>
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
