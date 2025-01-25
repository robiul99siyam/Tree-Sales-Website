import { motion } from "framer-motion";
import Benner from "../components/Benner/Benner";
import SecoundBenner from "../components/Benner/SecoundBenner";
import ThirdBanner from "../components/Benner/ThirdBanner";
import Card from "../components/Card/Card";
import DealyProduct from "../components/Card/DealyProduct";
import ProductDescription from "../components/details/ProductDescription";
import Achive from "../components/footer/Achive";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Support from "../components/support/Support";

export default function Routers() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-10 font-serif"
      >
        <Navbar />
        {/* Scroll Animation for Benner */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <Benner />
        </motion.div>

        {/* Scroll Animation for SecoundBenner */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <SecoundBenner />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Card />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Support />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <ThirdBanner />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <DealyProduct />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Achive />
        </motion.div>
        <ProductDescription />
        <Footer />
      </motion.div>
    </>
  );
}
