import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import {
  BookOpen,
  Target,
  Users,
  Award,
  Star,
  CheckCircle,
  TrendingUp,
  Clock,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { label: "YouTube Subscribers", value: "10K+", icon: Users },
    { label: "Courses Available", value: "15+", icon: BookOpen },
    { label: "Students Enrolled", value: "5000+", icon: Award },
  ];

  const features = [
    {
      icon: Target,
      title: "High-Quality Content",
      description:
        "Curated courses designed to deliver real-world applicable skills and knowledge.",
    },
    {
      icon: TrendingUp,
      title: "Productivity-Focused",
      description:
        "Learn strategies that help you achieve more in less time and stay motivated.",
    },
    {
      icon: Clock,
      title: "Learn At Your Pace",
      description:
        "Access courses anytime, anywhere. Learn on your schedule with lifetime access.",
    },
    {
      icon: CheckCircle,
      title: "Real-World Skills",
      description:
        "Practical knowledge you can apply immediately to improve your life and career.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Student",
      content:
        "The productivity course completely changed how I manage my time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Working Professional",
      content:
        "Amazing content quality and very practical. Mps Kaphle explains everything so clearly!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      content:
        "Best investment I made in myself. The personal growth course helped me overcome my limiting beliefs.",
      rating: 5,
    },
  ];

  const paymentMethods = [
    { name: "Khalti", logo: "🟣" },
    { name: "eSewa", logo: "🟢" },
    { name: "IME Pay", logo: "🔵" },
    { name: "Stripe", logo: "💳" },
    { name: "PayPal", logo: "💙" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient">Mps Kaphle Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Keep learning, keep growing & stay productive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:glow-primary text-lg px-8"
              >
                Explore Courses
              </Button>
            </Link>
            <Link to="/#about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Mps Kaphle
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mps Kaphle is a passionate educator and content creator dedicated
              to helping people unlock their potential through practical
              knowledge and skills. Inspired by real-world experiences and a
              commitment to continuous learning, Mps creates courses that
              transform lives.
            </p>
            <p className="text-lg text-muted-foreground">
              With thousands of followers on YouTube and social media, Mps
              Kaphle has built a community of learners who believe in personal
              growth, productivity, and staying motivated every single day.
            </p>
            <a
              href="https://www.youtube.com/@mpskaphle-29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Visit YouTube Channel
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your life with our carefully crafted courses designed
              for real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:glow-primary"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Why Learn With Mps Kaphle?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:glow-primary transition-all"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Secure Payment Options
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We accept multiple payment methods for your convenience
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl px-6 py-4 flex items-center space-x-3"
                >
                  <span className="text-3xl">{method.logo}</span>
                  <span className="font-semibold text-foreground">
                    {method.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
