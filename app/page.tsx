import Navbar from "@/components/landing/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col bg-[#102020] font-sans dark:bg-black1">
      <Navbar />
    </div>
  );
}
