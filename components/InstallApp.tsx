"use client";

import { useEffect, useMemo, useState } from "react";

let deferredPrompt: any = null;

function isStandaloneMode() {
  // iOS standalone
  // @ts-ignore
  const iosStandalone = typeof window !== "undefined" && window.navigator.standalone;
  // Other browsers
  const displayModeStandalone =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(display-mode: standalone)").matches;

  return Boolean(iosStandalone || displayModeStandalone);
}

export default function InstallApp() {
  const [canInstall, setCanInstall] = useState(false);
  const [platform, setPlatform] = useState<
    "ios" | "android_or_desktop_chrome" | "desktop_safari_or_other" | "unknown"
  >("unknown");
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setInstalled(isStandaloneMode());

    const ua = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isSafari = /safari/.test(ua) && !/chrome|crios|edg|opr/.test(ua);

    if (isIOS) setPlatform("ios");
    else if (!isSafari) setPlatform("android_or_desktop_chrome");
    else setPlatform("desktop_safari_or_other");

    const handler = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // If user installs, hide the banner
    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setCanInstall(false);
      deferredPrompt = null;
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const shouldShow = useMemo(() => {
    if (installed) return false;

    // Show on iPhone (instructions) OR when install prompt is available (Chrome/Edge)
    if (platform === "ios") return true;
    if (platform === "android_or_desktop_chrome" && canInstall) return true;

    // Hide on desktop Safari or other browsers where install won't work
    return false;
  }, [platform, canInstall, installed]);

  const installApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    setCanInstall(false);
  };

  if (!shouldShow) return null;

  return (
    <section
      style={{
        margin: "16px auto",
        maxWidth: 980,
        padding: "14px 16px",
        borderRadius: 14,
        background: "rgba(246,242,251,0.9)",
        border: "1px solid rgba(107,79,163,0.18)",
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Install JW Farms
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.4, opacity: 0.9 }}>
          {platform === "ios"
            ? "On iPhone: tap Share → Add to Home Screen."
            : "Install the app for quick access from your desktop."}
        </div>
      </div>

      {platform === "android_or_desktop_chrome" && canInstall ? (
        <button
          onClick={installApp}
          style={{
            background: "#6b4fa3",
            color: "white",
            border: "none",
            padding: "10px 14px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Install
        </button>
      ) : null}
    </section>
  );
}
