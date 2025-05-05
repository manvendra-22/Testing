import { motion } from "framer-motion";
import { Layout, BarChart3, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Powerful dashboard designed for productivity</h2>
            <p className="mt-4 text-lg text-gray-600">Get a comprehensive view of your projects, tasks, and team performance at a glance. Our intuitive dashboard puts everything you need right at your fingertips.</p>
            
            <dl className="mt-10 space-y-6">
              <motion.div 
                className="flex"
                variants={fadeInVariants}
                custom={1}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                    <Layout className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-gray-900">Customizable Widgets</dt>
                  <dd className="mt-1 text-gray-600">Create a personalized view with drag-and-drop widgets that display the information most important to you.</dd>
                </div>
              </motion.div>

              <motion.div 
                className="flex"
                variants={fadeInVariants}
                custom={2}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-gray-900">Real-time Analytics</dt>
                  <dd className="mt-1 text-gray-600">Monitor performance metrics and progress in real-time with beautiful, easy-to-understand charts and graphs.</dd>
                </div>
              </motion.div>

              <motion.div 
                className="flex"
                variants={fadeInVariants}
                custom={3}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-gray-900">Smart Notifications</dt>
                  <dd className="mt-1 text-gray-600">Stay informed with intelligent alerts that notify you of important updates, approaching deadlines, and potential issues.</dd>
                </div>
              </motion.div>
            </dl>
          </motion.div>

          <motion.div 
            className="mt-10 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img 
                className="w-full rounded-lg" 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
                alt="Dashboard screenshot" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
