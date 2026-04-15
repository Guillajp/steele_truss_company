import Hero from "../components/Hero";
import SpecsGrid from "../components/SpecsGrid";
import ProjectShowcase from "../components/ProjectShowcase";
import QuoteForm from "../components/QuoteForm";
import ServiceArea from "../components/ServiceArea";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SpecsGrid />
      </motion.div>

      <ProjectShowcase />
      
      <QuoteForm />
      
      <ServiceArea />
    </>
  );
}
