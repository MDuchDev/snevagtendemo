"use client";

import { useEffect } from "react";

const LandingPage = () => {
    useEffect(() => {
        // Dynamically import the script
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/gh/MDuchDev/FlowiseChatEmbed/dist/web.js';
        script.onload = () => {
          // Initialize the Chatbot after the script is loaded
          // Assuming Chatbot is attached to the global window object
          const Chatbot = (window as any).Chatbot;
          if (Chatbot) {
            Chatbot.init({
              chatflowid: "964318ce-81c9-45ca-b30e-9100c59aa404",
              apiHost: "https://flowise-v89v.onrender.com",
              theme: {
                disclaimer: {
                  title: 'Disclaimer',
                  message: 'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
                },
                chatWindow: {
                  titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                  feedback: {
                    color: "#303235",
                  },
                },
              }
            });
          }
        };
        document.body.appendChild(script);
    
        return () => {
          // Clean up the script when the component unmounts
          document.body.removeChild(script);
        };
      }, []);
      
  return (
    <main className="w-full h-full">
      <img className="bg-contain" src="/snebg3.JPG" />

      <div id="chatbot-container">
        
      </div>
    </main>
  );
}

export default LandingPage;