import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingDevicesPage from "./tracking-devices/TrackingDevicesPage";

export default function ProductsRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <TrackingDevicesPage />
      <Footer />
    </div>
  );
}
