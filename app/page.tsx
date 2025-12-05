import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col font-sans dark:bg-foreground">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
