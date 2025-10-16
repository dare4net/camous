"use client";
import { useEffect } from "react";

export default function PwaRegister() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => {
          console.log('PWA: Service worker registered successfully');
        })
        .catch((error) => {
          console.log('PWA: Service worker registration failed', error);
        });
    }
  }, []);
  return null;
}



