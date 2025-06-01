import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-16 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Revolutionize Your Business with{" "}
              <span className="text-gradient">AI-Driven Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-lg">
              Transform how you manage clients, cases, and learning with Civi's cutting-edge AI tools. Increase efficiency, improve decision-making, and drive growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="#products">Explore Solutions</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center">
                <Rocket className="h-5 w-5 text-green-500 mr-2" />
                <span>Fast Implementation</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0 lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern AI dashboard interface showing analytics and data visualization"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
