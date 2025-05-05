import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CloudTask has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by at least 40%.",
      author: "Sarah Johnson",
      role: "Product Manager, Acme Inc."
    },
    {
      quote: "As a startup, we needed a solution that could scale with us. CloudTask not only met our needs but exceeded our expectations with its robust features and excellent support.",
      author: "Michael Chen",
      role: "CEO, TechNova"
    },
    {
      quote: "The automation features in CloudTask have saved us countless hours of manual work. We've been able to reduce administrative tasks by 60% and focus on strategic initiatives.",
      author: "Emily Rodriguez",
      role: "Operations Director, GlobalTech"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by companies worldwide</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. See what our customers have to say about CloudTask.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-primary flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4">{testimonial.quote}</blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
