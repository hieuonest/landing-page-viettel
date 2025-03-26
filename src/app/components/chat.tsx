"use client";

import { useEffect } from "react";

export default function Chat() {
  useEffect(() => {
    function loadJsAsync(src: string, callback: (error: any, event: Event) => void) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.async = true;
      script.onload = (event) => callback(null, event);
      document.head.appendChild(script);
    }

    const initChat = () => {
      if (typeof window !== "undefined" && (window as any).embedIpccChat) {
        (window as any).embedIpccChat({
          realmName: "cc",
          domain: "d18c1ea5-f27f-443d-b0dc-1f7376df7cb0",
          url: "https://cc.vietteltelecom.vn/chat-client",
        });
      }
    };

    loadJsAsync("https://cc.vietteltelecom.vn/chat-client/assets/js/IpccChat.js", () => {
      initChat();
    });

    return () => {
    };
  }, []);

  return null;
}
