import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CANSpyPage from "./CANSpyPage";

const canMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-can-mono",
});

export default function CanSpyRoute() {
  return (
    <div className={`min-h-screen bg-white font-sans antialiased text-brand-navy ${canMono.variable}`}>
      <Navbar />
      <CANSpyPage />
      <Footer />
    </div>
  );
}
