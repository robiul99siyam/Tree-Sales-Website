import { motion } from "motion/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
export default function Global({ text, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="mx-10">
        <Navbar />
      </header>

      {/* Animated Section */}
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="bg-[#797575] flex-grow"
      >
        <h1 className="text-center py-28 text-5xl font-bold">{text}</h1>
      </motion.section>

      {/* Content */}
      <main className="flex-grow">{children}</main>

      <Footer />
      {/* Footer */}
    </div>
  );
}
