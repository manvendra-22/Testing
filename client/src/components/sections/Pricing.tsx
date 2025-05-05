import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$12",
      description: "Perfect for small teams just getting started.",
      features: [
        "Up to 10 users",
        "5 GB storage",
        "Basic analytics",
        "Basic integrations",
        "Email support"
      ],
      buttonText: "Start free trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "For growing teams that need more features and storage.",
      features: [
        "Up to 50 users",
        "50 GB storage",
        "Advanced analytics",
        "All integrations",
        "Priority support",
        "Custom reports"
      ],
      buttonText: "Start free trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$79",
      description: "Advanced features for organizations with complex needs.",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "24/7 dedicated support",
        "On-premise deployment"
      ],
      buttonText: "Contact sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Choose the plan that's right for your team. All plans include a 14-day free trial.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className={`flex flex-col w-full ${plan.popular ? 'border-2 border-primary relative' : 'border border-gray-200 hover:border-primary'}`}>
                {plan.popular && (
                  <Badge className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg">Popular</Badge>
                )}
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="ml-1 text-xl font-semibold">/month per user</span>
                  </div>
                  <p className="mt-5 text-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex">
                        <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.buttonVariant} 
                    className="mt-8 w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
