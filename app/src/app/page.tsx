import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Navbar />
      <Hero />
    </main>
  );
}
