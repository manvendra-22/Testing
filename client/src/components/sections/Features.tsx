import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Users, 
  Calendar, 
  BarChart3, 
  Sparkles, 
  Shield 
} from "lucide-react";

const Features = () => {
  const cardVariants = {
    initial: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
    hover: { 
      y: -5, 
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 }
    }
  };

  const features = [
    {
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      title: "Task Management",
      description: "Create, organize, and prioritize tasks with our intuitive drag-and-drop interface. Never miss a deadline again."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools. Share documents, assign tasks, and track progress."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Smart Scheduling",
      description: "Plan your day with intelligent scheduling that adapts to your priorities and workload to maximize productivity."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with comprehensive reporting and analytics to identify trends and optimize your workflow."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Automation Tools",
      description: "Automate repetitive tasks and workflows to save time and reduce errors, allowing you to focus on what matters most."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Rest easy knowing your data is protected with state-of-the-art security features, including end-to-end encryption."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Powerful features to boost your productivity</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Our comprehensive platform offers everything you need to streamline your workflow and maximize efficiency.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
