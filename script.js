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
// --- 🌟 NUEVO MOTOR DE PALABRAS FLOTANTES PERSONALIZADAS ---
        function initBgParticles() {
            const canvasBg = document.getElementById('bgCanvas');
            const ctxBg = canvasBg.getContext('2d');
            let particlesArray = [];
            
            function resizeCanvas() {
                canvasBg.width = window.innerWidth;
                canvasBg.height = window.innerHeight;
            }
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            // Lista de palabras y detalles personalizados que flotarán en el fondo
            const loveWords = [
                "Feliz Cumpleaños", 
                "Mi reina", 
                "Mi princesa", 
                "Mi bebita", 
                "Mi mundo", 
                "Mi esposita", 
                "#27", 
                "❤️", 
                "💕"
            ];
            
            const colors = ['#B76E79', '#6B2D5C', '#FFD1DC', '#4A2834'];

            class LoveWordParticle {
                constructor() {
                    this.text = loveWords[Math.floor(Math.random() * loveWords.length)];
                    this.x = Math.random() * canvasBg.width;
                    this.y = canvasBg.height + (Math.random() * 100); // Aparecen desde abajo
                    
                    // Tamaño adaptado: los emojis/números son un poco más grandes, las frases más sutiles
                    this.fontSize = this.text.includes('#') || this.text.length < 3 
                        ? Math.random() * 12 + 16  // Entre 16px y 28px
                        : Math.random() * 6 + 13;  // Entre 13px y 19px
                    
                    this.speedX = Math.random() * 0.4 - 0.2; // Ligero bamboleo lateral
                    this.speedY = Math.random() * -0.6 - 0.2; // Velocidad de subida suave
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                    this.alpha = Math.random() * 0.4 + 0.3; // Opacidad translúcida para no molestar la lectura
                }
                
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    // Si la palabra sale por la parte superior de la pantalla, se reinicia abajo
                    if (this.y < -30) {
                        this.y = canvasBg.height + 20;
                        this.x = Math.random() * canvasBg.width;
                        this.text = loveWords[Math.floor(Math.random() * loveWords.length)];
                        this.alpha = Math.random() * 0.4 + 0.3;
                    }
                }
                
                draw() {
                    ctxBg.save();
                    ctxBg.globalAlpha = this.alpha;
                    ctxBg.fillStyle = this.color;
                    // Mezclamos Montserrat con un estilo bold para que se lea hermoso
                    ctxBg.font = `600 ${this.fontSize}px 'Montserrat', sans-serif`;
                    ctxBg.textAlign = 'center';
                    ctxBg.fillText(this.text, this.x, this.y);
                    ctxBg.restore();
                }
            }

            // Creamos una cantidad equilibrada para que se vea elegante y fluida en móviles
            function createParticles() {
                const numberOfParticles = 20; 
                for (let i = 0; i < numberOfParticles; i++) {
                    particlesArray.push(new LoveWordParticle());
                    // Escalamos la posición inicial vertical para que no salgan todas al mismo tiempo al arrancar
                    particlesArray[i].y = Math.random() * canvasBg.height;
                }
            }

            function animate() {
                ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height);
                particlesArray.forEach(p => { 
                    p.update(); 
                    p.draw(); 
                });
                requestAnimationFrame(animate);
            }

            createParticles();
            animate();
        }

        initBgParticles();

init();