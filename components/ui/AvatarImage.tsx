"use client";

import { useState } from "react";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function AvatarImage({
  src,
  name,
  size = 128,
}: {
  src: string;
  name: string;
  size?: number;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gold-400/60 bg-ink-800"
      style={{ width: size, height: size }}
    >
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <span
          className="font-display font-semibold text-gold-400"
          style={{ fontSize: size * 0.36 }}
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
