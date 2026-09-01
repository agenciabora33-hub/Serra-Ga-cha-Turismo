import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Shield, Award, Star } from 'lucide-react';

interface SectionTransitionProps {
  fromColor?: 'dark' | 'light' | 'emerald' | 'charcoal';
  toColor?: 'dark' | 'light' | 'emerald' | 'charcoal';
  icon?: 'sparkles' | 'compass' | 'shield' | 'award' | 'star' | 'none';
  label?: string;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromColor = 'dark',
  toColor = 'light',
  icon = 'sparkles',
  label,
  className = '',
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'compass':
        return <Compass className="w-3.5 h-3.5 text-[#DFCA95]" />;
      case 'shield':
        return <Shield className="w-3.5 h-3.5 text-[#DFCA95]" />;
      case 'award':
        return <Award className="w-3.5 h-3.5 text-[#DFCA95]" />;
      case 'star':
        return <Star className="w-3.5 h-3.5 text-[#DFCA95] fill-[#DFCA95]/30" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#DFCA95]" />;
    }
  };

  const getGradientClasses = () => {
    if (fromColor === 'dark' && toColor === 'light') {
      return 'bg-gradient-to-b from-[#143D34] via-[#102F28] to-[#F8F9FA]';
    }
    if (fromColor === 'light' && toColor === 'dark') {
      return 'bg-gradient-to-b from-[#F8F9FA] via-[#0D2B24] to-[#091D18]';
    }
    if (fromColor === 'light' && toColor === 'emerald') {
      return 'bg-gradient-to-b from-[#FDFBF7] via-[#1A4B40] to-[#102F28]';
    }
    if (fromColor === 'emerald' && toColor === 'light') {
      return 'bg-gradient-to-b from-[#102F28] via-[#1A4B40] to-[#F8F9FA]';
    }
    if (fromColor === 'dark' && toColor === 'dark') {
      return 'bg-gradient-to-b from-[#091D18] via-[#0D2B24] to-[#091D18]';
    }
    return 'bg-gradient-to-b from-[#143D34] to-[#0D2B24]';
  };

  return (
    <div className={`relative w-full h-16 sm:h-20 overflow-hidden flex items-center justify-center ${getGradientClasses()} ${className}`}>
      {/* Dynamic Animated Ambient Glow Line */}
      <motion.div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#DFCA95]/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Floating Center Badge with Subtle Pulse */}
      {icon !== 'none' && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 10 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative z-10 flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#091D18]/90 border border-[#DFCA95]/30 shadow-[0_0_15px_rgba(223,202,149,0.25)] backdrop-blur-md"
        >
          {renderIcon()}
          {label && (
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#DFCA95]">
              {label}
            </span>
          )}
        </motion.div>
      )}

      {/* Background Soft Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-[#DFCA95]/10 rounded-full blur-xl pointer-events-none" />
    </div>
  );
};
