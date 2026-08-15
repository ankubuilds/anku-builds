import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Stack />
       <About />
       <Contact />
       <Footer />
    </main>
  );
}
