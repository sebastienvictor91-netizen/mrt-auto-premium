import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Vehicles } from "@/components/site/Vehicles";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <Vehicles />

      <Trust />

      <About />

      <ContactForm />

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);