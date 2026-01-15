"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Register the service worker
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        // Optional: console.log("SW registered");
      })
      .catch(() => {
        // Optional: console.log("SW registration failed");
      });
  }, []);

  return null;
}
