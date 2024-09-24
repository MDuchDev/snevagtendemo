"use client";

import { BubbleChat } from "flowise-embed-react";

const LandingPage = () => {
  return (
    <main className="w-full h-full">
      <img className="bg-contain" src="/snebg3.JPG" />
        
        


        <BubbleChat
          chatflowid="964318ce-81c9-45ca-b30e-9100c59aa404"
          apiHost="https://flowise-v89v.onrender.com" theme={{
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
                maxChars: 400,
                maxCharsWarningMessage: "Maksimum 400 tegn.",
                autoFocus: true,
              },
              footer: {
                textColor: '#4d748c',
                text: 'Powered by',
                company: 'Rexai',
                companyLink: 'https://rexai.dk',
              }
            },
          }} />
    </main>
  );
}

export default LandingPage;