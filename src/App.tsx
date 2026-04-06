/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import SpecsGrid from "./components/SpecsGrid";
import ProjectShowcase from "./components/ProjectShowcase";
import QuoteForm from "./components/QuoteForm";
import ServiceArea from "./components/ServiceArea";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
      <Header />
      
      <main className="flex-grow">
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
      </main>

      <Footer />
      
      {/* Back to top button or other global elements could go here */}
    </div>
  );
}
