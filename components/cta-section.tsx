"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ease, duration, viewport } from "@/lib/animations"

const contactLinks = [
  {
    icon: Mail,
    label: "abdul@spacevoice.ai",
    href: "mailto:abdul@spacevoice.ai"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taialabi"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/aihustle.alabi/"
  }
]

export default function CTASection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 gradient-premium" />

      {/* Soft background aura for depth */}
      <div className="absolute top-[-100px] left-1/4 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-white/[0.025] rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[350px] lg:h-[400px] bg-white/[0.015] rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header - signature moment */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease }}
        >
          <p className="text-primary-foreground/45 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-5">
            Ready to Start?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-5 sm:mb-6 leading-[0.95] tracking-[-0.03em]">
            Ready to save 10+ hours a week?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 sm:mb-12 leading-[1.6]">
            Book your free AI audit and discover the tools that will transform your workflow.
          </p>
        </motion.div>

        {/* CTA Button - exclusive, powerful */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease, delay: 0.1 }}
        >
          <Button
            asChild
            size="lg"
            className="group h-[52px] sm:h-[56px] md:h-[60px] px-8 sm:px-10 text-base sm:text-[17px] font-semibold bg-white text-primary hover:bg-white/95 shadow-premium-xl hover:-translate-y-1 transition-all duration-300 rounded-xl border-0"
          >
            <a href="mailto:abdul@spacevoice.ai">
              Let's Find Your 10+ Hours
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease, delay: 0.2 }}
          className="flex items-center justify-center gap-4 sm:gap-5 my-10 sm:my-12 md:my-14"
        >
          <div className="h-px w-12 sm:w-16 bg-primary-foreground/12" />
          <span className="text-primary-foreground/35 text-xs sm:text-sm font-medium tracking-wide">or reach out directly</span>
          <div className="h-px w-12 sm:w-16 bg-primary-foreground/12" />
        </motion.div>

        {/* Contact Links - clean, minimal, aligned */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 md:gap-10"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300 group"
            >
              {/* Touch target min 44px */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary-foreground/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-primary-foreground/[0.12]">
                <link.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium text-sm sm:text-[15px]">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
