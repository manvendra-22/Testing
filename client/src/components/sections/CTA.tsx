import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your workflow?</span>
            <span className="block text-indigo-200">Start your free 14-day trial today.</span>
          </h2>
        </motion.div>
        <motion.div 
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-md shadow">
            <Button variant="secondary" size="lg" className="text-primary-600">
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" size="lg" className="bg-primary-700 hover:bg-primary-800 text-white border-primary-700">
              Learn more
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
