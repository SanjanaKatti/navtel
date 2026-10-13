import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingDevicesPage from "./TrackingDevicesPage";

export default function TrackingDevicesRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <TrackingDevicesPage />
      <Footer />
    </div>
  );
}
