import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KnowledgeBasePage from "./KnowledgeBasePage";

export default function KnowledgeBaseRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <KnowledgeBasePage />
      <Footer />
    </div>
  );
}
