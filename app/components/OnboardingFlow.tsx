"use client";
import { useState } from "react";
import { ChevronRight, Users, ShoppingBag, Shield, Star } from "lucide-react";

const steps = [
  {
    icon: <Users size={48} />,
    title: "Connect with Your Campus",
    description: "Buy and sell with fellow students from your university. Build trust through verified profiles and reviews."
  },
  {
    icon: <ShoppingBag size={48} />,
    title: "Easy Marketplace",
    description: "Browse thousands of items from textbooks to electronics. Find exactly what you need at great prices."
  },
  {
    icon: <Shield size={48} />,
    title: "Safe & Secure",
    description: "All transactions are protected. Meet safely on campus or use our secure delivery options."
  },
  {
    icon: <Star size={48} />,
    title: "Start Trading",
    description: "You're all set! Start exploring the marketplace and connect with your campus community."
  }
];

export default function OnboardingFlow({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      zIndex: 9997
    }}>
      {/* Header */}
      <div style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          width: "40px",
          height: "4px",
          background: "#e5e7eb",
          borderRadius: "2px"
        }}>
          <div style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`,
            height: "100%",
            background: "#2196f3",
            borderRadius: "2px",
            transition: "width 0.3s ease"
          }} />
        </div>
        <button
          onClick={skipOnboarding}
          style={{
            background: "none",
            border: "none",
            color: "#6b7280",
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
          }}
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <div style={{
          color: "#2196f3",
          marginBottom: "32px"
        }}>
          {steps[currentStep].icon}
        </div>
        
        <h1 style={{
          fontSize: "28px",
          fontWeight: 700,
          margin: "0 0 16px 0",
          color: "#111827",
          fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
        }}>
          {steps[currentStep].title}
        </h1>
        
        <p style={{
          fontSize: "16px",
          color: "#6b7280",
          lineHeight: "1.6",
          maxWidth: "320px",
          margin: 0,
          fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
        }}>
          {steps[currentStep].description}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          display: "flex",
          gap: "8px"
        }}>
          {steps.map((_, index) => (
            <div
              key={index}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: index === currentStep ? "#2196f3" : "#e5e7eb",
                transition: "background 0.3s ease"
              }}
            />
          ))}
        </div>
        
        <button
          onClick={nextStep}
          style={{
            background: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-cera), ui-sans-serif, system-ui"
          }}
        >
          {currentStep === steps.length - 1 ? "Get Started" : "Next"}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
