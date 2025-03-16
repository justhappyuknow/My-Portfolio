import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { Certificate } from "crypto";
import Image from "next/image";
import Certifications from "@/components/main/Certifications";
// import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <Encryption/>
        <Projects/>
        <Certifications/>
        
      </div>
    </main>
  );
}
