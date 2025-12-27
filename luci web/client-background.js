const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];
const dotCount = 120;
const followStrength = 0.15;
const easing = 0.08;
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;
let targetOffsetX = 0;
let targetOffsetY = 0;
let currentOffsetX = 0;
let currentOffsetY = 0;

class Dot {
    constructor() {
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.depth = Math.random() * 0.5 + 0.5;
    }

    draw() {
        const x = this.baseX + currentOffsetX * this.depth;
        const y = this.baseY + currentOffsetY * this.depth;
        
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 0, 0, 0.5)';
        ctx.fill();
    }
}

for (let i = 0; i < dotCount; i++) {
    dots.push(new Dot());
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    targetOffsetX = (mouseX - centerX) * followStrength;
    targetOffsetY = (mouseY - centerY) * followStrength;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    currentOffsetX += (targetOffsetX - currentOffsetX) * easing;
    currentOffsetY += (targetOffsetY - currentOffsetY) * easing;
    
    dots.forEach(dot => {
        dot.draw();
    });
    
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    dots.forEach(dot => {
        dot.baseX = Math.random() * canvas.width;
        dot.baseY = Math.random() * canvas.height;
    });
});