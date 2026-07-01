// true = desbloquea todo para probar | false = producción en tiempo real (Julio 2026)
const MODO_DESARROLLO = true; 

const giftsData = {
    1: { riddle: "Vuelo sin alas, hablo sin boca, y viajo de corazón a corazón. ¿Qué soy?", answer: "Un pensamiento", phrase: "«Eres el dulce que le faltaba a mi vida entera.»", url: "regalos/dia1.html" },
    2: { riddle: "Me escuchas pero no me ves, puedo hacerte llorar o bailar. ¿Qué soy?", answer: "El sonido", phrase: "«Eres la melodía que da ritmo a mis días.»", url: "regalos/dia2.html" },
    3: { riddle: "Soy espejo del pasado, guardo momentos que no vuelven. ¿Qué soy?", answer: "La memoria", phrase: "«Eres el instante más hermoso que quiero guardar para siempre.»", url: "regalos/dia3.html" },
    4: { riddle: "Cruzo fronteras sin pasaporte, me entienden en cualquier rincón. ¿Qué soy?", answer: "El idioma", phrase: "«Eres mi despertar favorito en cualquier lengua.»", url: "regalos/dia4.html" },
    5: { riddle: "No soy objeto ni tesoro, pero brillo en cada persona. ¿Qué soy?", answer: "Las virtudes", phrase: "«Eres la razón por la que admiro cada detalle de ti.»", url: "regalos/dia5.html" },
    6: { riddle: "Soy muchas piezas que al unirse muestran algo completo. ¿Qué soy?", answer: "La unión", phrase: "«Eres la pieza que completa mi vida.»", url: "regalos/dia6.html" },
    7: { riddle: "No soy imagen, pero mi eco te acompaña. ¿Qué soy?", answer: "La voz", phrase: "«Eres la voz que me acompaña incluso en silencio.»", url: "regalos/dia7.html" },
    8: { riddle: "Soy mundos inventados donde todo es posible. ¿Qué soy?", answer: "La fantasía", phrase: "«Eres la protagonista de mi mejor historia.»", url: "regalos/dia8.html" },
    9: { riddle: "No soy camino, pero muestro destinos. ¿Qué soy?", answer: "La brújula", phrase: "«Eres el destino que siempre quiero alcanzar.»", url: "regalos/dia9.html" },
    10: { riddle: "Soy historias que se mueven en pantalla. ¿Qué soy?", answer: "El cine", phrase: "«Eres mi mejor plan, sin importar la distancia.»", url: "regalos/dia10.html" },
    11: { riddle: "Soy trazos que nacen del alma. ¿Qué soy?", answer: "El arte", phrase: "«Eres la obra maestra que quiero pintar cada día.»", url: "regalos/dia11.html" },
    12: { riddle: "No soy oro ni plata, pero valgo por el tiempo que doy. ¿Qué soy?", answer: "La dedicación", phrase: "«Eres el regalo que quiero dedicar siempre.»", url: "regalos/dia12.html" },
    13: { riddle: "Soy imagen que te acompaña cada vez que miras tu pantalla. ¿Qué soy?", answer: "El paisaje", phrase: "«Eres la imagen que quiero ver cada día.»", url: "regalos/dia13.html" },
    14: { riddle: "Soy versos que se cantan con emoción. ¿Qué soy?", answer: "La poesía", phrase: "«Eres la letra que da sentido a mi música.»", url: "regalos/dia14.html" },
    15: { riddle: "Soy momentos que se guardan en el corazón. ¿Qué soy?", answer: "Las memorias", phrase: "«Eres el recuerdo que siempre quiero revivir.»", url: "regalos/dia15.html" },
    16: { riddle: "Soy secuencia de instantes que juntos cuentan una historia. ¿Qué soy?", answer: "La película", phrase: "«Eres la película más hermosa de mi vida.»", url: "regalos/dia16.html" },
    17: { riddle: "Soy aquello que aún no existe, pero que te impulsa a seguir. ¿Qué soy?", answer: "El sueño", phrase: "«Eres el futuro que quiero construir contigo.»", url: "regalos/dia17.html" },
    18: { riddle: "Soy curiosidad que abre puertas al conocimiento. ¿Qué soy?", answer: "La pregunta", phrase: "«Eres la respuesta que siempre busco.»", url: "regalos/dia18.html" },
    19: { riddle: "Soy sabor que alegra el alma. ¿Qué soy?", answer: "El chocolate", phrase: "«Eres el sabor que endulza mi vida.»", url: "regalos/dia19.html" },
    20: { riddle: "Soy páginas que guardan mundos infinitos. ¿Qué soy?", answer: "El libro", phrase: "«Eres la historia que quiero leer eternamente.»", url: "regalos/dia20.html" },
    21: { riddle: "Soy calma que llega al oído. ¿Qué soy?", answer: "La serenidad", phrase: "«Eres mi paz en cada noche.»", url: "regalos/dia21.html" },
    22: { riddle: "Soy palabras que abrazan cuando más lo necesitas. ¿Qué soy?", answer: "El consuelo", phrase: "«Eres la razón por la que quiero secar tus lágrimas.»", url: "regalos/dia22.html" },
    23: { riddle: "Soy promesa guardada para el futuro. ¿Qué soy?", answer: "El tiempo", phrase: "«Eres mi mañana soñado.»", url: "regalos/dia23.html" },
    24: { riddle: "Soy sorpresa que llega con voces y sonrisas. ¿Qué soy?", answer: "La alegría", phrase: "«Eres la razón por la que todos sonríen.»", url: "regalos/dia24.html" },
    25: { riddle: "Soy organización que convierte sueños en planes. ¿Qué soy?", answer: "La agenda", phrase: "«Eres el encuentro que espero con ansias.»", url: "regalos/dia25.html" },
    26: { riddle: "Soy compromiso que se escribe con razones. ¿Qué soy?", answer: "La promesa", phrase: "«Eres mi decisión de vida.»", url: "regalos/dia26.html" },
    27: { riddle: "¿Cuántos años cumples hoy, el día más lindo del año?", answer: "26", phrase: "«¡FELIZ CUMPLEANLOS MI REINA! Tu existencia es mi regalo diario.»", url: "regalos/dia27.html" }
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
                "#26", 
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