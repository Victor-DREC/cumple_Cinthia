// true = desbloquea todo para probar | false = producción en tiempo real (Julio 2026)
const MODO_DESARROLLO = true; 

const giftsData = {
    1: { riddle: "¿Cuál es mi postre favorito que siempre me robas?", answer: "tiramisu", phrase: "«Eres el dulce que le faltaba a mi vida entera.»", url: "regalos/dia1.html" },
    2: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    3: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia3.html" },
    4: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia4.html" },
    5: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia5.html" },
    6: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia6.html" },
    7: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia7.html" },
    8: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia8.html" },
    9: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parqurlDestinoe central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia9.html" },
    10: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    11: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    12: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    13: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    14: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    15: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    16: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    17: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    18: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    19: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    20: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    21: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    22: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    23: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    24: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    25: { riddle: "¿Cómo se llama el lugar donde fue nuestro primer beso?", answer: "parque central", phrase: "«Ese instante detuvo el tiempo para mí.»", url: "regalos/dia2.html" },
    26: { riddle: "¿Cuál es la promesa que nos hicimos bajo la lluvia?", answer: "siempre juntos", phrase: "«Veintiséis razones son pocas para lo que te amo.»", url: "regalos/dia26.html" },
    27: { riddle: "¿Cuántos años cumples hoy, el día más lindo del año?", answer: "21", phrase: "«¡FELIZ CUMPLEANLOS MI REINA! Tu existencia es mi regalo diario.»", url: "regalos/dia27.html" }
};



const grid = document.getElementById('calendarGrid');
const modal = document.getElementById('modal');
let diaAbierto = null;

function init() {
    const hoy = new Date();
    const esAñoCorrecto = hoy.getFullYear() === 2026;
    const esJulio = hoy.getMonth() === 6; 
    const diaActual = hoy.getDate();

    for (let i = 1; i <= 27; i++) {
        const card = document.createElement('div');
        card.classList.add('day-card');
        
        if (i === 27) {
            card.classList.add('grand-finale');
            card.innerHTML = `<span>27 🎂</span>`;
        } else {
            card.innerHTML = `<span>${i}</span>`;
        }

        let disponible = MODO_DESARROLLO || (esAñoCorrecto && esJulio && diaActual >= i);

        if (disponible) {
            card.classList.add('available');
            card.onclick = () => abrirModal(i);
        } else {
            card.innerHTML += `<span class="lock-icon">🔒</span>`;
        }
        grid.appendChild(card);
    }
    
    // Inicializar el sistema de partículas de fondo
    initBgParticles();
}

function abrirModal(dia) {
    diaAbierto = dia;
    const data = giftsData[dia];
    document.getElementById('modalDayTitle').innerText = `Día ${dia}`;
    document.getElementById('riddleText').innerText = data.riddle;
    document.getElementById('riddleAnswer').value = "";
    document.getElementById('errorMsg').style.display = "none";
    document.getElementById('riddlePhase').classList.remove('hidden');
    document.getElementById('giftPhase').classList.add('hidden');
    modal.classList.add('active');
}

document.getElementById('submitAnswerBtn').onclick = () => {
    const rta = document.getElementById('riddleAnswer').value.toLowerCase().trim();
    const rtaLimpia = rta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const rtaCorrecta = giftsData[diaAbierto].answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (rtaLimpia === rtaCorrecta) {
        document.getElementById('riddlePhase').classList.add('hidden');
        document.getElementById('giftPhase').classList.remove('hidden');
        document.getElementById('revealPhrase').innerText = giftsData[diaAbierto].phrase;
        document.getElementById('giftLinkBtn').href = giftsData[diaAbierto].url;
    } else {
        document.getElementById('errorMsg').style.display = "block";
    }
};

document.getElementById('closeModal').onclick = () => modal.classList.remove('active');


// --- 🌟 MOTOR DE EFECTOS ESPECIALES DINÁMICOS (PARTÍCULAS) 🌟 ---
function initBgParticles() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Colores mágicos para las partículas flotantes
    const colors = ['#B76E79', '#D4AF37', '#6B2D5C', '#FFD1DC', '#FFFFFF'];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * -0.5 - 0.1; // Flotan hacia arriba lentamente
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.5 + 0.2;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Si desaparece por arriba o se desvanece por completo, reaparece abajo
            if (this.y < 0 || this.alpha <= 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
                this.alpha = Math.random() * 0.5 + 0.2;
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    function createParticles() {
        const numberOfParticles = 50; // Cantidad óptima para rendimiento móvil
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    createParticles();
    animate();
}

init();