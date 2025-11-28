// Inicializar Animações AOS
AOS.init({
    once: true,
    offset: 100,
    duration: 800,
});

// --- 1. CONFIGURAÇÃO DAS AVALIAÇÕES DO GOOGLE (REAIS) ---
const reviews = [
    {
        name: "Igor Amaral",
        initial: "I",
        color: "bg-primary",
        text: "Eu tinha medo de fazer quiropraxia, mas a equipe do instituto Celer foi super atenciosa e me explicou tudo direitinho, após fazer todos os procedimentos, saí de lá leve. A dor que eu estava sentindo a mais de uma semana foi minimizada já na primeira visita, estou bem melhor agora!"
    },
    {
        name: "Selma Pires",
        initial: "S",
        color: "bg-success",
        text: "Minha irmã me indicou o espaço e sem dúvidas foi a melhor escolha que fiz. O Doutor Lucas é muito atencioso, me explicou tudo do começo ao fim e me passou segurança. O atendimento é individualizado, diferente de outras clínicas. Saí muito mais aliviada e feliz. Obrigado Doutor!"
    },
    {
        name: "Caio Cesar",
        initial: "C",
        color: "bg-info",
        text: "Profissional experiente e muito completo. Com uma sessão já melhorou totalmente todas as dores que eu estava sentindo, sempre com atenção a todos detalhes da minha situação em específico. Pretendo continuar o acompanhamento e recomendo fortemente a todos!"
    },
    {
        name: "Camila Beatriz",
        initial: "C",
        color: "bg-warning text-dark",
        text: "Ótima clínica de fisioterapia, ótima localização, todos muito atenciosos e profissionais! Indico muito!! 👏🏻👏🏻👏🏻"
    },
    {
        name: "Victor Hugo Lopes",
        initial: "V",
        color: "bg-danger",
        text: "Primeira vez que tive a experiência de fazer quiropraxia. Dr. Lucas foi totalmente atencioso, explicou o método, passou segurança e realizou com êxito. Foi muito bacana, fechei mais 5 sessões pois é realmente aliviador."
    }
];

// Função para Gerar os Cards de Depoimento no HTML
function renderReviews() {
    const container = document.getElementById('google-reviews-container');
    
    // Verifica se o container existe e ESTÁ VAZIO para evitar duplicação
    if (container && container.innerHTML.trim() === "") {
        reviews.forEach(review => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            slide.innerHTML = `
                <div class="testimonial-card h-100">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                            <div class="${review.color} text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; font-weight: bold;">
                                ${review.initial}
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-dark">${review.name}</h6>
                                <small class="text-muted"><i class="fas fa-check-circle text-success small"></i> Cliente Verificado</small>
                            </div>
                        </div>
                        <i class="fab fa-google text-muted" title="Avaliação do Google"></i>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <p class="text-muted fst-italic">"${review.text}"</p>
                </div>
            `;
            container.appendChild(slide);
        });
    }
}

// Executa a função
renderReviews();


// --- 2. INICIALIZAÇÃO DOS SLIDERS (SWIPER) ---

// Swiper de Serviços
var swiperServices = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Swiper de Depoimentos
var swiperTestimonials = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Swiper de Vídeos
var videoSwiper = new Swiper(".videoSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { 
            slidesPerView: 2, 
            spaceBetween: 40 
        }
    },
});