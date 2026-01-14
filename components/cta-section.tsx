"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Mail, Instagram, Linkedin, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ease, duration, viewport } from "@/lib/animations"

const contactLinks = [
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mnjjnpee", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="get-started" className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 gradient-premium" />

      {/* Soft background aura for depth */}
      <div className="absolute top-[-100px] left-1/4 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-white/[0.025] rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[350px] lg:h-[400px] bg-white/[0.015] rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
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
            Drop your details and I'll reach out to schedule your free AI audit.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.normal, ease, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-10"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-green-400" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-2">
                  You're on the list!
                </h3>
                <p className="text-primary-foreground/60 text-sm sm:text-base">
                  I'll be in touch within 24 hours to schedule your free audit.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease }}
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full h-12 sm:h-14 px-4 sm:px-5 bg-white/95 text-primary rounded-xl text-sm sm:text-base font-medium placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="business"
                    placeholder="Business name"
                    required
                    className="w-full h-12 sm:h-14 px-4 sm:px-5 bg-white/95 text-primary rounded-xl text-sm sm:text-base font-medium placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Email or phone number"
                    required
                    className="w-full h-12 sm:h-14 px-4 sm:px-5 bg-white/95 text-primary rounded-xl text-sm sm:text-base font-medium placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-12 sm:h-14 text-base sm:text-[17px] font-semibold bg-white text-primary hover:bg-white/95 shadow-premium-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl border-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Let's Find Your 10+ Hours
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
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
          <span className="text-primary-foreground/35 text-xs sm:text-sm font-medium tracking-wide">or connect with me</span>
          <div className="h-px w-12 sm:w-16 bg-primary-foreground/12" />
        </motion.div>

        {/* Contact Links */}
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300 group"
            >
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
