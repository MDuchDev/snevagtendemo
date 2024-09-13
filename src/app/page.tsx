"use client";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import { RecentCases } from "@/components/RecentCases";
import { BubbleChat } from "flowise-embed-react";

const LandingPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Experience />
        <Prices />
        <Footer />
        <BubbleChat
          chatflowid="42e580fe-1b37-40f2-9aa4-a77ebc8d1728"
          apiHost="https://flowise-v89v.onrender.com" theme={{
            button: {
              backgroundColor: "#3B81F6",
              size: "large",
              right: 50,
              bottom: 30,
            },
            tooltip: {
              showTooltip: true,
              tooltipMessage: "Prøv vores chatbot 👋",
              tooltipBackgroundColor: "#202335",
              tooltipTextColor: 'white',
              tooltipFontSize: 14,
            },
            chatWindow: {
              showTitle: true,
              title: 'Rexai Chatbot',
              welcomeMessage: 'Hej! hvad kan jeg hjælpe med?',
              poweredByTextColor: "#ffffff",
              errorMessage: "Der skete en fejl i vores ende, det beklager vi meget.",
              botMessage: {
                showAvatar: false,
              },
              userMessage: {
                showAvatar: false,
                backgroundColor: "#3B81F6",
              },
              textInput: {
                placeholder: "Skriv besked",
                sendButtonColor: '#3B81F6',

              },
              footer: {
                textColor: '#303235',
                text: 'Powered by',
                company: 'Rexai',
                companyLink: 'https://rexai.dk',
            }
            },
            
          }} />
      </div>
    </main>
  );
}

export default LandingPage;