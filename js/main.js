function getElement(element){
    return document.querySelector(element);
}

const portfolioButton = getElement("#portfolio");
const contactsButton  = getElement("#contacts");
const aboutButton     = getElement("#about");
const cardAbout       = getElement(".card-about");
const cardAboutClass  = cardAbout.className;
const container       = getElement(".container")

const contentCardPortfolio = `
<div class="owl-carousel owl-theme ">
                        <div class="item" id="#item1">
                            <a href="https://luan-sabino.github.io/PokeDex/" target="_blank">
                                <img src="imgs/pokedex.png" alt="" class="box-img">
                                <p>PokeDex</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://luan-sabino.github.io/task-manager/" target="_blank">
                                <img src="imgs/taskmanager.png" alt="" class="box-img">
                                <p>Gerenciador de Tarefas</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://github.com/luan-sabino/PokeStore" target="_blank">
                                <img src="imgs/pokeStore.png" alt="" class="box-img">
                                <p>PokeStore</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://luan-sabino.github.io/snake-game/" target="_blank">
                                <img src="imgs/snakegame.png" alt="" class="box-img">
                                <p>Jogo da Cobrinha</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://github.com/luan-sabino/netflix-frontpage-clone" target="_blank">
                                <img src="imgs/netflixclone.png" alt="" class="box-img">
                                <p>Replica Netflix Front-page</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://github.com/luan-sabino/instagramcontinuepage" target="_blank">
                                <img src="imgs/instagramloginclone.png" alt="" class="box-img">
                                <p>Replica Instagram Login Page </p>
                            </a>
                        </div>
                    </div>
                </div>
`

function insertCarousel(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        dots: true,
        loop: false,
        responsiveBaseElement: "#card-about",
        responsive : {
            0 : {
                items:1,
            },
            480  : {
                items:1,
            },
            768  : {
                items:1,
            },
            1024 : {
                items:1,
            }
        }
    })
}

portfolioButton.addEventListener('click', ()=>{
    cardChange(contentCardPortfolio);
    insertCarousel();

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
    `<p id="aboutMe">Atualmente sou bacharelando em Ciencia da Computação pela
    FCT-UNESP. Tenho 21 anos, sou apaixonado por tecnologia e amo resolver problemas. Gosto muito de
    Desenvolvimento Web e Mobile, e alterno meus estudos entre os conteudos da faculdade, e essas duas areas.</p>`
    );
});

function cardChange(cardContent){
    cardAbout.parentNode.removeChild(cardAbout);
    cardAbout.innerHTML = cardContent;
    cardAbout.className = cardAboutClass + " component-style show-card";
    container.appendChild(cardAbout);
}