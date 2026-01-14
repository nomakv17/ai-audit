"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ease, duration } from '@/lib/animations';

interface HeroComponentProps {
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  profileImage?: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  badge = "5 Free Audits This Month",
  ctaText = "Let's Find Your 10 Hours",
  ctaLink = "mailto:abdul@spacevoice.ai",
  profileImage = "/taiwo-alabi.jpeg"
}) => {
  const { scrollY } = useScroll();
  const auraY = useTransform(scrollY, [0, 500], [0, 100]);
  const auraOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Hero gradient background with aura */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Parallax aura glow */}
      <motion.div
        style={{ y: auraY, opacity: auraOpacity }}
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[500px] sm:h-[600px] lg:h-[800px] bg-gradient-to-b from-primary/[0.05] via-primary/[0.02] to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, 60]) }}
        className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-gradient-to-bl from-accent/[0.04] to-transparent rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* Mobile: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, ease }}
            className="flex justify-center lg:hidden order-1"
          >
            <div className="relative">
              <div className="absolute -inset-6 sm:-inset-8 rounded-full bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.04] blur-2xl" />
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-primary/[0.05]" />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full ring-glow overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Tai Alabi" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted via-secondary to-muted flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl text-primary/15 font-semibold">T</span>
                  </div>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration.normal, ease, delay: 0.3 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2"
              >
                <Badge className="bg-primary text-primary-foreground shadow-premium-lg px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium whitespace-nowrap border-0">
                  {badge}
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-6 sm:space-y-8 order-2 lg:order-1">

            {/* Core Offer - main content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, ease, delay: 0.1 }}
              className="space-y-4 sm:space-y-5 max-w-xl"
            >
              <p className="text-lg sm:text-xl md:text-[22px] text-foreground/90 font-medium leading-[1.45] tracking-[-0.01em]">
                I've spent the last year testing a lot of AI tools. Now I help businesses figure out which tools are actually worth using, and where they can save time every week.
              </p>
              <p className="text-base sm:text-[17px] text-muted-foreground leading-[1.75]">
                This month, I'm offering 5 free AI audits for business owners in exchange for honest feedback and a short testimonial.
              </p>
            </motion.div>

            {/* Personal intro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, ease, delay: 0.2 }}
              className="space-y-2 sm:space-y-3 max-w-xl pt-1 sm:pt-2"
            >
              <p className="text-base sm:text-lg text-foreground font-medium leading-[1.5]">
                My name is Taiwo Alabi, <span className="italic text-muted-foreground">you can call me Tai</span>.
              </p>
              <p className="text-base sm:text-[17px] text-muted-foreground leading-[1.75]">
                I work with businesses to find practical ways to use AI so their teams can save time and cut busywork.
              </p>
            </motion.div>

            {/* CTA Button - signature style, powerful presence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, ease, delay: 0.35 }}
              className="pt-2 sm:pt-3"
            >
              <Button
                asChild
                size="lg"
                className="group h-[52px] sm:h-[56px] md:h-[60px] px-8 sm:px-10 text-base sm:text-[17px] font-semibold btn-signature text-primary-foreground border-0 rounded-xl"
              >
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo (desktop) - premium framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, ease, delay: 0.15 }}
            className="hidden lg:flex justify-center lg:justify-end order-3 lg:order-2"
          >
            <div className="relative">
              {/* Multi-layer decorative rings */}
              <div className="absolute -inset-12 xl:-inset-16 rounded-full bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]" />
              <div className="absolute -inset-6 xl:-inset-8 rounded-full border border-primary/[0.04]" />
              <div className="absolute -inset-3 xl:-inset-4 rounded-full border border-primary/[0.06]" />

              <div className="relative w-[280px] lg:w-[320px] xl:w-[380px] h-[280px] lg:h-[320px] xl:h-[380px] rounded-full ring-glow overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Tai Alabi" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted via-secondary to-muted flex items-center justify-center">
                    <span className="text-7xl lg:text-8xl xl:text-9xl text-primary/12 font-semibold">T</span>
                  </div>
                )}
              </div>

              {/* Badge positioned elegantly */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration.normal, ease, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              >
                <Badge className="bg-primary text-primary-foreground shadow-premium-xl px-5 xl:px-6 py-2 xl:py-2.5 text-sm font-semibold whitespace-nowrap border-0">
                  {badge}
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
