// function Projeto(title, linkDeploy, linkRepository, titleLink1, titleLink2, image) {
//   this.title = title;
//   this.link = linkDeploy;
//   this.linkRepository = linkRepository;
//   this.linkOne = titleLink1;
//   this.linkTwo = titleLink2;
//   this.image = image;
// }

// const projetos = [
//   new Projeto(
//     "Lembretes",
//     "https://frases-acalme.netlify.app/",
//     "https://github.com/martinezrafael/frases",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184424142-5114128b-ea9c-47f4-90d7-7d8ceab60842.png'
//   ),

//   new Projeto(
//     "thequiz v1",
//     "https://martinezrafael.github.io/the-quiz-project/",
//     "https://github.com/martinezrafael/the-quiz-project",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184411431-c617fd09-60e6-454a-9b8a-084d734d7ef7.png'
//   ),

//   new Projeto(
//     "thequiz v2",
//     "https://thequiz.vercel.app/pages/game.html",
//     "https://github.com/martinezrafael/thequiz",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184420017-7efad556-8440-4173-b64f-30ec2104b57f.png'
//   ),

//   new Projeto(
//     "Churrascômetro",
//     "https://martinezrafael.github.io/projeto-churrascometro/",
//     "https://github.com/martinezrafael/projeto-churrascometro",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184413999-24883700-777b-4635-b9cb-d74dfe1ed8d9.png'
//   ),

//   new Projeto(
//     "Blog (Desafio Codelândia)",
//     "https://martinezrafael.github.io/desafio1-codelandia/",
//     "https://github.com/martinezrafael/desafio1-codelandia",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184413252-52cda34d-70ff-46c4-91f6-99b7eb5b9b03.png'
//   ),

//   new Projeto(
//     "Página de captura de lead",
//     "https://martinezrafael.github.io/pagina-captura-curso-progbr/",
//     "https://github.com/martinezrafael/pagina-captura-curso-progbr",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184373664-82ea1213-5320-49e9-8884-f0544e1dffef.png'
//   ),

//   new Projeto(
//     "Space Rent",
//     "https://spacerent.vercel.app/",
//     "https://github.com/martinezrafael/space-rent-client",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/167211600-542b1ead-f869-48dd-847a-7311681ab4d4.png'
//   ),

//   new Projeto(
//     "Cardápio",
//     "https://elaborate-druid-9f33fd.netlify.app/cardapio-barra.html",
//     "https://github.com/martinezrafael/cardapios-lafruteria",
//     "Acessar site",
//     "Ver Código",
//     'https://user-images.githubusercontent.com/33470634/184415906-4b956c14-8c23-4de0-ad9c-a463e76b32b6.png'
//   ),
// ];


// const cardSquare = (arr, rootElement, classCard, classTitle, classLinks, classImage) => {
//   let root = document.querySelector(rootElement);

//   root.innerHTML = arr
//     .map((element) => {
//       return `
//       <div class='${classCard}'>
//         <div>
//           <h3 class='${classTitle}'>${element.title}</h3>
//         </div>

//         <div class='${classImage}' style='background-image: url(${element.image})'></div>

//         <div class='${classLinks}'>
//           <a href='${element.link}' target='_blank'>${element.linkOne}</a>
//           <a href='${element.linkRepository}' target='_blank'>${element.linkTwo}</a> 
//         </div>
//       </div>
//     `;
//     })
//     .join("");
// };

// cardSquare(
//   projetos,
//   ".projects__list",
//   "project__card",
//   "project__title",
//   "project__card___links",
//   "project__card___image"
// );