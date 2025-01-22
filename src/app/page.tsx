import Navbar from "@/components/Navbar";
import Image from "next/image";
import Head from 'next/head';
import HorizontalScroll from "@/components/HorizontalScrool";
import Tabs from "@/components/Tabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>
    <Navbar />
   <HorizontalScroll />
   <Tabs />
   <Footer />
  </div>
  );
}
