"use client";

import { useState } from "react";

export default function PrintColoringImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-gray-400 p-10 text-center text-gray-700">
        <div className="text-lg font-semibold">Coloring page coming soon</div>
        <div className="mt-2 text-sm">
          Add an SVG at <span className="font-mono">{src}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="mt-6 w-full h-auto"
      onError={() => setFailed(true)}
    />
  );
}
