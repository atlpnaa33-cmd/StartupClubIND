@import "tailwindcss";

@theme {
  --color-orange-50: #fff7ed;
  --color-orange-100: #ffedd5;
  --color-orange-200: #fed7aa;
  --color-orange-300: #fdba74;
  --color-orange-400: #fb923c;
  --color-orange-500: #f97316;
  --color-orange-600: #ea580c;
  --color-orange-700: #c2410c;
  --color-orange-800: #9a3412;
  --color-orange-900: #7c2d12;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}

/* 3D perspective container */
.perspective-container {
  perspective: 1200px;
}

.perspective-deep {
  perspective: 2000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

/* ============ FLOATING ANIMATIONS ============ */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
  50% { transform: translateY(-20px) rotateX(-5deg) rotateY(5deg); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(-15px); }
  50% { transform: translateY(0px); }
}

@keyframes floatDiagonal {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(5deg); }
  50% { transform: translate(-5px, -25px) rotate(-3deg); }
  75% { transform: translate(-15px, -10px) rotate(2deg); }
}

@keyframes floatRotate3D {
  0% { transform: translateY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  25% { transform: translateY(-10px) rotateX(10deg) rotateY(5deg) rotateZ(2deg); }
  50% { transform: translateY(-20px) rotateX(0deg) rotateY(10deg) rotateZ(0deg); }
  75% { transform: translateY(-10px) rotateX(-10deg) rotateY(5deg) rotateZ(-2deg); }
  100% { transform: translateY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
}

/* ============ SPIN / ROTATE ANIMATIONS ============ */
@keyframes spin3d {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes spinSlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes morphRotate {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 60%; transform: rotate(180deg); }
  75% { border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(360deg); }
}

/* ============ GLOW / PULSE ANIMATIONS ============ */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
  50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
}

@keyframes pulseRing {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ============ GRADIENT / BG ANIMATIONS ============ */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes gradientFlow {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}

/* ============ ORBIT ANIMATIONS ============ */
@keyframes orbit {
  0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
}

@keyframes orbit2 {
  0% { transform: rotate(120deg) translateX(120px) rotate(-120deg); }
  100% { transform: rotate(480deg) translateX(120px) rotate(-480deg); }
}

@keyframes orbit3 {
  0% { transform: rotate(240deg) translateX(60px) rotate(-240deg); }
  100% { transform: rotate(600deg) translateX(60px) rotate(-600deg); }
}

@keyframes orbitVertical {
  0% { transform: rotateX(0deg) translateY(50px) rotateX(0deg); }
  100% { transform: rotateX(360deg) translateY(50px) rotateX(-360deg); }
}

/* ============ PARTICLE ANIMATIONS ============ */
@keyframes particleUp {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-800px) translateX(100px) scale(0); opacity: 0; }
}

@keyframes particleUp2 {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translateY(-700px) translateX(-80px) scale(0); opacity: 0; }
}

@keyframes particleFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -40px) scale(1.2); }
  50% { transform: translate(-20px, -80px) scale(0.8); }
  75% { transform: translate(40px, -40px) scale(1.1); }
}

/* ============ WAVE ANIMATION ============ */
@keyframes wave {
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
}

/* ============ TYPEWRITER ============ */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* ============ 3D FLIP ============ */
@keyframes flipIn {
  0% { transform: perspective(400px) rotateY(90deg); opacity: 0; }
  40% { transform: perspective(400px) rotateY(-10deg); }
  70% { transform: perspective(400px) rotateY(5deg); }
  100% { transform: perspective(400px) rotateY(0deg); opacity: 1; }
}

/* ============ UTILITY CLASSES ============ */
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
.animate-float-reverse { animation: floatReverse 7s ease-in-out infinite; }
.animate-float-diagonal { animation: floatDiagonal 10s ease-in-out infinite; }
.animate-float-rotate-3d { animation: floatRotate3D 8s ease-in-out infinite; }
.animate-spin-3d { animation: spin3d 20s linear infinite; }
.animate-spin-slow { animation: spinSlow 30s linear infinite; }
.animate-morph-rotate { animation: morphRotate 15s ease-in-out infinite; }
.animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
.animate-pulse-ring { animation: pulseRing 2s ease-out infinite; }
.animate-shimmer { 
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}
.animate-gradient { 
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite; 
}
.animate-gradient-flow {
  background-size: 400% 400%;
  animation: gradientFlow 8s ease infinite;
}
.animate-orbit { animation: orbit 10s linear infinite; }
.animate-orbit2 { animation: orbit2 15s linear infinite; }
.animate-orbit3 { animation: orbit3 8s linear infinite; }
.animate-orbit-vertical { animation: orbitVertical 12s linear infinite; }
.animate-particle-up { animation: particleUp 8s ease-in infinite; }
.animate-particle-up2 { animation: particleUp2 10s ease-in infinite; }
.animate-particle-float { animation: particleFloat 6s ease-in-out infinite; }
.animate-wave { animation: wave 12s linear infinite; }
.animate-blink { animation: blink 1s step-end infinite; }
.animate-flip-in { animation: flipIn 0.8s ease-out; }

/* ============ 3D CARD EFFECTS ============ */
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-3d:hover {
  transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
}

.card-3d-reverse:hover {
  transform: rotateY(-5deg) rotateX(-5deg) translateZ(20px);
}

.card-3d-deep:hover {
  transform: rotateY(8deg) rotateX(8deg) translateZ(40px) scale(1.02);
}

.card-3d-lift {
  transform-style: preserve-3d;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-3d-lift:hover {
  transform: translateY(-15px) translateZ(30px) rotateX(3deg);
  box-shadow: 0 30px 60px -15px rgba(249, 115, 22, 0.3);
}

/* Interactive 3D tilt - applied via JS */
.tilt-3d {
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
}

.tilt-3d .tilt-inner {
  transform: translateZ(40px);
}

.tilt-3d .tilt-inner-deep {
  transform: translateZ(80px);
}

/* ============ GLASS MORPHISM ============ */
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* ============ NEON GLOW ============ */
.neon-orange {
  box-shadow: 0 0 10px rgba(249, 115, 22, 0.5), 0 0 30px rgba(249, 115, 22, 0.3), 0 0 60px rgba(249, 115, 22, 0.1);
}

.neon-text-orange {
  text-shadow: 0 0 10px rgba(249, 115, 22, 0.5), 0 0 30px rgba(249, 115, 22, 0.3);
}

/* ============ SCROLLBAR ============ */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fff7ed;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #f97316, #ea580c);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #ea580c, #c2410c);
}

/* ============ TEXT EFFECTS ============ */
.text-3d {
  text-shadow: 
    1px 1px 0 rgba(249, 115, 22, 0.3),
    2px 2px 0 rgba(249, 115, 22, 0.2),
    3px 3px 0 rgba(249, 115, 22, 0.1),
    4px 4px 8px rgba(0, 0, 0, 0.1);
}

.text-3d-white {
  text-shadow:
    0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25);
}

.text-gradient-orange {
  background: linear-gradient(135deg, #f97316, #ea580c, #fb923c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============ NOISE TEXTURE ============ */
.noise-bg {
  position: relative;
}

.noise-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* ============ PAGE TRANSITION ============ */
.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  pointer-events: none;
}

/* ============ SECTION DIVIDER WAVE ============ */
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 80px;
}

/* ============ DEPTH LAYERS ============ */
.depth-1 { transform: translateZ(10px); }
.depth-2 { transform: translateZ(20px); }
.depth-3 { transform: translateZ(40px); }
.depth-4 { transform: translateZ(60px); }
.depth-5 { transform: translateZ(80px); }

/* Active nav indicator */
.nav-active-indicator {
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f97316;
}

/* Magnetic hover */
.magnetic-hover {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Ripple effect */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--ripple-x, 50%) var(--ripple-y, 50%), rgba(249, 115, 22, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.ripple:hover::after {
  opacity: 1;
}
