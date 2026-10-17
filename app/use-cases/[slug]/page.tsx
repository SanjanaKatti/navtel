import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCaseArticle from "@/components/use-cases/UseCaseArticle";
import { getUseCase, useCases } from "@/lib/use-cases";
import "../use-cases.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) return { title: "Use case | Navtelecom" };
  return {
    title: item.page.metaTitle,
    description: item.page.metaDescription,
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) notFound();

  return (
    <div className="use-cases-page min-h-screen">
      <Navbar />
      <main>
        <UseCaseArticle item={item} />
      </main>
      <Footer />
    </div>
  );
}
