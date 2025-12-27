import { initParticles } from './particles.js';
import { initNavigation } from './nav.js';
import { initAnimations } from './animations.js';

// initialize
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavigation();
    initAnimations();
});