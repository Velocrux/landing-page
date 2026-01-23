// Color Palette Constants
export const COLORS = {
  primary: {
    navy: '#0A1628',
    navyLight: '#1A2332',
    cyan: '#00A3FF',
    cyanBright: '#1E90FF',
    blue: '#0D7FFF',
  },
  accent: {
    orange: '#FF6B35',
    orangeBright: '#FF7F50',
    redOrange: '#FF4500',
    redOrangeBright: '#FF5722',
    gold: '#FFB800',
    goldLight: '#FFA500',
  },
  neutral: {
    white: '#FFFFFF',
    offWhite: '#F5F5F5',
    lightGray: '#E8E8E8',
    gray: '#808080',
    mediumGray: '#999999',
    darkGray: '#333333',
    darkerGray: '#2A2A2A',
    black: '#000000',
  },
} as const

// Animation Timing Constants
export const ANIMATION_TIMING = {
  microInteraction: 150,
  cardHover: 300,
  sectionFade: 500,
  pageTransition: 400,
} as const

// Easing Functions
export const EASING = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
} as const
