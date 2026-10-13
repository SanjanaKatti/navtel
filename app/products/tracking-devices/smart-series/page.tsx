import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeriesPage from "@/components/series/SeriesPage";
import { smartSeries } from "@/components/series/seriesData";

export default function SmartSeriesRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <SeriesPage series={smartSeries} />
      <Footer />
    </div>
  );
}
