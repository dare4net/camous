"use client";
import { useEffect, useState } from "react";
import { Download, X, Smartphone } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showManualPrompt, setShowManualPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isStandaloneDisplay = window.matchMedia('(display-mode: standalone)').matches;
const isIosStandalone =
  (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
const isPwaInstalled = isStandaloneDisplay || isIosStandalone;

    
    if (isPwaInstalled) {
      setIsInstalled(true);
      return;
    }

    // Check if install prompt was already dismissed
    const installPromptDismissed = localStorage.getItem('pwa-install-dismissed');
    
    if (installPromptDismissed) {
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    // Show manual prompt for all browsers after a delay if no automatic prompt
    const showManualPromptTimer = setTimeout(() => {
      setShowManualPrompt(true);
    }, 2000); // Show after 2 seconds

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Cleanup
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(showManualPromptTimer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setShowManualPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  const handleManualInstall = () => {
    setShowManualPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (isInstalled || (!showInstallPrompt && !showManualPrompt)) {
    return null;
  }

  return (
    <div style={{
      position: "fixed",
      bottom: 80, // Above the bottom nav
      left: 16,
      right: 16,
      background: "linear-gradient(135deg, #2196f3 0%, #1e88e5 100%)",
      color: "#fff",
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 8px 32px rgba(33, 150, 243, 0.3)",
      zIndex: 1000,
      animation: "slideUp 0.3s ease-out"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Smartphone size={20} />
          </div>
          
          <div style={{ flex: 1 }}>
            <h3 style={{
              margin: "0 0 4px 0",
              fontSize: 16,
              fontWeight: 600,
              color: "#fff"
            }}>
              Install Camous App
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              opacity: 0.9,
              lineHeight: 1.4
            }}>
              Get quick access and never miss a deal
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {showInstallPrompt && deferredPrompt ? (
            <button
              onClick={handleInstallClick}
              style={{
                background: "#fff",
                color: "#2196f3",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.2s ease"
              }}
            >
              <Download size={16} />
              Install
            </button>
          ) : (
            <button
              onClick={handleManualInstall}
              style={{
                background: "#fff",
                color: "#2196f3",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.2s ease"
              }}
            >
              <Download size={16} />
              How to Install
            </button>
          )}
          
          <button
            onClick={handleDismiss}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: 8,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.7,
              transition: "opacity 0.2s ease"
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
