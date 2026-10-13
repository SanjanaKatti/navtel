import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NtcConfiguratorPage from "./NtcConfiguratorPage";

export default function NtcConfiguratorRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <NtcConfiguratorPage />
      <Footer />
    </div>
  );
}
