import Accord from "@/components/Accordion/Accord";
import Build from "@/components/Build/Build";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Partners from "@/components/Partners/Partners";
import Platform from "@/components/Platform/Platform";
import Roadmap from "@/components/Roadmap/Roadmap";
import Works from "@/components/Works/Works";


export default function Home() {
  return (
   <div>
     <Navbar />
     <Hero />
     <Partners />
     <Works />
     <Platform />
     <Build />
     <Roadmap />
     <Accord />
     <Footer />
   </div>
  );
}
