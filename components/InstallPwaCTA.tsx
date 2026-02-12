"use client";

import { useEffect, useMemo, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const DISMISS_KEY = "jw_pwa_install_dismissed_until_v1";
const DISMISS_DAYS = 7;

function ShareIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className ?? "h-5 w-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v10" />
      <path d="M8.5 6.5 12 3l3.5 3.5" />
      <path d="M6 10.5V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9.5" />
    </svg>
  );
}

export default function InstallPwaCTA() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // read dismiss-until timestamp (ms)
    try {
      const untilRaw = localStorage.getItem(DISMISS_KEY);
      const until = untilRaw ? Number(untilRaw) : 0;
      setDismissed(Boolean(until && Date.now() < until));
    } catch {}

    const ua = window.navigator.userAgent || "";
    const ios =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes("Mac") && "ontouchend" in document);

    setIsIos(ios);

    const standalone =
      (window.navigator as any).standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches;

    setIsStandalone(standalone);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const shouldShow = useMemo(() => {
    if (isStandalone) return false; // already installed
    if (dismissed) return false; // dismissed (temporarily)
    return true;
  }, [isStandalone, dismissed]);

  async function handleInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    try {
      await deferredPrompt.userChoice;
    } finally {
      setDeferredPrompt(null);
    }
  }

  function dismiss() {
    setDismissed(true);
    try {
      const until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, String(until));
    } catch {}
  }

  if (!shouldShow) return null;

  return (
    <section
      id="install-app"
      className="mt-12 rounded-2xl border border-purple-200 bg-white/70 p-6 md:p-8 shadow-sm"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 font-serif">
          Install the JW Farms App
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Add JW Farms to your home screen for quick access, a full-screen app
          experience, and easy browsing.
        </p>
      </div>

      {isIos ? (
        <div className="mt-6 mx-auto w-full max-w-xl rounded-xl bg-purple-50 border border-purple-200 p-4 text-left">
          <p className="font-semibold text-purple-900">iPhone / iPad (Safari)</p>

          <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-2">
            <li>
              Open this site in <b>Safari</b>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[2px] text-purple-900">
                <ShareIcon className="h-5 w-5" />
              </span>
              <span>
                Tap <b>Share</b>
              </span>
            </li>
            <li>
              Tap <b>Add to Home Screen</b>
            </li>
            <li>
              Tap <b>Add</b>
            </li>
          </ol>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-gray-600">
              Tip: If you don’t see “Add to Home Screen,” you may be in an
              in-app browser. Try opening in Safari.
            </p>
            <button
              onClick={dismiss}
              className="shrink-0 rounded-full border border-purple-300 px-4 py-2 text-sm font-semibold text-purple-900 hover:bg-white transition"
            >
              Got it
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-3">
          {deferredPrompt ? (
            <button
              onClick={handleInstall}
              className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-white font-semibold shadow hover:bg-purple-800 transition"
            >
              Install App
            </button>
          ) : (
            <div className="mx-auto w-full max-w-xl rounded-xl bg-purple-50 border border-purple-200 p-4 text-left">
              <p className="font-semibold text-purple-900">
                Android / Desktop (Chrome or Edge)
              </p>
              <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-1">
                <li>
                  Open this site in <b>Chrome</b> or <b>Edge</b>
                </li>
                <li>
                  Tap the menu (<b>⋮</b>) and choose <b>Install app</b> or{" "}
                  <b>Add to Home screen</b>
                </li>
              </ol>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm text-gray-600">
                  Some browsers don’t show install options — the site still
                  works perfectly.
                </p>
                <button
                  onClick={dismiss}
                  className="shrink-0 rounded-full border border-purple-300 px-4 py-2 text-sm font-semibold text-purple-900 hover:bg-white transition"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
