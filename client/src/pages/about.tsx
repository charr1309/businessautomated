import { motion } from "framer-motion";
import { Target, Users, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to making AI accessible and practical for businesses of all sizes",
    },
    {
      icon: Users,
      title: "Customer-Focused",
      description:
        "Your success is our success. We build solutions tailored to your unique needs",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay at the forefront of AI technology to deliver cutting-edge solutions",
    },
    {
      icon: Heart,
      title: "Partnership",
      description:
        "We don't just provide software - we partner with you for long-term growth",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="heading-page-title">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Business Automated
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to transform how businesses operate through
              intelligent AI automation. Our team of experts designs and deploys
              custom AI solutions that drive real, measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Business Automated was founded with a simple vision: make
                  enterprise-grade AI automation accessible to businesses of all
                  sizes.
                </p>
                <p>
                  We've seen firsthand how manual processes slow down growth and
                  frustrate both employees and customers. That's why we've dedicated
                  ourselves to creating AI solutions that are not just powerful, but
                  practical and easy to implement.
                </p>
                <p>
                  Today, we're proud to help businesses across industries save time,
                  reduce costs, and deliver better customer experiences through
                  intelligent automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        1000+
                      </div>
                      <div className="text-gray-400">Businesses Automated</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                      <value.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Our team combines decades of experience in AI, software engineering,
              and business process optimization to deliver solutions that truly
              transform how you work.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-400">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
