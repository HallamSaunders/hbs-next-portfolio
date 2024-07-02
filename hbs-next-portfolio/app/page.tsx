import Image from "next/image";

//Pages and components
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative h-screen bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
        </div>
    </main>
  );
}
