// pages/terms.tsx
"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState("terms"); // default tab is "terms"

  const renderContent = () => {
    switch (activeTab) {
      case "terms":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold">Terms and Conditions</h2>
            <p className="text-gray-600">
              These Terms and Conditions govern the use of our website. By
              accessing or using the site, you agree to comply with these terms.
              <br />
              <br />
              1. **Acceptance of Terms:** By accessing this website, you accept
              these terms of use and agree to abide by them.
              <br />
              2. **Modification of Terms:** We may change these terms at any
              time, and it is your responsibility to review them periodically.
              <br />
              3. **User Responsibilities:** You must not use this site for any
              illegal purposes and should respect the rights of others.
              <br />
              4. **Disclaimers:** We make no representations or warranties
              about the accuracy or completeness of the content on this site.
            </p>
          </div>
        );
      case "privacy":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p className="text-gray-600">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your personal information.
              <br />
              <br />
              1. **Information Collection:** We collect personal information
              like name, email, and usage data when you use our services.
              <br />
              2. **Use of Information:** We use your data to improve the user
              experience and provide personalized services.
              <br />
              3. **Data Protection:** We take necessary steps to protect your
              data from unauthorized access or disclosure.
              <br />
              4. **Cookies:** We use cookies to track user activity and enhance
              the user experience.
            </p>
          </div>
        );
      case "copyright":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold">Copyright Policy</h2>
            <p className="text-gray-600">
              This page outlines our copyright policy and how we handle
              infringing content.
              <br />
              <br />
              1. **Copyright Ownership:** All content on this website is
              protected by copyright law unless stated otherwise.
              <br />
              2. **Infringement Claims:** If you believe your copyright has
              been infringed, please contact us with detailed information.
              <br />
              3. **DMCA Compliance:** We comply with the Digital Millennium
              Copyright Act (DMCA) and will remove infringing content upon
              proper notice.
              <br />
              4. **Fair Use:** We allow the use of copyrighted content under
              fair use policies for educational and non-commercial purposes.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex border-b">
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "terms" ? "border-b-2 border-navbarcolor" : ""
          }`}
          onClick={() => setActiveTab("terms")}
        >
          Terms and Conditions
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "privacy" ? "border-b-2 border-navbarcolor" : ""
          }`}
          onClick={() => setActiveTab("privacy")}
        >
          Privacy Policy
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "copyright" ? "border-b-2 border-navbarcolor" : ""
          }`}
          onClick={() => setActiveTab("copyright")}
        >
          Copyright Policy
        </button>
      </div>

      <div className="mt-4">{renderContent()}</div>
    </div>
    <Footer />
    </>
  );
};

export default TermsPage;
