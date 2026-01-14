"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { ease, duration, stagger, viewport } from "@/lib/animations"

const audiences = [
  "General businesses that want their day-to-day work to feel lighter.",
  "Business owners who are curious about AI but don't want to waste time learning every tool.",
  "Busy teams dealing with calls, emails, or admin work.",
  "Managers, admins, or anyone who deals with the same tasks over and over."
]

export default function WhoItsFor() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-section" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-3 sm:mb-4">
            Is This For You?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-[-0.03em]">
            Who This Is For
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.normal, ease, delay: index * stagger.fast }}
              className="group"
            >
              <div className="flex items-start gap-3 sm:gap-4 card-premium p-4 sm:p-5 md:p-6">
                {/* Icon - min 44px touch target */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={2.5} />
                </div>
                <span className="text-sm sm:text-base text-foreground/90 leading-[1.7] pt-1.5 sm:pt-2">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
