"use client";
import { useEffect } from "react";

const AnchorAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.text = `window.googletag = window.googletag || { cmd: [] };
      let anchorSlot;

      googletag.cmd.push(() => {
        anchorSlot = googletag.defineOutOfPageSlot(
          "/22989537819/AT_ANCHOR",googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
        );
        if (anchorSlot) {
          anchorSlot.setTargeting("test", "anchor").addService(googletag.pubads());
        }

        googletag.enableServices();

        googletag.display(anchorSlot);
      });`;

    script.setAttribute("type", "module");

    document.head.appendChild(script);
  }, []);

  return <></>;
};

export default AnchorAd;
