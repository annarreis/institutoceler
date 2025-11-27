// Inicializar Animações AOS
AOS.init({
    once: true,
    offset: 100,
    duration: 800,
});

// --- 1. CONFIGURAÇÃO DAS AVALIAÇÕES DO GOOGLE ---
const reviews = [
    {
        name: "Ricardo Silva",
        initial: "R",
        color: "bg-primary",
        text: "Fiz algumas sessões de Quiro e as minhas costas ficaram 100%! Profissionais muito atenciosos e ambiente excelente."
    },
    {
        name: "Mariana Lima",
        initial: "M",
        color: "bg-success",
        text: "Cheguei com dor no joelho que me impedia de correr. Após o tratamento e fortalecimento, voltei aos treinos sem dor. Recomendo demais!"
    },
    {
        name: "Carlos Eduardo",
        initial: "C",
        color: "bg-info",
        text: "Estrutura fantástica. O recovery pós-treino com bota pneumática é essencial na minha rotina agora. O atendimento é nota 10."
    },
    {
        name: "Fernanda Souza",
        initial: "F",
        color: "bg-warning text-dark",
        text: "O Dr. Lucas é excelente. Explicou exatamente o que eu tinha e o tratamento foi super eficaz. A clínica é muito limpa e organizada."
    },
    {
        name: "João Pedro",
        initial: "J",
        color: "bg-danger",
        text: "Melhor quiropraxia da região do Ipiranga. Preço justo e resultado rápido. Agradeço a toda equipe pelo cuidado."
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