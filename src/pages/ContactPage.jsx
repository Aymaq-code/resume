import { useState } from "react";

import Footer from "../layouts/Footer";
import Navigation from "../layouts/Header";

import Hero from "../components/pages/contact/Hero";
import SendMessageForm from "../components/pages/contact/SendMessageForm";
import ContactInfo from "../components/pages/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <Navigation />

      <Hero />

      <div className="container">
        <div className="contactPage__contents">
          {/* Left Side - Form */}
          <SendMessageForm />

          {/* Right Side - Contact Info */}
          <ContactInfo />
        </div>
      </div>

      <Footer />
    </main>
  );
}
