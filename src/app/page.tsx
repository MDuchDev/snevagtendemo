"use client";

import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '67363bc34951479702fa1c16' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script once the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="w-full h-full">
      <img className="bg-contain" src="/snebg3.JPG" alt="Background" />
    </main>
  );
}

export default LandingPage;