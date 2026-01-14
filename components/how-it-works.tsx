"use client"

import { motion } from "framer-motion"
import { ease, duration, stagger, viewport } from "@/lib/animations"

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "A 15-minute chat to tell you what the audit is all about and see if it's a fit."
  },
  {
    number: 2,
    title: "Deep Dive",
    description: "I look into your specific business workflows and processes to learn exactly where the bottlenecks are."
  },
  {
    number: 3,
    title: "The Audit",
    description: "I identify the top 3 AI tools to save your team 10+ hours a week."
  },
  {
    number: 4,
    title: "The Roadmap",
    description: "You get a simple PDF plan to implement them."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-section" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-3 sm:mb-4">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-[-0.03em]">
            How It Works
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: duration.normal,
                ease,
                delay: index * stagger.normal
              }}
            >
              <div className="group relative h-full card-premium p-6 sm:p-8 lg:p-10">
                {/* Step number */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold shadow-premium">
                    {step.number}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 tracking-[-0.02em] transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
