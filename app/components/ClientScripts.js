"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ClientScripts() {
  useEffect(() => {
    // This will run after the component mounts
    const mainScript = document.createElement("script");
    mainScript.src = "/assets/js/main.js";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      // Cleanup
      document.body.removeChild(mainScript);
    };
  }, []);

  return (
    <>
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script
        src="/assets/vendor/glightbox/js/glightbox.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/vendor/swiper/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
