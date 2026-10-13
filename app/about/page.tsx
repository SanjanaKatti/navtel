import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "./AboutPage";

export default function AboutRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
}
