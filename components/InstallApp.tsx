"use client";

import { useEffect, useState } from "react";

let deferredPrompt: any = null;

export default function InstallApp() {
  const [canInstall, setCanInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(ua);
    setIsIOS(ios);

    const handler = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    setCanInstall(false);
  };

  return (
    <section
      style={{
        margin: "3rem auto",
        maxWidth: 720,
        padding: "2rem",
        borderRadius: 16,
        background: "#f6f2fb",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: 24, marginBottom: 12 }}>
        Install the JW Farms App
      </h2>

      <p style={{ marginBottom: 20, lineHeight: 1.6 }}>
        Get quick access to lavender products, seasonal availability, and
        growing guides — right from your home screen.
      </p>

      {/* Android / Desktop */}
      {canInstall && !isIOS && (
        <button
          onClick={installApp}
          style={{
            background: "#6b4fa3",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: 10,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Install App
        </button>
      )}

      {/* iPhone instructions */}
      {isIOS && !canInstall && (
        <div style={{ fontSize: 15 }}>
          <p>
            On iPhone:
            <br />
            Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>
          </p>
        </div>
      )}
    </section>
  );
}
