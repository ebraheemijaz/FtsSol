"use client";

import React, { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      // Remove preloader once content is loaded
      const handleLoad = () => {
        preloader.remove();
      };

      // Check if document is already loaded
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        // Cleanup listener
        return () => window.removeEventListener("load", handleLoad);
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return <div id="preloader"></div>;
}
