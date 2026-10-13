import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SigmaPage from "./SigmaPage";

export default function SigmaRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <SigmaPage />
      <Footer />
    </div>
  );
}
