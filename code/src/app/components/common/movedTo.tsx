"use client";

import { useEffect } from "react";

/* The chatbot pages moved to chatbot0.smalltech.in. GitHub Pages cannot send a
   server redirect, so this page forwards in the browser, keeping the query
   string (old ?industry= links) and hash. */
export default function MovedTo({ url, label }: { url: string; label: string }) {
  useEffect(() => {
    window.location.replace(url + window.location.search + window.location.hash);
  }, [url]);

  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <p>
        {label} has moved to <a href={url} className="underline">{url.replace("https://", "")}</a>.
      </p>
    </main>
  );
}
