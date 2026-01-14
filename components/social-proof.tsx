"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"
import { ease, duration, stagger, viewport } from "@/lib/animations"

const stats = [
  {
    icon: Instagram,
    value: 80000,
    suffix: "+",
    label: "followers",
    handle: "@aihustle.alabi",
    href: "https://www.instagram.com/aihustle.alabi/"
  },
  {
    icon: Linkedin,
    value: null,
    displayValue: "Active",
    label: "profile",
    handle: "/in/taialabi",
    href: "https://www.linkedin.com/in/taialabi"
  }
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView || !value) return

    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return Math.floor(num / 1000) + "k"
    }
    return num.toString()
  }

  return (
    <span ref={ref} className="stat-premium text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-none mb-1">
      {formatNumber(count)}{suffix}
    </span>
  )
}

export default function SocialProof() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease }}
        >
          {/* Luxury stats strip */}
          <div className="relative card-premium p-6 sm:p-8 md:p-12 overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-transparent" />

            {/* Stats grid */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-28">
              {stats.map((stat, index) => (
                <motion.a
                  key={stat.handle}
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: duration.normal, ease, delay: index * stagger.slow }}
                  className="group flex items-center gap-4 sm:gap-5 transition-transform duration-300 hover:scale-[1.02]"
                >
                  {/* Icon - min 44px touch target */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-muted/50 border border-border/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/[0.06] group-hover:border-primary/[0.1]">
                    <stat.icon className="w-5 h-5 text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Content - big numerals, minimal labels */}
                  <div>
                    {stat.value ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      <p className="stat-premium text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-none mb-1">
                        {stat.displayValue}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-muted-foreground/70 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Divider for desktop */}
              <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-border/50 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
