import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer: "Our free trial gives you full access to all features for 14 days. No credit card required. At the end of the trial, you can choose a plan that fits your needs or your account will automatically switch to the limited free plan."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the change will take effect at the start of your next billing cycle."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. Your data is encrypted both in transit and at rest. We use industry-standard security practices including regular security audits, multi-factor authentication, and role-based access controls."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, our Professional and Enterprise plans include access to our API and custom integration services. We can work with you to connect CloudTask to your existing systems and workflows."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include access to our comprehensive documentation and knowledge base. Starter plans include email support with a 24-hour response time. Professional plans include priority email support with a 4-hour response time. Enterprise plans include 24/7 dedicated support via email, phone, and chat."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of your current billing cycle. We don't offer refunds for partial billing periods."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about CloudTask.</p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto divide-y divide-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-900 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
