"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallPwaCTA() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent || "";
    const ios =
      /iPad|iPhone|iPod/.test(ua) ||
      // iPadOS reports as Mac sometimes
      (ua.includes("Mac") && "ontouchend" in document);

    setIsIos(ios);

    const standalone =
      // iOS Safari
      (window.navigator as any).standalone === true ||
      // Modern browsers
      window.matchMedia("(display-mode: standalone)").matches;

    setIsStandalone(standalone);

    const handler = (e: Event) => {
      // This fires on supported browsers (Chrome/Edge/Android)
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function handleInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    try {
      await deferredPrompt.userChoice;
    } finally {
      setDeferredPrompt(null);
    }
  }

  // If already installed, keep it minimal
  if (isStandalone) {
    return (
      <section className="mt-12 rounded-2xl border border-purple-200 bg-white/70 p-6 text-center shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 font-serif">
          JW Farms App Installed ✅
        </h2>
        <p className="mt-2 text-gray-700">
          You’re all set — open JW Farms from your home screen anytime.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12 rounded-2xl border border-purple-200 bg-white/70 p-6 md:p-8 shadow-sm">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 font-serif">
          Install the JW Farms App
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Add JW Farms to your home screen for quick access, a full-screen app
          experience, and easy browsing.
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3">
        {/* Android / Desktop browsers that support install prompt */}
        {deferredPrompt ? (
          <button
            onClick={handleInstall}
            className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-white font-semibold shadow hover:bg-purple-800 transition"
          >
            Install App
          </button>
        ) : (
          <div className="w-full max-w-xl rounded-xl bg-purple-50 border border-purple-200 p-4 text-left">
            <p className="font-semibold text-purple-900">
              Install options depend on your device:
            </p>

            {isIos ? (
              <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-1">
                <li>Open this site in <b>Safari</b></li>
                <li>Tap the <b>Share</b> icon (square with arrow)</li>
                <li>Tap <b>Add to Home Screen</b></li>
                <li>Tap <b>Add</b></li>
              </ol>
            ) : (
              <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-1">
                <li>Open this site in <b>Chrome</b> or <b>Edge</b></li>
                <li>
                  Tap the menu (<b>⋮</b>) and choose <b>Install app</b> or{" "}
                  <b>Add to Home screen</b>
                </li>
              </ol>
            )}

            <p className="mt-3 text-sm text-gray-600">
              If you don’t see an install option, your browser may not support
              it — but the site still works perfectly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
