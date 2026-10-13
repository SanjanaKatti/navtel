import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqPage from "./FaqPage";

export default function FaqRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <FaqPage />
      <Footer />
    </div>
  );
}
