"use client";
import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import BottomNav from "./BottomNav";
import SplashScreen from "./SplashScreen";
import LoadingScreen from "./LoadingScreen";
import OnboardingFlow from "./OnboardingFlow";
import PwaInstallPrompt from "./PwaInstallPrompt";
import HomeView from "../views/HomeView";
import MarketView from "../views/MarketView";
import SellView from "../views/SellView";
import ProfileView from "../views/ProfileView";
import JobsView from "../views/JobsView";

type Route = {
  path: string;
  params: Record<string, string>;
};

function parseHash(): Route {
  if (typeof window === "undefined") return { path: "/", params: {} };
  const raw = window.location.hash && window.location.hash.length > 1 ? window.location.hash : "#/";
  const cleaned = raw.startsWith("#") ? raw.slice(1) : raw;
  const [path] = cleaned.split("?");
  const segments = path.split("/").filter(Boolean);
  // Simple patterns: /, /market, /sell, /profile
  if (segments.length === 0) return { path: "/", params: {} };
  if (segments.length === 1) return { path: `/${segments[0]}`, params: {} };
  // Example dynamic: /product/:id (future)
  if (segments[0] === "product" && segments[1]) {
    return { path: "/product/[id]", params: { id: segments[1] } };
  }
  return { path: "/", params: {} };
}

type AppState = "splash" | "onboarding" | "app";

export default function SpaRouter() {
  const [appState, setAppState] = useState<AppState>("splash");
  const [route, setRoute] = useState<Route>(() => parseHash());

  useEffect(() => {
    // Ensure we have a default hash
    if (!window.location.hash) {
      window.location.replace("#/" );
    }
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Handle app flow progression
  const handleSplashComplete = () => setAppState("onboarding");
  const handleOnboardingComplete = () => setAppState("app");

  const View = useMemo(() => {
    switch (route.path) {
      case "/":
        return HomeView;
      case "/market":
        return MarketView;
      case "/sell":
        return SellView;
      case "/jobs":
        return JobsView;
      case "/profile":
        return ProfileView;
      default:
        return HomeView;
    }
  }, [route.path]);

  // Render different screens based on app state
  if (appState === "splash") {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (appState === "onboarding") {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  // Main app
  return (
    <div className="content-wrap">
      <Header />
      <View />
      <div style={{ height: 16 }} />
      <BottomNav />
      <PwaInstallPrompt />
    </div>
  );
}


