import Hero from "@/components/landing/Hero";
import AddPet from "@/components/landing/AddPet";
import Features from "@/components/landing/Features";
import Galeri from "@/components/landing/Galeri";
import Artikel from "@/components/landing/Artikel";

export default function Home() {
  return (
    <div id="Home" className="relative h-fit overflow-hidden">
      <Hero />
      <AddPet />
      <Features />
      <Galeri />
      <Artikel />
    </div>
  );
}
