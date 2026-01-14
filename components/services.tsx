"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Phone, Zap } from "lucide-react"
import { ease, duration, stagger, viewport } from "@/lib/animations"

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Business Audit",
    whatItDoes: "A review of how you work today and where AI can help.",
    value: "Helps you and your team save time every week, not just cut costs."
  },
  {
    icon: Phone,
    title: "AI Voice Call Solutions",
    whatItDoes: "A human-like AI that can answer calls, chat with callers, book appointments, and take messages.",
    value: "You stop missing calls, and customers still feel like they're talking to a real person."
  },
  {
    icon: Zap,
    title: "Automations",
    whatItDoes: "Connects your tools so info moves automatically (for example between forms, email, sheets, CRMs, calendars).",
    value: "Less copy-and-paste, fewer mistakes, and more time for real work."
  }
]

export default function Services() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-3 sm:mb-4">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-[-0.03em]">
            Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-xl mx-auto">
            These are my core AI offerings. If your business has a different workflow or idea, we can still explore it during the audit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.normal, ease, delay: index * stagger.normal }}
              className="group"
            >
              <div className="relative h-full card-premium p-6 sm:p-8 lg:p-10">
                {/* Icon - min 44px touch target */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] border border-primary/[0.08] flex items-center justify-center mb-5 sm:mb-7 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/[0.08]">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6 tracking-[-0.02em]">
                  {service.title}
                </h3>

                {/* Content */}
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-1.5 sm:mb-2">
                      What it does
                    </p>
                    <p className="text-sm sm:text-base text-foreground/85 leading-[1.7]">
                      {service.whatItDoes}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-5 border-t border-border/40">
                    <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-1.5 sm:mb-2">
                      The value
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-[1.7]">
                      {service.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
