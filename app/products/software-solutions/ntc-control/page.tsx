import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NTCControlPage from "./NTCControlPage";

export default function NtcControlRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <NTCControlPage />
      <Footer />
    </div>
  );
}
