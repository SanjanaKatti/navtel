import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareSolutionsPage from "./SoftwareSolutionsPage";

export default function SoftwareSolutionsRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <SoftwareSolutionsPage />
      <Footer />
    </div>
  );
}
