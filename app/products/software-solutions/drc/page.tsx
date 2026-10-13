import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DRCPage from "./DRCPage";

export default function DrcRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <DRCPage />
      <Footer />
    </div>
  );
}
