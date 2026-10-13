import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WarrantyPage from "./WarrantyPage";

export default function WarrantyRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <WarrantyPage />
      <Footer />
    </div>
  );
}
