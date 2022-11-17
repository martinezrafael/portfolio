//Funções construtoras

//função que criar um novo propjeto através do instanciamento
function Projeto(
  title,
  linkDeploy,
  linkRepository,
  titleLink1,
  titleLink2,
  image
) {
  this.title = title;
  this.link = linkDeploy;
  this.linkRepository = linkRepository;
  this.linkOne = titleLink1;
  this.linkTwo = titleLink2;
  this.image = image;
}

//função que criar um novo curso através do instanciamento
function Curso(title, nameSchool, logotype) {
  this.title = title;
  this.description = nameSchool;
  this.logotype = logotype;
}

//função que criar uma nova experiência através do instanciamento
function Experiencia(occupation, company, resume, startDate, endDate) {
  this.occupation = occupation;
  this.company = company;
  this.resume = resume;
  this.start = startDate;
  this.end = endDate;
}

//Array de projetos, onde é instanciada a função que cria um projeto
const projetos = [
  new Projeto(
    "Lembretes",
    "https://frases-acalme.netlify.app/",
    "https://github.com/martinezrafael/frases",
    "Acessar site",
    "Ver Código",
    "https://user-images.githubusercontent.com/33470634/184424142-5114128b-ea9c-47f4-90d7-7d8ceab60842.png"
  ),

  new Projeto(
    "thequiz",
    "https://martinezrafael.github.io/the-quiz-project/",
    "https://github.com/martinezrafael/the-quiz-project",
    "Acessar site",
    "Ver Código",
    "https://user-images.githubusercontent.com/33470634/184411431-c617fd09-60e6-454a-9b8a-084d734d7ef7.png"
  ),

  new Projeto(
    "Churrascômetro",
    "https://martinezrafael.github.io/projeto-churrascometro/",
    "https://github.com/martinezrafael/projeto-churrascometro",
    "Acessar site",
    "Ver Código",
    "https://user-images.githubusercontent.com/33470634/184413999-24883700-777b-4635-b9cb-d74dfe1ed8d9.png"
  ),

  new Projeto(
    "Blog (Desafio Codelândia)",
    "https://martinezrafael.github.io/desafio1-codelandia/",
    "https://github.com/martinezrafael/desafio1-codelandia",
    "Acessar site",
    "Ver Código",
    "https://user-images.githubusercontent.com/33470634/184413252-52cda34d-70ff-46c4-91f6-99b7eb5b9b03.png"
  ),

  new Projeto(
    "Página de captura de lead",
    "https://martinezrafael.github.io/pagina-captura-curso-progbr/",
    "https://github.com/martinezrafael/pagina-captura-curso-progbr",
    "Acessar site",
    "Ver Código",
    "https://user-images.githubusercontent.com/33470634/184373664-82ea1213-5320-49e9-8884-f0544e1dffef.png"
  ),
];

//Array de cursos, onde é instanciada a função que cria um curso
const cursos = [
  new Curso(
    "Web Development Bootcamp",
    "Ironhack São Paulo",
    "/assets/images/home/ironhack-logo.png"
  ),

  new Curso(
    "Desenvolvimento Web Fullstack",
    "Programador BR",
    "/assets/images/home/progbr-logo.png"
  ),
  new Curso(
    "Desenvolvimento Frontend & UX/UI Design",
    "Origamid",
    "/assets/images/home/origamid.png"
  ),
];

//Função que cria um card quadrado
const cardSquare = (
  arr,
  rootElement,
  classCard,
  classTitle,
  classLinks,
  classImage
) => {
  let root = document.querySelector(rootElement);

  root.innerHTML = arr
    .map((element) => {
      return `
      <div class='${classCard}'>
        <div>
          <h3 class='${classTitle}'>${element.title}</h3>
        </div>

        <div class='${classImage}' style='background-image: url(${element.image})'></div>

        <div class='${classLinks}'>
          <a href='${element.link}' target='_blank'>${element.linkOne}</a>
          <a href='${element.linkRepository}' target='_blank'>${element.linkTwo}</a> 
        </div>
      </div>
    `;
    })
    .join("");
};

//Função que cria um card redondo
const cardRound = (
  arr,
  rootElement,
  classCard,
  classImage,
  classTitle,
  classDescription
) => {
  let root = document.querySelector(rootElement);

  root.innerHTML = arr
    .map((element) => {
      return `
    <div class='${classCard}'>
      <div style='background-image: url(${element.logotype})' class='${classImage}'></div>
      <h3 class='${classTitle}'>${element.title}</h3>
      <p class='${classDescription}'>${element.description}</p>
    </div>
    `;
    })
    .join("");
};

//Quando o navegador carrega a minha página, ele executa as minhas funções
window.onload = () => {
  cardSquare(
    projetos,
    ".projects__list",
    "project__card",
    "project__title",
    "project__card___links",
    "project__card___image"
  );

  cardRound(
    cursos,
    ".courses__list",
    "course__card",
    "course__card___image",
    "course__card___title",
    "course__card___school"
  );
};
