import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Simplify Your Workflow
            </motion.h1>
            <motion.p 
              className="mt-3 text-xl text-indigo-100 sm:mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Boost productivity, reduce complexity, and achieve more with our all-in-one SaaS solution. CloudTask helps teams work smarter, not harder.
            </motion.p>
            <motion.div 
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-accent hover:bg-purple-600 shadow-md hover:shadow-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg">
                Watch Demo
              </Button>
            </motion.div>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center">
                <div className="flex -space-x-1 overflow-hidden">
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-300"></div>
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-300"></div>
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-300"></div>
                </div>
                <div className="ml-3 text-sm font-medium text-indigo-100">
                  <span className="font-semibold">5,000+</span> happy customers
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                className="w-full rounded-lg shadow-xl" 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12" 
                alt="Dashboard screenshot" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
