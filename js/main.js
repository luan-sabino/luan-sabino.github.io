function getElement(element){
    return document.querySelector(element);
}



function createGlider(element){
        new Glider(document.querySelector(element), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dragVelocity: 1.4,
            scrollLock: true,
            dots: ".js-carousel--responsive-dots",
            arrows: {
              prev: ".js-carousel--responsive-prev",
              next: ".js-carousel--responsive-next",
            },
        });
      
}

const portfolioButton = getElement("#portfolio");
const contactsButton  = getElement("#contacts");
const aboutButton     = getElement("#about");
const cardAbout       = getElement(".card-about");
const cardAboutClass  = cardAbout.className;
const container       = getElement(".container")

portfolioButton.addEventListener('click', ()=>{
    cardChange(`
    <div class="glider-contain">
                <div class="glider">
                    <div class="c-carousel__slide">
                        <a href="https://luan-sabino.github.io/PokeDex/" target="_blank">
                            <img src="imgs/pokedex.png" alt="">
                            <p>PokeDex</p>
                        </a>
                    </div>
                    <div class="c-carousel__slide">
                        <a href="https://luan-sabino.github.io/task-manager/" target="_blank">
                            <img src="imgs/taskmanager.png" alt="">
                            <p>Gerenciador de Tarefas</p>
                        </a>
                    </div>
                    <div class="c-carousel__slide">
                        <a href="https://github.com/luan-sabino/PokeStore" target="_blank">
                            <img src="imgs/pokeStore.png" alt="">
                            <p>PokeStore</p>
                        </a>
                    </div>
                    <div class="c-carousel__slide">
                        <a href="https://luan-sabino.github.io/snake-game/" target="_blank">
                            <img src="imgs/snakegame.png" alt="">
                            <p>Jogo da Cobrinha</p>
                        </a>
                    </div>
                    <div class="c-carousel__slide">
                        <a href="https://github.com/luan-sabino/netflix-frontpage-clone" target="_blank">
                            <img src="imgs/netflixclone.png" alt="">
                            <p>Replica Netflix Front-page</p>
                        </a>
                    </div>
                    <div class="c-carousel__slide">
                        <a href="https://github.com/luan-sabino/instagramcontinuepage" target="_blank">
                            <img src="imgs/instagramloginclone.png" alt="">
                            <p>Replica Instagram Login Page </p>
                        </a>
                    </div>
                </div>
            </div>
    `, ' c-carousel__slides');
    createGlider('.glider');
});

contactsButton.addEventListener('click', ()=>{
    cardChange(`
    <i class="far fa-envelope"></i>
    <a href="mailto: luanphy.y@gmail.com">luanphy.y@gmail.com</a>
    <i class="fab fa-github"></i>
    <a href="https://github.com/luan-sabino" target="_blank">luan-sabino</a>
    <i class="fab fa-twitter"></i>
    <a href="https://twitter.com/lupsabino" target="_blank">@lupsabino</a>
    <i class="fab fa-linkedin"></i>
    <a href="https://www.linkedin.com/in/luan-sabino/" target="_blank">luan-sabino</a>
    `);
});

aboutButton.addEventListener('click', ()=>{
    cardChange(
    `<p>Atualmente sou bacharelando em Ciencia da Computação pela
    FCT-UNESP. Tenho 21 anos, sou apaixonado por tecnologia e amo resolver problemas. Gosto muito de
    Desenvolvimento Web e Mobile, e alterno meus estudos entre os conteudos da faculdade, e essas duas areas.</p>`
    );
});

function cardChange(cardContent, carousel = ''){
    cardAbout.parentNode.removeChild(cardAbout);
    cardAbout.innerHTML = cardContent;
    cardAbout.className = cardAboutClass + " component-style show-card" + carousel;
    container.appendChild(cardAbout);
}