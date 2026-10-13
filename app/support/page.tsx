import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportPage from "./SupportPage";

export default function SupportRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <SupportPage />
      <Footer />
    </div>
  );
}
