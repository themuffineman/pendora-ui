import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col font-sans dark:bg-foreground">
      <Navbar />
      <Hero />
    </div>
  );
}
