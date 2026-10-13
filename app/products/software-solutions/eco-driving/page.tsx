import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcoDrivingPage from "./EcoDrivingPage";

export default function EcoDrivingRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <EcoDrivingPage />
      <Footer />
    </div>
  );
}
