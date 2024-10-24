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
                button: {
                  backgroundColor: "#132b40",
                  size: "large",
                  right: 50,
                  bottom: 30,
                },
                tooltip: {
                  tooltipBackgroundColor: "#ffffff",
                  tooltipTextColor: "black",
                  tooltipFontSize: 14,
                },
                chatWindow: {
                  height: 640,
                  width: 440,
                  showTitle: true,
                  title: 'Snevagten chatbot',
                  welcomeMessage: "Hej og velkommen til Snevagten.dk. Som AI-assistent er jeg her udelukkende for at hjælpe dig, så spørg bare løs.",
                  errorMessage: "Der skete en fejl i vores ende, det beklager vi meget.",
                  botMessage: {
                    showAvatar: true,
                    avatarSrc: "/sne-logo.jpg",
                  },
                  titleAvatarSrc: '/sne-logo.jpg',
                  feedback: {
                    color: "#303235",
                  },
                  userMessage: {
                    showAvatar: true,
                    backgroundColor: "#3B81F6",
                    avatarSrc: "/user-logo3.jpg",
                  },
                  textInput: {
                    placeholder: "Skriv besked",
                    sendButtonColor: '#4d748c',
                    sendMessageSound: true,
                    receiveMessageSound: true,
                    maxChars: 300,
                    maxCharsWarningMessage: "Maksimum 300 tegn.",
                    autoFocus: true,
                  },
                  footer: {
                    textColor: '#4d748c',
                    text: 'Powered by',
                    company: 'Rexai',
                    companyLink: 'https://rexai.dk',
                  }
                },
                disclaimer: {
                  title: 'Disclaimer',
                  message: 'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
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