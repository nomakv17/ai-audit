"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ease, duration, viewport } from "@/lib/animations"

function Toast({ message, isVisible }: { message: string; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.35, ease }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl shadow-premium-lg">
            <Check className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function ShareSection() {
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setShowToast(true)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
        setCopied(false)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  return (
    <>
      <Toast message="Link copied to clipboard!" isVisible={showToast} />

      <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 gradient-section" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.normal, ease }}
            className="text-center"
          >
            {/* Card container */}
            <div className="card-premium p-6 sm:p-8 md:p-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-muted/50 border border-border/30 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <Share2 className="w-5 h-5 text-muted-foreground/60" strokeWidth={1.5} />
              </div>

              <p className="text-lg sm:text-xl font-semibold text-foreground mb-2 tracking-[-0.02em]">
                Not sure it's for you?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto leading-[1.7]">
                You can still share this page with a friend who might want a free AI audit.
              </p>

              <Button
                onClick={handleCopyLink}
                variant="outline"
                size="lg"
                className="h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold border-border/50 hover:bg-muted/30 hover:border-primary/15 transition-all duration-300 gap-2 sm:gap-2.5 rounded-xl"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-green-600" strokeWidth={2} />
                    <span className="text-green-600">Link copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
                    <span>Copy link to share</span>
                  </>
                )}
              </Button>
            </div>

            {/* Footer text */}
            <p className="text-xs sm:text-sm text-muted-foreground/45 mt-6 sm:mt-8 tracking-wide">
              Built by Taiwo Alabi
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
