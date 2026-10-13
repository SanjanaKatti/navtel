import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComplexEventsPage from "./ComplexEventsPage";

export default function ComplexEventsRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <ComplexEventsPage />
      <Footer />
    </div>
  );
}
