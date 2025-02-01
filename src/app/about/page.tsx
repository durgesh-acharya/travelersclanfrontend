// pages/about.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FC } from 'react';
import Image from 'next/image';

const AboutUs: FC = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 text-gray-900">
 

      <main className="container mx-auto py-16 px-6">
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-navbarcolor">Our Story</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            We are a passionate team with years of experience in the travel industry.
            Our goal is to provide exceptional travel experiences for individuals and families
            through carefully crafted packages, personalized services, and memorable stays.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-navbarcolor text-center">Our Values</h2>
          <div className="flex flex-wrap justify-center mt-8 gap-12">
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-navbarcolor">Quality</h3>
                <p className="mt-4 text-base">
                  We prioritize the highest standards of quality in everything we offer,
                  from the accommodations to the tours we design.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-navbarcolor">Customer Satisfaction</h3>
                <p className="mt-4 text-base">
                  Our clients are at the heart of everything we do. We listen to their needs
                  and deliver tailored solutions that exceed expectations.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-navbarcolor">Local Partnerships</h3>
                <p className="mt-4 text-base">
                  We work with local vendors to ensure authentic and immersive experiences
                  that reflect the true essence of each destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-navbarcolor">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center mt-8 gap-12">
            <div className="w-full md:w-1/4 p-4">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image className="w-24 h-24 rounded-full mx-auto" src="/team1.jpg" alt="Team Member" />
                <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                <p className="text-base text-gray-600">CEO & Founder</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image className="w-24 h-24 rounded-full mx-auto" src="/team2.jpg" alt="Team Member" />
                <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
                <p className="text-base text-gray-600">Marketing Director</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image className="w-24 h-24 rounded-full mx-auto" src="/team3.jpg" alt="Team Member" />
                <h3 className="text-xl font-semibold mt-4">Alice Brown</h3>
                <p className="text-base text-gray-600">Lead Travel Planner</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
}

export default AboutUs;
