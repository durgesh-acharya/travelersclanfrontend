import Footer from "@/components/Footer";
import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import TourPackage from "@/components/TourPackage";


export default function Home() {



  const imageSources = [
    'images/d1.jpg', // First image (for large image)
    'images/d2.jpg', // Second image (for grid)
    'images/d3.jpg', // Third image (for grid)
    'images/d4.jpg', // Fourth image (for grid)
    'images/d5.jpg', // Fifth image (for grid)
  ];
    return (
  
      <div>
    <Navbar />
    <ImageGrid images={imageSources}/>
    <TourPackage
    title="Dubai Highlights | Skyline and Sandscapes"
    duration="5 Days & 4 Nights"
    classification="5 Nights in Dubai"
    description={[
      "Transfer Included",
      "Stay Included",
      "Breakfast Included",
      "Sightseeing Included",
    ]}
    price={45000}
     />
     <Footer />
    </div>
    
    );
  }