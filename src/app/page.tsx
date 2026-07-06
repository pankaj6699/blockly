import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";
import { Process } from "@/components/sections/process";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Why />
      <Process />
      <Blog />
      <Contact />
    </>
  );
}
