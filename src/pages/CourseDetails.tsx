import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  Users,
  Clock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Course Not Found
          </h1>
          <Link to="/courses">
            <Button className="bg-primary text-primary-foreground hover:glow-primary">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const paymentMethods = [
    { name: "Khalti", logo: "🟣" },
    { name: "eSewa", logo: "🟢" },
    { name: "IME Pay", logo: "🔵" },
    { name: "Stripe", logo: "💳" },
    { name: "PayPal", logo: "💙" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link to="/courses">
          <Button
            variant="outline"
            className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-96 object-cover rounded-2xl mb-8"
              />

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                {course.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-5 h-5" />
                  <span>{course.students}+ Students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {course.fullDescription}
              </p>

              {/* What You'll Learn */}
              <div className="glass rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Modules */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Course Modules
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {course.modules.map((module, index) => (
                    <AccordionItem
                      key={index}
                      value={`module-${index}`}
                      className="glass rounded-xl border-0 px-6"
                    >
                      <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                        {module.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-4">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex items-center space-x-2 text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="glass rounded-xl border-0 px-6"
                    >
                      <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-2xl p-8 sticky top-32"
            >
              <div className="text-4xl font-bold text-primary mb-6">
                {course.price}
              </div>

              <Link to={`/payment/${course.id}`}>
                <Button className="w-full bg-primary text-primary-foreground hover:glow-primary mb-6 text-lg py-6">
                  Buy Course Now
                </Button>
              </Link>

              <div className="border-t border-border pt-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">
                  This course includes:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Lifetime access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>All course materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Community support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Payment Methods
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="bg-secondary rounded-lg px-3 py-2 flex items-center justify-center space-x-2"
                    >
                      <span className="text-xl">{method.logo}</span>
                      <span className="text-xs font-semibold text-foreground">
                        {method.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
