// true = desbloquea todo para probar | false = producción en tiempo real (Julio 2026)
const MODO_DESARROLLO = false; 

const giftsData = {
    1: { riddle: "Vuelo sin alas, hablo sin boca, y viajo de corazón a corazón. ¿Qué soy?", answer: "Un pensamiento", phrase: "«Eres el dulce que le faltaba a mi vida entera.»", url: "regalos/1.html" },
    2: { riddle: "Me escuchas pero no me ves, puedo hacerte llorar o bailar. ¿Qué soy?", answer: "El sonido", phrase: "«Eres la melodía que da ritmo a mis días.»", url: "regalos/2.html" },
    3: { riddle: "Soy espejo del pasado, guardo momentos que no vuelven. ¿Qué soy?", answer: "La memoria", phrase: "«Eres el instante más hermoso que quiero guardar para siempre.»", url: "regalos/3.html" },
    4: { riddle: "Soy páginas que guardan mundos infinitos. ¿Qué soy?", answer: "El libro", phrase: "«Eres la historia que quiero leer eternamente.»", url: "regalos/4.html" },
    5: { riddle: "No soy objeto ni tesoro, pero brillo en cada persona. ¿Qué soy?", answer: "Las virtudes", phrase: "«Eres la razón por la que admiro cada detalle de ti.»", url: "regalos/5.html" },
    6: { riddle: "Soy muchas piezas que al unirse muestran algo completo. ¿Qué soy?", answer: "La unión", phrase: "«Eres la pieza que completa mi vida.»", url: "regalos/6.html" },
    7: { riddle: "No soy imagen, pero mi eco te acompaña. ¿Qué soy?", answer: "La voz", phrase: "«Eres la voz que me acompaña incluso en silencio.»", url: "regalos/7.html" },
    8: { riddle: "Soy mundos inventados donde todo es posible. ¿Qué soy?", answer: "La fantasía", phrase: "«Eres la protagonista de mi mejor historia.»", url: "regalos/8.html" },
    9: { riddle: "No soy camino, pero muestro destinos. ¿Qué soy?", answer: "La brújula", phrase: "«Eres el destino que siempre quiero alcanzar.»", url: "regalos/9.html" },
    10: { riddle: "Soy historias que se mueven en pantalla. ¿Qué soy?", answer: "El cine", phrase: "«Eres mi mejor plan, sin importar la distancia.»", url: "regalos/10.html" },
    11: { riddle: "Soy trazos que nacen del alma. ¿Qué soy?", answer: "El arte", phrase: "«Eres la obra maestra que quiero pintar cada día.»", url: "regalos/11.html" },
    12: { riddle: "No soy oro ni plata, pero valgo por el tiempo que doy. ¿Qué soy?", answer: "La dedicación", phrase: "«Eres el regalo que quiero dedicar siempre.»", url: "regalos/12.html" },
    13: { riddle: "Soy imagen que te acompaña cada vez que miras tu pantalla. ¿Qué soy?", answer: "El paisaje", phrase: "«Eres la imagen que quiero ver cada día.»", url: "regalos/13.html" },
    14: { riddle: "Soy versos que se cantan con emoción. ¿Qué soy?", answer: "La poesía", phrase: "«Eres la letra que da sentido a mi música.»", url: "regalos/14.html" },
    15: { riddle: "Soy momentos que se guardan en el corazón. ¿Qué soy?", answer: "Las memorias", phrase: "«Eres el recuerdo que siempre quiero revivir.»", url: "regalos/15.html" },
    16: { riddle: "Soy secuencia de instantes que juntos cuentan una historia. ¿Qué soy?", answer: "La película", phrase: "«Eres la película más hermosa de mi vida.»", url: "regalos/16.html" },
    17: { riddle: "Soy aquello que aún no existe, pero que te impulsa a seguir. ¿Qué soy?", answer: "El sueño", phrase: "«Eres el futuro que quiero construir contigo.»", url: "regalos/17.html" },
    18: { riddle: "Soy好奇心 (curiosidad) que abre puertas al conocimiento. ¿Qué soy?", answer: "La pregunta", phrase: "«Eres la respuesta que siempre busco.»", url: "regalos/18.html" },
    19: { riddle: "Soy sabor que alegra el alma. ¿Qué soy?", answer: "El chocolate", phrase: "«Eres el sabor que endulza mi vida.»", url: "regalos/19.html" },
    20: { riddle: "Cruzo fronteras sin pasaporte, me entienden en cualquier rincón. ¿Qué soy?", answer: "El idioma", phrase: "«Eres mi despertar favorito en cualquier lengua.»", url: "regalos/20.html" },
    21: { riddle: "Soy calma que llega al oído. ¿Qué soy?", answer: "La serenidad", phrase: "«Eres mi paz en cada noche.»", url: "regalos/21.html" },
    22: { riddle: "Soy palabras que abrazan cuando más lo necesitas. ¿Qué soy?", answer: "El consuelo", phrase: "«Eres la razón por la que quiero secar tus lágrimas.»", url: "regalos/22.html" },
    23: { riddle: "Soy promesa guardada para el futuro. ¿Qué soy?", answer: "El tiempo", phrase: "«Eres mi mañana soñado.»", url: "regalos/23.html" },
    24: { riddle: "Soy sorpresa que llega con voces y sonrisas. ¿Qué soy?", answer: "La alegría", phrase: "«Eres la razón por la que todos sonríen.»", url: "regalos/24.html" },
    25: { riddle: "Soy organización que convierte sueños en planes. ¿Qué soy?", answer: "La agenda", phrase: "«Eres el encuentro que espero con ansias.»", url: "regalos/25.html" },
    26: { riddle: "¿Cuántos años cumples hoy, el día más lindo del año?", answer: "26", phrase: "«¡FELIZ CUMPLEAÑOS MI REINA! Tu existencia es mi regalo diario.»", url: "regalos/26.html" }
};

const grid = document.getElementById('calendarGrid'); 
const modal = document.getElementById('modal'); 
let diaAbierto = null; 

function init() {
    grid.innerHTML = ""; // Limpiar el contenedor para refrescar cambios dinámicamente
    const hoy = new Date(); 
    const esAñoCorrecto = hoy.getFullYear() === 2026; 
    const esJulio = hoy.getMonth() === 6; 
    const diaActual = hoy.getDate(); 

    // Obtener el récord de acertijos resueltos (Por defecto empieza en el regalo 1)
    let progresoActual = parseInt(localStorage.getItem('progresoRegalos')) || 1;

    // LÓGICA DE LIBERACIÓN TEMPORAL (Del 1 al 6 de Julio)
    let limiteMaximoPermitido = 0;

    if (esAñoCorrecto && esJulio) {
        if (diaActual >= 1 && diaActual <= 5) {
            // Cada día de los primeros 5 días habilita un bloque completo de 5 regalos
            limiteMaximoPermitido = diaActual * 5; 
        } else if (diaActual >= 6) {
            // El día 6 libera el último regalo (El 26)
            limiteMaximoPermitido = 26; 
        }
    }

    for (let i = 1; i <= 26; i++) {
        const card = document.createElement('div'); 
        card.classList.add('day-card'); 
        
        // El regalo 26 adopta los estilos visuales premium del gran final 
        if (i === 26) {
            card.classList.add('grand-finale'); 
            card.innerHTML = `<span>26 🎂</span>`; 
        } else {
            card.innerHTML = `<span>${i}</span>`; 
        }

        // EVALUACIÓN CLAVE: Disponible si estamos testeando O si (ya pasó la fecha de su bloque Y va en orden de resolución)
        let disponible = MODO_DESARROLLO || (limiteMaximoPermitido >= i && i <= progresoActual);

        if (disponible) {
            card.classList.add('available'); 
            card.onclick = () => abrirModal(i); 
        } else {
            card.innerHTML += `<span class="lock-icon">🔒</span>`; 
        }
        grid.appendChild(card); 
    }
    
    if(!window.particlesLoaded) {
        initBgParticles(); 
        window.particlesLoaded = true;
    }
}

function abrirModal(dia) { 
    diaAbierto = dia; 
    const data = giftsData[dia]; 
    document.getElementById('modalDayTitle').innerText = `Regalo ${dia}`; 
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
        // Guardar progreso en el navegador: Solo avanza el récord global si resolvió el nivel que le correspondía
        let progresoActual = parseInt(localStorage.getItem('progresoRegalos')) || 1;
        if (diaAbierto === progresoActual) {
            localStorage.setItem('progresoRegalos', progresoActual + 1);
        }

        document.getElementById('riddlePhase').classList.add('hidden'); 
        document.getElementById('giftPhase').classList.remove('hidden'); 
        document.getElementById('revealPhrase').innerText = giftsData[diaAbierto].phrase; 
        document.getElementById('giftLinkBtn').href = giftsData[diaAbierto].url; 
    } else {
        document.getElementById('errorMsg').style.display = "block"; 
    }
};

document.getElementById('closeModal').onclick = () => { 
    modal.classList.remove('active'); 
    init(); // Actualiza la pantalla principal inmediatamente al cerrar el modal 
};

// --- MULTI-MOTOR DE PARTÍCULAS SE MANTIENE OPERATIVO ---
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

    const loveWords = ["Feliz Cumpleaños", "Mi reina", "Mi princesa", "Mi bebita", "Mi mundo", "Mi esposita", "#26", "❤️", "💕"]; 
    const colors = ['#B76E79', '#6B2D5C', '#FFD1DC', '#4A2834']; 

    class LoveWordParticle { 
        constructor() { 
            this.text = loveWords[Math.floor(Math.random() * loveWords.length)]; 
            this.x = Math.random() * canvasBg.width; 
            this.y = canvasBg.height + (Math.random() * 100); 
            this.fontSize = this.text.includes('#') || this.text.length < 3 ? Math.random() * 12 + 16 : Math.random() * 6 + 13; 
            this.speedX = Math.random() * 0.4 - 0.2; 
            this.speedY = Math.random() * -0.6 - 0.2; 
            this.color = colors[Math.floor(Math.random() * colors.length)]; 
            this.alpha = Math.random() * 0.4 + 0.3; 
        }
        update() { 
            this.x += this.speedX; 
            this.y += this.speedY; 
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
            ctxBg.font = `600 ${this.fontSize}px 'Montserrat', sans-serif`; 
            ctxBg.textAlign = 'center'; 
            ctxBg.fillText(this.text, this.x, this.y); 
            ctxBg.restore(); 
        }
    }

    function createParticles() { 
        const numberOfParticles = 20; 
        for (let i = 0; i < numberOfParticles; i++) { 
            particlesArray.push(new LoveWordParticle()); 
            particlesArray[i].y = Math.random() * canvasBg.height; 
        }
    }

    function animate() { 
        ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height); 
        particlesArray.forEach(p => { p.update(); p.draw(); }); 
        requestAnimationFrame(animate);
    }
    createParticles();
    animate();
}

init();